import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import {getProtectedRequest, ProtectedRequest} from "@/lib/protectedRequest";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        // Set permissions and file types for this FileRoute
        .middleware(async ({ req }) => {
            // This code runs on your server before upload
            const protectedRequest = await getProtectedRequest(req) as ProtectedRequest;

            // If you throw, the user will not be able to upload
            if (!protectedRequest.user) throw new UploadThingError("Unauthorized");

            // Whatever is returned here is accessible in onUploadComplete as `metadata`
            return { userId: protectedRequest.user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {

            // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
            return { url: file.url };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;