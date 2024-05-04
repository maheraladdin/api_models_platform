import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from "@/components/ui/table";

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import {SidebarSheet} from "@/components/sidebar-sheet";
import { Settings, LayoutGrid, CircleUserRound, Plus } from 'lucide-react';


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
			<Dialog>
				<DialogTrigger asChild>
					<Button className="font-bold" variant="outline">
						<Plus className={"w-5 h-5"} />
						Create API Key
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px] p-10">
					<DialogHeader>
						<DialogTitle className="text-3xl">Add API Key</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="">
							<Label htmlFor="name" className="text-right font-bold">
								Name
							</Label>
							<Input
								id="name"
								className="col-span-3 mt-2"
								placeholder="Your API Key name"
							/>
						</div>
						<div className="">
							<Label htmlFor="name" className="text-right font-bold">
								Permission
							</Label>
							<Input
								id="name"
								className="col-span-3 mt-2"
								placeholder="Full access"
							/>
						</div>
						<div className="">
							<Label htmlFor="name" className="text-right font-bold">
								Domain
							</Label>
							<Input
								id="name"
								className="col-span-3 mt-2"
								placeholder="All domains"
							/>
						</div>
						<div></div>
					</div>
					<DialogFooter>
						<Button className="bg-red-500 px-5" type="submit">
							Add
						</Button>
						<Button className="px-5" type="submit">
							Cancel
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
				<div className="border shadow-sm rounded-lg p-5">
					<Table>
						<TableHeader>
							<div className="text-xl font-bold mb-2">API Key Requests</div>
							<TableRow>
								<TableHead className="text-black font-bold">Name</TableHead>
								<TableHead className="min-w-[150px] text-black font-bold">
									Token
								</TableHead>
								<TableHead className="hidden md:table-cell text-black font-bold">
									Permission
								</TableHead>
								<TableHead className="hidden md:table-cell text-black font-bold">
									Last Used
								</TableHead>
								<TableHead className="text-right text-black font-bold">
									Created
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="">Onboarding</TableCell>
								<TableCell>Re-Dvaauagc</TableCell>
								<TableCell className="hidden md:table-cell">
									Sending Access
								</TableCell>
								<TableCell className="hidden md:table-cell">
									1 Day Ago
								</TableCell>
								<TableCell className="text-right">9 Dec 2022</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="">Onboarding</TableCell>
								<TableCell>Re-Dvaauagc</TableCell>
								<TableCell className="hidden md:table-cell">
									Sending Access
								</TableCell>
								<TableCell className="hidden md:table-cell">
									1 Day Ago
								</TableCell>
								<TableCell className="text-right">9 Dec 2022</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="">Onboarding</TableCell>
								<TableCell>Re-Dvaauagc</TableCell>
								<TableCell className="hidden md:table-cell">
									Sending Access
								</TableCell>
								<TableCell className="hidden md:table-cell">
									1 Day Ago
								</TableCell>
								<TableCell className="text-right">9 Dec 2022</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="">Onboarding</TableCell>
								<TableCell>Re-Dvaauagc</TableCell>
								<TableCell className="hidden md:table-cell">
									Sending Access
								</TableCell>
								<TableCell className="hidden md:table-cell">
									1 Day Ago
								</TableCell>
								<TableCell className="text-right">9 Dec 2022</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="">Onboarding</TableCell>
								<TableCell>Re-Dvaauagc</TableCell>
								<TableCell className="hidden md:table-cell">
									Sending Access
								</TableCell>
								<TableCell className="hidden md:table-cell">
									1 Day Ago
								</TableCell>
								<TableCell className="text-right">9 Dec 2022</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</main>
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" isActive>
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}