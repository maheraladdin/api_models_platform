import {NextResponse, NextRequest} from "next/server";
import db from "@/lib/db";
import {z} from "zod";
import generateTokenAndSetCookies from "@/lib/generateTokenAndSetCookie";
import bcrypt from "bcryptjs";


const loginSchema = z.object({
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters"}),
});


export const POST = async (req: NextRequest) => {
    const body = await req.json();

    let userData;
    try {
        userData = loginSchema.parse(body);
    } catch (e: any) {
        return new NextResponse(e.errors[0].message, {status: 400});
    }

    const {email, password} = userData;


    try {
        const user = await db.user.findUnique({
            where: {
                email
            }
        });

        if(!user) {
            return new NextResponse("البريد الالكتروني او كلمة المرور غير صحيحة", {status: 400});
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        if(!isPasswordCorrect) {
            return new NextResponse("البريد الالكتروني او كلمة المرور غير صحيحة", {status: 400});
        }

        generateTokenAndSetCookies(user.id);
        return NextResponse.json({
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                usage: user.usage,
                limit: user.limit,
            },
            message: "user logged in successfully"
        }, {status: 201});
    } catch(e: any) {
        console.log(e);
        return new NextResponse("حدث خطأ ما", {status: 500});
    }
}