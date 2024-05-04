import Image from "next/image";
import { Button } from "@/components/ui/button";
import  {NavButton} from "@/components/nav-button";
import { Columns2, Server, Key, Circle, Bell, User } from 'lucide-react';

export function Sidebar() {
	return (
		<div className="flex h-fit scroll-auto">
			<div className="flex flex-col w-64 h-full mr-8">
				<div className="flex items-center h-16 mb-6 bg-white lg:shadow">
					<Image
						src={"/logo-removebg-preview.png"}
						width={200}
						height={100}
						alt={"logo"}
					/>
				</div>
				<div className="flex flex-col flex-grow p-4 space-y-4 bg-white lg:shadow">
					<Button className="justify-start" variant="ghost">
						<Columns2 className="w-5 h-5 mr-2" />
						Over View{"\n              "}
					</Button>
					<NavButton href="/dashboard" label="Services">
						<Server className="w-5 h-5 mr-2" />
					</NavButton>
					<NavButton href="/dashboard/keys" label="API Key">
						<Key className="w-5 h-5 mr-2" />
					</NavButton>
					<Button className="justify-start" variant="ghost">
						<Circle className="w-5 h-5 mr-2" />
						About us{"\n              "}
					</Button>
					<Button className="justify-start" variant="ghost">
						<Bell className="w-5 h-5 mr-2" />
						Notification{"\n              "}
					</Button>
					<Button className="justify-start" variant="ghost">
						<User className="w-5 h-5 mr-2" />
						Profile{"\n              "}
					</Button>
				</div>
			</div>
		</div>
	);
}
