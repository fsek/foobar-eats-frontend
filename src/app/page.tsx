"use client";
import { zMenuItem } from "@/api/zod.gen";
import type { MenuItem } from "@/api";
import Komponent from "./menu_komponent";

export default function Page() {
	function onButtonClick() {
		alert("<3");
	}

	const testitem: MenuItem = {
		id: 1,
		name: "Hamburgare",
		description: "mums",
		price: BigInt(5),
	};

	return (
		<div className="space-y-4">
			<Komponent menuitem={testitem} />
			<button
				className="bg-amber-400 shadow-sm text-lg font-medium hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
				onClick={onButtonClick}
			>
				En fin knapp
			</button>

			<p>
				<a
					href="https://enclose.horse/"
					target="_blank" // open in a new browser tab
					className="underline text-blue-500 hover:text-blue-600"
					rel="noreferrer"
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
