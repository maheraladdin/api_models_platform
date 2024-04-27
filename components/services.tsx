import Image from "next/image";
import Link from "next/link";

export function Services({ src, name }: { src: string; name: string }) {
	return (
		// TODO: change [id] with real id
		<Link href={"/dashboard/service/123"}>
			<div className=" w-30  bg-white shadow center rounded-md">
				<Image
					className=" rounded-md p-2"
					src={src}
					width={200}
					height={100}
					alt={name}
				/>
				<h5 className="m-2  text-center">{name}</h5>
			</div>
			
		</Link>
	);
}
