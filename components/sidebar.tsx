import Image from "next/image";
import { Button } from "@/components/ui/button";
import  {NavButton} from "@/components/nav-button";
export function Sidebar() {
	return (
		<div className="flex h-screen bg-gray-100">
			<div className="flex flex-col w-64 h-full mr-8">
				<div className="flex items-center justify-center h-16 mb-6 bg-white shadow">
					<Image
						src={"/logo-removebg-preview.png"}
						width={200}
						height={100}
						alt={"logo"}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="lucide lucide-menu"
					>
						<line x1="4" x2="20" y1="12" y2="12" />
						<line x1="4" x2="20" y1="6" y2="6" />
						<line x1="4" x2="20" y1="18" y2="18" />
					</svg>
				</div>
				<div className="flex flex-col flex-grow p-4 space-y-4 bg-white shadow">
					<Button className="justify-start" variant="ghost">
						<ColumnsIcon className="w-5 h-5 mr-2" />
						Over View{"\n              "}
					</Button>
					<NavButton href="/dashboard" label="Services">
						<ServerIcon className="w-5 h-5 mr-2" />
					</NavButton>
					<NavButton href="/dashboard/keys" label="API Key">
						<KeyIcon className="w-5 h-5 mr-2" />
					</NavButton>
					<Button className="justify-start" variant="ghost">
						<CircleIcon className="w-5 h-5 mr-2" />
						About us{"\n              "}
					</Button>
					<Button className="justify-start" variant="ghost">
						<BellIcon className="w-5 h-5 mr-2" />
						Notification{"\n              "}
					</Button>
					<Button className="justify-start" variant="ghost">
						<UserIcon className="w-5 h-5 mr-2" />
						Profile{"\n              "}
					</Button>
				</div>
			</div>
		</div>
	);
}

function BellIcon(props: Record<string, any>) {
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
			<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
		</svg>
	);
}

function CircleIcon(props: Record<string, any>) {
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
		</svg>
	);
}

function ColumnsIcon(props: Record<string, any>) {
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
			<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
			<line x1="12" x2="12" y1="3" y2="21" />
		</svg>
	);
}

function KeyIcon(props: Record<string, any>) {
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
			<circle cx="7.5" cy="15.5" r="5.5" />
			<path d="m21 2-9.6 9.6" />
			<path d="m15.5 7.5 3 3L22 7l-3-3" />
		</svg>
	);
}

function ServerIcon(props: Record<string, any>) {
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
			<rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
			<rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
			<line x1="6" x2="6.01" y1="6" y2="6" />
			<line x1="6" x2="6.01" y1="18" y2="18" />
		</svg>
	);
}

function UserIcon(props: Record<string, any>) {
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
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}
