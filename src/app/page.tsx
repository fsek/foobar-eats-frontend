"use client";
import { useQuery } from "@tanstack/react-query";
import {
	getMenuOptions,
	getMenuQueryKey,
} from "@/api/@tanstack/react-query.gen";

export default function Page() {
	function onButtonClick() {
		// alert("Jag fick bara 51 på horse-game. vad fick du?");

		const backend_url = "https://foobar-eats.fly.dev";
		/*
		const { data, error, isPending } = useQuery({
			queryKey: getMenuQueryKey(),
			queryFn: () => fetch(`${backend_url}/menu}`).then((r) => r.json()),
		});
    */
		const { data, isPending } = useQuery({
			...getMenuOptions(),
		});

		alert(data);
	}

	return (
		<div className="space-y-4">
			<button
				type="button"
				className="bg-amber-400 shadow-sm text-lg font-medium hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
				onClick={onButtonClick}
			>
				En fin knapp
			</button>

			<p>
				<a
					href="https://enclose.horse/"
					className="underline text-blue-500 hover:text-blue-600"
				>
					En mystisk länk
				</a>
			</p>

			<ul className="list-disc">
				<li>En punkt i en punktlista</li>
				<li>Ännu en punkt i en punktlista</li>
			</ul>
		</div>
	);
}
