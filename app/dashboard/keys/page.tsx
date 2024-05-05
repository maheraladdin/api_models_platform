import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {SidebarSheet} from "@/components/sidebar-sheet";
import { Settings, LayoutGrid, CircleUserRound } from 'lucide-react';
import {KeysTable} from "@/components/keys-table";


export default function KeysPage() {
	return (
		<div className="flex flex-col flex-grow">
			<div className="flex items-center justify-between h-16 mb-6 bg-white shadow">
				<SidebarSheet />
				<Input className="mx-4 m-3" placeholder="Search area" />
				<div className="flex items-center mr-4 space-x-2">
					<Button variant="ghost">
						<Settings className="w-5 h-5" />
					</Button>
					<Button variant="ghost">
						<LayoutGrid className="w-5 h-5" />
					</Button>
					<Button variant="ghost">
						<CircleUserRound className="w-5 h-5" />
					</Button>
				</div>
			</div>
			<KeysTable />
		</div>
	);
}