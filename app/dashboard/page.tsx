import { Input } from "@/components/ui/input";
import {Services} from "@/components/services";
import { Button } from "@/components/ui/button";
import {SidebarSheet} from "@/components/sidebar-sheet";

export default function DashboardPage() {
    return (
        <div className="flex flex-col flex-grow">
				<div className="flex items-center justify-between h-16 mb-6 bg-white shadow">
					<SidebarSheet />
					<Input className="mx-4 m-3" placeholder="Search area" />
					<div className="flex items-center mr-4 space-x-2">
						<Button variant="ghost">
							<SettingsIcon className="w-5 h-5" />
						</Button>
						<Button variant="ghost">
							<LayoutGridIcon className="w-5 h-5" />
						</Button>
						<Button variant="ghost">
							<UserCircleIcon className="w-5 h-5" />
						</Button>
					</div>
				</div>
				<h2 className="mb-2 text-xl font-semibold">All services</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
					{Array(10).fill(0).map((e, i) => (
                        <Services key={"service - " + i} src="/service.png" name={"service - " + i} />
                    ))}
				</div>
				
			</div>
    )
}

function SettingsIcon(props: Record<string, any>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}

function UserCircleIcon(props: Record<string, any>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="10" r="3" />
			<path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
		</svg>
	);
}


function LayoutGridIcon(props: Record<string, any>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="7" height="7" x="3" y="3" rx="1" />
			<rect width="7" height="7" x="14" y="3" rx="1" />
			<rect width="7" height="7" x="14" y="14" rx="1" />
			<rect width="7" height="7" x="3" y="14" rx="1" />
		</svg>
	);
}