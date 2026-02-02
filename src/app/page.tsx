"use client";
import {getMenuOptions} from "src/api/@tanstack/react-query.gen.ts";
import {useQuery} from "@tanstack/react-query"

export default function Page() {
	function onButtonClick() {
		alert("<3");
	}

	const { data } = useQuery(getMenuOptions());
	console.log(data)


	return (
		<div className="space-y-4">
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
				{data?.map( x => (<li key={x.id}> <b>{x.name}</b> | {x.price} kr <ol> {x.description} </ol> </li>))}
			</ul>

			

		</div>
	);
}
