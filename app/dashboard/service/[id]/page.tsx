import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Services} from "@/components/services";
import {DropZone} from "@/components/dropzone";
import {SidebarSheet} from "@/components/sidebar-sheet";
import { Settings, LayoutGrid, CircleUserRound } from 'lucide-react';


export default function ServicePage({ params }: { params: { id: string } }) {
	return (
		<div className="flex flex-col">
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
			<DropZone />
            <div>
            	<h2 className="mt-5 mb-3 text-xl font-semibold">Explore Other services </h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
					{Array(5).fill(0).map((e, i) => (
                        <Services key={"service - " + i} src="/service.png" name={"service - " + i} />
                    ))}
				</div>
            </div>
		</div>
	);
}
