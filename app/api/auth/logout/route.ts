import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

export const POST = async (_: NextRequest) => {
    cookies().delete("token");
    return NextResponse.json({message: "تم تسجيل الخروج بنجاح"}, {status: 200});
}