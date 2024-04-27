"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function NavButton({
    label,
    children,
    href
}: {
    label: string,
    children: React.ReactNode,
    href: string,
}) {
    const router = useRouter();

    return (
        <Button onClick={() => router.push(href)} className="justify-start" variant="ghost">
            {children}
            {label}
        </Button>
    )
}