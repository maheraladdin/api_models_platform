import { Input } from "@/components/ui/input";
import {Services} from "@/components/services";
import { Button } from "@/components/ui/button";
import {SidebarSheet} from "@/components/sidebar-sheet";
import { Settings, LayoutGrid, CircleUserRound } from 'lucide-react';


export default function DashboardPage() {
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
			<h2 className="mb-2 text-xl font-semibold">All services</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
				{Array(10).fill(0).map((e, i) => (
					<Services key={"service - " + i} src="/service.png" name={"service - " + i} />
				))}
			</div>
		</div>
    )
}