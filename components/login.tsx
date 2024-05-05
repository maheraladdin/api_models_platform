import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import Image from "next/image";
import {useState} from "react";
import {z} from "zod";
import {Eye, EyeOff} from "lucide-react";
import {useUser} from "@/hooks/useUser";
import axios from "axios";
import {useRouter} from "next/navigation";

const loginSchema = z.object({
    email: z.string().email({message: "Invalid email"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters"}),
});

export const Login = ({setLogin}: {
    setLogin: (value: boolean) => void
}) => {
    const router = useRouter();
    const setUser = useUser(state => state.setUser);
    const [viewPassword, setViewPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
    });
    const {register, handleSubmit} = form;

    const onSubmit = async (formData: z.infer<typeof loginSchema>) => {
        const {email, password} = formData;
        const res = await axios.post("/api/auth/login", {email, password});
        setUser(res.data.user);
        router.push("/dashboard");
    }

    return (
        <DialogContent noCloseButton className={"min-w-[50vw] w-full bg-light pb-12"}>
            <DialogHeader className={"flex justify-center flex-col items-center px-16"}>
                <Image
                    src={"/logo-removebg-preview.png"}
                    width={200}
                    height={100}
                    alt={"logo"}
                />
                <DialogTitle className={"w-full font-bold text-blue-dark text-4xl pb-5"}>Login</DialogTitle>
                <DialogDescription className={"w-full text-gray-600"}>
                    Login to access your travel wise account
                </DialogDescription>
            </DialogHeader>
            <div className={"px-16 py-2 "}>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormField
                            {...register("email")}
                            render={({field}) => (
                                <FormItem className={"mb-3"}>
                                    <FormLabel className={"text-black"}>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} className={"bg-transparent text-blue-dark"} type="email"
                                               placeholder="elshehawy@gmail.com"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            {...register("password")}
                            render={({field}) => (
                                <FormItem className={"mb-5 relative"}>
                                    <FormLabel className={"text-black"}>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} className={"bg-transparent text-blue-dark"}
                                               type={viewPassword ? "text" : "password"} placeholder="**********"/>
                                    </FormControl>
                                    <FormMessage/>
                                    <div className={"bg-white"} onClick={() => setViewPassword(prevState => !prevState)}>
                                        {viewPassword ? <Eye className={"absolute top-10 right-2 cursor-pointer"} /> : <EyeOff className={"absolute top-10 right-2 cursor-pointer"} />}
                                    </div>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-between items-center mb-10">
                            <div className={"flex items-center space-x-2"}>
                                <Checkbox
                                    className={"border-black data-[state=checked]:bg-black data-[state=checked]:text-white"}
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onClick={() => setRememberMe(prev => !prev)}
                                />
                                <label
                                    htmlFor="rememberMe"
                                    className="cursor-pointer text-sm text-black select-none font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember me
                                </label>
                            </div>
                            <div
                                className={"text-sm text-red-dark select-none font-medium leading-none hover:underline cursor-pointer"}>
                                Forgot password?
                            </div>
                        </div>
                        <Button type={"submit"} className={"bg-red-dark text-white w-full hover:bg-red-dark/90 hover:text-white"} >Login</Button>
                        <div className={"text-center text-sm text-black mt-4"}>
                            Don't have an account? <span onClick={() => setLogin(false)} className={"text-red-dark font-bold hover:underline select-none cursor-pointer"}>Sign up</span>
                        </div>
                    </form>
                </Form>
            </div>
        </DialogContent>
    )
}