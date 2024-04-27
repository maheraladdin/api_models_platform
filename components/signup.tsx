import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";

const signupSchema = z.object({
	email: z.string().email({ message: "Invalid email" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters" }),
	firstname: z
		.string()
		.min(2, { message: "First name must be at least 2 characters" }),
	lastname: z
		.string()
		.min(2, { message: "Last name must be at least 2 characters" }),
	phone: z
		.string()
		.min(11, { message: "Phone number must be at least 11 characters" }),
	confirmPassword: z
		.string()
		.min(8, { message: "Password must be at least 8 characters" }),
});

export const Signup = ({
	setLogin,
}: {
	setLogin: (value: boolean) => void;
}) => {
	const [viewPassword, setViewPassword] = useState(false);
	const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
	const [agree, setAgree] = useState(false);
	const form = useForm({
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			password: "",
			confirmPassword: "",
		},
		resolver: zodResolver(signupSchema),
		mode: "onBlur",
	});
	const { register, handleSubmit } = form;

	const onSubmit = (formData: z.infer<typeof signupSchema>) => {
		const { firstname, lastname, email, phone, password, confirmPassword } =
			formData;
		console.log(firstname, lastname, email, phone, password, confirmPassword);
	};

	return (
		<DialogContent
			noCloseButton
			className={"min-w-[50vw] w-full bg-light pb-12"}
		>
			<DialogHeader
				className={"flex justify-center flex-col items-center px-16"}
			>
				<Image
					src={"/logo-removebg-preview.png"}
					width={200}
					height={100}
					alt={"logo"}
				/>
				<DialogTitle
					className={"w-full font-bold text-blue-dark text-4xl pb-5"}
				>
					Sign up
				</DialogTitle>
				<DialogDescription className={"w-full text-gray-600"}>
					Let’s get you all st up so you can access your personal account.
				</DialogDescription>
			</DialogHeader>
			<div className={"px-16 py-2 "}>
				<Form {...form}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className={"flex gap-3 w-full"}>
							<FormField
								{...register("firstname")}
								render={({ field }) => (
									<FormItem className={"mb-3 w-full"}>
										<FormLabel className={"text-black"}>First Name</FormLabel>
										<FormControl>
											<Input
												{...field}
												className={"bg-transparent text-blue-dark"}
												placeholder="john"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								{...register("lastname")}
								render={({ field }) => (
									<FormItem className={"mb-3 w-full"}>
										<FormLabel className={"text-black"}>Last Name</FormLabel>
										<FormControl>
											<Input
												{...field}
												className={"bg-transparent text-blue-dark"}
												placeholder="doe"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className={"flex gap-3 w-full"}>
							<FormField
								{...register("email")}
								render={({ field }) => (
									<FormItem className={"mb-3 w-full"}>
										<FormLabel className={"text-black"}>Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												className={"bg-transparent text-blue-dark"}
												type="email"
												placeholder="elshehawy@gmail.com"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								{...register("phone")}
								render={({ field }) => (
									<FormItem className={"mb-3 w-full"}>
										<FormLabel className={"text-black"}>Phone Number</FormLabel>
										<FormControl>
											<Input
												{...field}
												className={"bg-transparent text-blue-dark"}
												type="tel"
												placeholder="010*************"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							{...register("password")}
							render={({ field }) => (
								<FormItem className={"mb-3 w-full relative"}>
									<FormLabel className={"text-black"}>Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											className={"bg-transparent text-blue-dark"}
											type={viewPassword ? "text" : "password"}
											placeholder="**********"
										/>
									</FormControl>
									<FormMessage />
									<div
										className={"bg-white"}
										onClick={() => setViewPassword((prevState) => !prevState)}
									>
										{viewPassword ? (
											<Eye
												className={"absolute top-10 right-2 cursor-pointer"}
											/>
										) : (
											<EyeOff
												className={"absolute top-10 right-2 cursor-pointer"}
											/>
										)}
									</div>
								</FormItem>
							)}
						/>
						<FormField
							{...register("confirmPassword")}
							render={({ field }) => (
								<FormItem className={"mb-3 w-full relative"}>
									<FormLabel className={"text-black"}>
										Confirm Password
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											className={"bg-transparent text-blue-dark"}
											type={viewConfirmPassword ? "text" : "password"}
											placeholder="**********"
										/>
									</FormControl>
									<FormMessage />
									<div
										className={"bg-white"}
										onClick={() =>
											setViewConfirmPassword((prevState) => !prevState)
										}
									>
										{viewConfirmPassword ? (
											<Eye
												className={"absolute top-10 right-2 cursor-pointer"}
											/>
										) : (
											<EyeOff
												className={"absolute top-10 right-2 cursor-pointer"}
											/>
										)}
									</div>
								</FormItem>
							)}
						/>
						<div className={"flex items-center space-x-2 mb-12 mt-6"}>
							<Checkbox
								className={
									"border-black data-[state=checked]:bg-black data-[state=checked]:text-white"
								}
								id="rememberMe"
								checked={agree}
								onClick={() => setAgree((prev) => !prev)}
							/>
							<label
								htmlFor="rememberMe"
								className="cursor-pointer text-sm text-black select-none font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								I agree to all the
								<span className={"text-red-dark"}> Terms </span>
								and
								<span className={"text-red-dark"}> Privacy Policies </span>
							</label>
						</div>
						<Button
							type={"submit"}
							className={
								"bg-red-dark text-white w-full hover:bg-red-dark/90 hover:text-white"
							}
						>
							Create account
						</Button>
						<div className={"text-center text-sm text-black mt-4"}>
							Already have an account?{" "}
							<span
								onClick={() => setLogin(true)}
								className={
									"text-red-dark font-bold hover:underline select-none cursor-pointer"
								}
							>
								login
							</span>
						</div>
					</form>
				</Form>
			</div>
		</DialogContent>
	);
};
