import {NextRequest, NextResponse} from "next/server";
import * as tf from '@tensorflow/tfjs';

interface Tokenizer {
    tokenize: (texts: string[]) => tf.data.Dataset<string>;
    indexWord: { [key: number]: string }; // Add this line
}

const MAX_LENGTH = 35

async function loadModelFromUrl(url: string) {
    return await tf.loadLayersModel(url);
}

async function loadVGG16() {
    // load the VGG16 model with no top layers
    const vgg_model = await loadModelFromUrl('https://utfs.io/f/4dc76adb-5435-4ef8-af8b-adb03eeb7ed0-c7d7eb.h5');

    // build a new model with the VGG16 model as the base
    const model = tf.sequential();
    model.add(vgg_model);

    // Add top layers
    model.add(tf.layers.flatten({name: 'flatten'}));
    model.add(tf.layers.dense({ units: 4096, activation: 'relu', inputDim: 25088, name: 'fc1' }));
    model.add(tf.layers.dense({ units: 4096, activation: 'relu', name: 'fc2' }));

    return model;
}

async function loadImageFromURL(url: string): Promise<tf.Tensor3D> {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // Enable CORS
    img.src = url;

    return new Promise<tf.Tensor3D>((resolve, reject) => {
        img.onload = () => {
            const tensor = tf.browser.fromPixels(img);
            resolve(tensor);
        };
        img.onerror = (err) => {
            reject(err);
        };
    });
}

let vgg_model: tf.Sequential | null = null;
let model: tf.LayersModel | null = null;

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const { imageUrl } = body;

    // Load the vgg_model
    if(!vgg_model) vgg_model = await loadVGG16();

    // Load the model
    if(!model) model = await loadModelFromUrl('https://utfs.io/f/d979f760-5429-4414-8fc8-c3ed50112947-c1kfr1.h5');

    // Load the image
    const imageTensor: tf.Tensor3D = await loadImageFromURL(imageUrl);

    // Preprocess the image

    // Resize the image to match VGG input size
    const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]);

    // Convert the image to RGB if it's not already in that mode
    const rgbImage = tf.cast(resizedImage, 'float32');

    // Normalize pixel values to the range of [0, 1]
    const normalizedImage = tf.div(rgbImage, 255.0);

    // Mean center the image
    const meanCenteredImage = tf.sub(normalizedImage, tf.scalar(0.5));

    // Scale pixel values to the range of [-1, 1]
    const preprocessedImage = tf.mul(meanCenteredImage, tf.scalar(2.0));

    // Add a batch dimension
    const input = preprocessedImage.expandDims(0);

    // Get the image features
    const feature = vgg_model.predict(input, {
        verbose: false,
        batchSize: 1
    }) as tf.Tensor<tf.Rank>;

    // load tokenizer from json file
    const tokenizer: Tokenizer = await fetch('https://utfs.io/f/541648fc-01e7-4aaf-a5ae-a6756eab96dc-2cm87r.json')
        .then(response => response.json());

    // Get the prediction

    // add start tag for the input text
    let in_text = 'startseq'
    for (let i = 0; i < MAX_LENGTH; i++) {

        // encode the input text
        let sequence = tokenizer.tokenize([in_text]).map((text: string) => text.split(' '));

        // pad the input sequence
        sequence = sequence.map((seq: string[]) => {
            const pad = Array(MAX_LENGTH - seq.length).fill('0');
            return seq.concat(pad);
        });

        // Convert Dataset<string[]> to Dataset<number[]>
        const numberDataset = sequence.map((stringArray: string[]) => stringArray.map(Number));

        // Convert Dataset<number[]> to Tensor<Rank>
        const  tensor: tf.Tensor<tf.Rank> = tf.tensor(await numberDataset.toArray());

        // predict the next word
        const prediction = model.predict([feature, tensor]) as tf.Tensor<tf.Rank>;

        // get index with high probability
        const argmax = prediction.argMax(1);

        // get the word
        const word = await argmax.data();

        // convert word index to word
        const wordIndex = word[0];

        // convert word index to word
        const wordText = tokenizer.indexWord[wordIndex];

        // break if we cannot find the word
        if (wordText === undefined) break;

        // add the word to the input text
        in_text += ' ' + wordText;

        // break if we found the end tag
        if (wordText === 'endseq') break;
    }

    // remove start and end tags
    const caption = in_text.replace('startseq', '').replace('endseq', '');

    return NextResponse.json({
        caption,
        message: 'caption generated successfully!'
    });

}