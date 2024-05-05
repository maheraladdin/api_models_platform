import {NextResponse, NextRequest} from "next/server";
import db from "@/lib/db";
import {z} from "zod";
import generateTokenAndSetCookies from "@/lib/generateTokenAndSetCookie";
import bcrypt from "bcryptjs"

const signupSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
    username: z
        .string()
        .min(2, { message: "First name must be at least 2 characters" }),
    phone: z
        .string()
        .min(11, { message: "Phone number must be at least 11 characters" }),
});


export const POST = async (req: NextRequest) => {
    const body = await req.json();

    let userData;
    try {
        userData = signupSchema.parse(body);
    } catch (e: any) {
        return new NextResponse(e.errors[0].message, {status: 400});
    }

    const {username, email, password, phone} = userData;

    // check if user already exists
    const userExists = await db.user.findFirst({
        where: {
            OR: [
                {
                    email
                },
                {
                    phone
                }
            ]
        }
    });

    if(userExists) {
        return new NextResponse("البريد الالكتروني او رقم الجوال مستخدم بالفعل", {status: 400});
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);


    try {
        const user = await db.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                phone,
            }
        });
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
            message: "user signed up successfully"
        }, {status: 201});
    } catch {
        return new NextResponse("حدث خطأ ما", {status: 500});
    }
}