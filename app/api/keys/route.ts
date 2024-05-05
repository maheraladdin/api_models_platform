import {NextRequest, NextResponse} from "next/server";
import db from "@/lib/db";
import {getProtectedRequest, ProtectedRequest} from "@/lib/protectedRequest";


export const GET = async (req: NextRequest) => {
    const protectedRequest = await getProtectedRequest(req) as ProtectedRequest;
    const keys = await db.keys.findMany({
        where: {
            userId: protectedRequest.user.id
        }
    });

    return NextResponse.json({
        keys,
        message: "Keys fetched successfully"
    });
}

export const POST = async (req: NextRequest) => {
    const protectedRequest = await getProtectedRequest(req) as ProtectedRequest;
    const body = await req.json();
    const {limit}: {limit: number} = body;
    const key = await db.keys.create({
        data: {
            userId: protectedRequest.user.id,
            limit
        }
    });

    return NextResponse.json({
        key,
        message: "Key created successfully"
    });
}