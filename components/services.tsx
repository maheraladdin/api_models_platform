import Image from "next/image";
import Link from "next/link";

export function Services({ src, name }: { src: string; name: string }) {
	return (
		// TODO: change [id] with real id
		<Link href={"/dashboard/service/123"}>
			<div className="bg-white shadow-xl rounded-md">
				<Image
					className="rounded-md p-2"
					src={src}
					width={500}
					height={500}
					alt={name}
				/>
				<div className="p-4 pt-3  text-center text-xl font-semibold">{name}</div>
			</div>
			
		</Link>
	);
}
