"use client";
import {getMenuOptions} from "src/api/@tanstack/react-query.gen.ts";

export default function Page() {
	function onButtonClick() {
		alert("<3");
	}

	const menuItems = getMenuOptions();


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
				<li>En punkt i en punktlista</li>
				<li>Ännu en punkt i en punktlista</li>
				<li>Banana</li>
			</ul>

			<table>
				<caption className="caption-top">
					Meny
				</caption>
				<thead>
					<tr  className="border border-gray-300">
						<th> Id </th>
						<th> Maträtt </th>
						<th> Beskrivning </th>
						<th> Pris </th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border border-gray-300"> 1 </td>
						<td className="border border-gray-300"> Pasta </td>
						<td className="border border-gray-300"> Pasta, lättsaltad, med två tomater </td>
						<td className="border border-gray-300"> 35 kr </td>
					</tr>
				</tbody>
			</table>

		</div>
	);
}
