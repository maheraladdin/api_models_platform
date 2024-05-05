"use client";

import {UploadDropzone} from "@/utils/uploadthing";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {v4 as uuidv4} from "uuid";

type Path = "/api/generate_caption_eng" | "/api/generate_caption_ar"

export const DropZone = () => {
    const [image, setImage] = useState<string| null>(null);
    const [caption, setCaption] = useState<string>("")
    const predict = async (path: Path) => {
        if (!image) {
            toast.error("Please upload an image first");
            return;
        }
        try {
            const res = await axios.post(`http://127.0.0.1:8000${path}`, {
                image_url: image
            },{
                headers: {
                    "Cross-Origin-Opener-Policy": "*",
                }
            });
            setCaption(res.data.caption);
            toast.success("Caption generated successfully");
        } catch {

            toast.error("Failed to generate caption");
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <Card className="lg:col-span-2 flex flex-col justify-between">
                <CardHeader>
                    <CardTitle className="text-center font-bold ">
                        Image description
                    </CardTitle>
                </CardHeader>
                <CardContent className={"w-full flex justify-center items-center"}>
                    {caption}
                </CardContent>
                <CardFooter className="flex justify-end gap-5">
                    <Button onClick={() => predict("/api/generate_caption_eng")} className="px-10" variant="outline">
                        English
                    </Button>
                    <Button onClick={() => predict("/api/generate_caption_ar")} className="px-10">
                        Arabic
                    </Button>
                </CardFooter>
            </Card>
            <Card className="flex p-4 pt-2 flex-col justify-center align-center cursor-pointer">
                <UploadDropzone
                    endpoint="imageUploader"
                    onBeforeUploadBegin={(files) => {
                        return files.map((file) => {
                            return new File([file], `${file.name}-${uuidv4()}.jpg`, {
                                type: "image/jpeg",
                            });
                        });
                    }}
                    onClientUploadComplete={(res) => {
                        // Do something with the response.
                        const url = res[0].url;
                        setImage(url);
                        toast.success("Image ready for prediction");
                    }}
                    onUploadError={(error: Error) => {
                        // Do something with the error.
                        toast.error(`ERROR! ${error.message}`);
                    }}
                />
            </Card>
        </div>
    )
}