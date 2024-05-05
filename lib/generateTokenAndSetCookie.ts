import jwt from "jsonwebtoken";
import {cookies} from "next/headers";
import { headers } from 'next/headers'

const generateTokenAndSetCookies = (userId: string) => {
    const rememberMe = headers().get("rememberMe") === "true";
    const token = jwt.sign({
        userId
    }, process.env.JWT_SECRET!, {
        expiresIn: rememberMe ? "30d" : "1d" // 30 days or 1 day
    });
    cookies().set("token", token, {
        // this is to prevent XSS attacks
        httpOnly: true,
        // 30 days or 1 day
        maxAge: (rememberMe ? 30 : 1) * 24 * 60 * 60 * 1000,
        // this is to prevent CSRF attacks
        sameSite: "strict",
        // cookie expires in 30 days or 1 day
        expires: new Date(Date.now() + (rememberMe ? 30 : 1) * 24 * 60 * 60 * 1000)
    });

    return token;
}

export default generateTokenAndSetCookies;