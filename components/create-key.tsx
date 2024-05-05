"use client";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {Keys} from "@prisma/client";
import {QueryObserverResult, RefetchOptions} from "@tanstack/react-query";

type CreateKeyDialogProps = {
    refetch: (options?: (RefetchOptions | undefined)) => Promise<QueryObserverResult<Keys[], Error>>
}

export const CreateKeyDialog = ({refetch}: CreateKeyDialogProps) => {
    const [limit, setLimit] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const handleKeyCreation = async () => {
        try {
            const key = await axios.post("/api/keys", {limit});
            toast.success(key.data.message);
            await refetch();
            setOpen(prev => !prev);
        } catch {
            toast.error("An error occurred while creating the key");
        }
    }

    return (
        <Dialog open={open} >
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(prev => !prev)} className="font-bold" variant="outline">
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
                            limit
                        </Label>
                        <Input
                            id="name"
                            className="col-span-3 mt-2"
                            placeholder="Your API Key limit"
                            type={"number"}
                            value={limit}
                            onChange={(e) => setLimit(parseInt(e.target.value))}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleKeyCreation} className="bg-red-500 px-5" type="submit">
                        Create
                    </Button>
                    <Button onClick={() => setOpen(prev => !prev)} className="px-5" type="submit">
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}