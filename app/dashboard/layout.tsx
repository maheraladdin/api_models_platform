import {Sidebar} from "@/components/sidebar";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <div className="flex min-h-screen h-full p-8 bg-gray-100">
            <div className={"hidden lg:block"}>
                <Sidebar />
            </div>
            {children}
        </div>
    )
}