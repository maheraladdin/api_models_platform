"use client";

import {useUser} from "@/hooks/useUser";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export const IsAuthorized = ({children}: {
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const user = useUser((state) => state.user);

    useEffect(() => {
        if(!user) {
            router.push("/");
        }
    }, [user, router]);

    return user ? children : null;
}