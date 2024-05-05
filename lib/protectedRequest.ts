import {NextRequest, NextResponse} from "next/server";
import {User} from "@prisma/client";
import {cookies} from "next/headers";
import jwt from "jsonwebtoken";
import db from "@/lib/db";

export type ProtectedRequest = NextRequest & {
    user: User;
}

type jwtProps = {
    userId: string;
}

export const getProtectedRequest = async (req: NextRequest) => {
    const protectedRequest = req as ProtectedRequest;

    const token = cookies().get("token");

    if(!token) {
        return new NextResponse("عليك تسجيل دخولك اولاً", {status: 401});
    }

    const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as jwtProps;

    const user = await db.user.findUnique({
        where: {
            id: decoded.userId
        }
    });

    if(!user) {
        return new NextResponse("المستخدم غير مسجل", {status: 404});
    } else {
        protectedRequest.user = user;
    }

    return protectedRequest;
}