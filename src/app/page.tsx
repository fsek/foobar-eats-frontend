"use client";

import { useQuery } from "@tanstack/react-query";
import { getMenuOptions } from "@/api/@tanstack/react-query.gen";

export default function Page() {
	const { data, isPending, refetch } = useQuery({
		...getMenuOptions(),
		refetchInterval: 5000,
	});

	function onButtonClick() {
		refetch();
		console.log(data);
	}

	return (
		<div className="space-y-4">
			<button
				type="button"
				className="bg-amber-400 shadow-sm text-lg font-medium hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
				onClick={onButtonClick}
			>
				Hämta menyn igen!
			</button>

			<p>
				<a
					href="https://enclose.horse/"
					className="underline text-blue-500 hover:text-blue-600"
				>
					En mystisk länk
				</a>
			</p>

			<p style={{ fontSize: 50 }}>Vår meny!</p>
			<ul className="list-disc">
				{/* <li>En punkt i en punktlista</li>
				<li>Ännu en punkt i en punktlista</li> */}
				{(data ?? []).map((item) => (
					<div key={item.id}>
						<li>
							<b>
								{item.name} ({item.price}:-)
							</b>
						</li>
						<p>{item.description}</p>
					</div>
				))}
			</ul>
		</div>
	);
}
