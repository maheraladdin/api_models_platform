"use client";
import {
    TableRow,
    TableCell, TableHeader, TableHead, TableBody, Table,
} from "@/components/ui/table";
import {CreateKeyDialog} from "@/components/create-key";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Keys} from "@prisma/client";

export function KeysTable() {
    const getAllKeys = async () => {
        const res = await axios.get("/api/keys");
        return res.data.keys;
    }

    const {data, refetch} = useQuery<Keys[], Error>({
        queryKey: ["keys"],
        queryFn: getAllKeys
    })

    return (
        <>
            <CreateKeyDialog refetch={refetch} />
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <div className="border shadow-sm rounded-lg p-5">
                    <Table>
                        <TableHeader>
                            <div className="text-xl font-bold mb-2">API Key Requests</div>
                            <TableRow>
                                <TableHead className="text-black font-bold">Key_id</TableHead>
                                <TableHead className="min-w-[150px] text-black font-bold">
                                    Usage
                                </TableHead>
                                <TableHead className="hidden md:table-cell text-black font-bold">
                                    Limit
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data && data.map((key) => {
                                    return (
                                        <TableRow key={key.id}>
                                            <TableCell>{key.id}</TableCell>
                                            <TableCell>{key.usage}</TableCell>
                                            <TableCell className="hidden md:table-cell">{key.limit}</TableCell>
                                        </TableRow>
                                    )
                                })}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </>
    )
}
