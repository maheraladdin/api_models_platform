"use client";

import {useState} from "react";
import {Login} from "@/components/login";
import {Signup} from "@/components/signup";
import {Card} from "@/components/ui/card";


export default function Auth() {
    const [login, setLogin] = useState(true);

    return (
        <div
            className={"min-h-screen flex justify-center items-center h-full w-screen bg-cover bg-center brightness-75"}
            style={{
                backgroundImage: `url(/auth_background.png)`,
            }}
        >
            <Card className={"h-full w-fit my-10"}>
                {login ? <Login setLogin={setLogin} /> : <Signup setLogin={setLogin} />}
            </Card>
        </div>
    )
}