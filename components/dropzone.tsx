"use client";

import {UploadDropzone} from "@/utils/uploadthing";

export const DropZone = () => {
    return (
        <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                // Do something with the response.
                const url = res[0].url;
                alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
            }}
        />
    )
}