import {Sidebar} from "@/components/sidebar";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <div className="flex h-screen p-8 bg-gray-100">
            <Sidebar />
            {children}
        </div>
    )
}