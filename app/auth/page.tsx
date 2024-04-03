"use client";
import AuthBackground from "@/public/auth_background.png";
import {
    Dialog,
} from "@/components/ui/dialog";
import {useEffect, useState} from "react";
import {Login} from "@/components/login";
import {Signup} from "@/components/signup";


export default function Auth() {
    const [open, setOpen] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [login, setLogin] = useState(true);
    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted ? (
        <div
            className={"min-h-screen w-screen bg-cover bg-center brightness-75"}
            style={{
                backgroundImage: `url(${AuthBackground.src})`,
            }}
        >
            <Dialog defaultOpen open={open} onOpenChange={() => setOpen(true)} modal={false}>
                {login ? <Login setLogin={setLogin} /> : <Signup setLogin={setLogin} />}
            </Dialog>
        </div>
    ) : null
}