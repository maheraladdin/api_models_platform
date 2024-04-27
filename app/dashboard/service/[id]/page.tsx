import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	CardTitle,
	Card,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import {Services} from "@/components/services";

export default function ServicePage({ params }: { params: { id: string } }) {
	return (
		<div className="flex flex-col flex-grow">
			<div className="flex items-center justify-between h-16 mb-6 bg-white shadow">
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
			<div className="grid grid-cols-3 gap-2">
				<Card className="col-span-2 flex flex-col justify-between h-[250px]">
					<CardHeader>
						<CardTitle className="text-center font-bold ">
							Image description
						</CardTitle>
					</CardHeader>
					<CardFooter className="flex justify-end gap-5">
						<Button className="px-10" variant="outline">
							Copy
						</Button>
						<Button className="px-10">Share</Button>
					</CardFooter>
				</Card>
				<Card className="h-[250px] flex flex-col justify-center align-center cursor-pointer">
						<Image src="/upload.png" width={342 * 0.8} height={357 * 0.8} className="p-12" alt="upload"/>
				</Card>
			</div>
            <div>
            <h2 className="mt-5 mb-3 text-xl font-semibold">Explore Other services </h2>
				<div className="grid grid-cols-5 gap-5">
					{Array(5).fill(0).map((e, i) => (
                        <Services key={"service - " + i} src="/service.png" name={"service - " + i} />
                    ))}
				</div>
            </div>
		</div>
	);
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
