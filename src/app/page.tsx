"use client";
import { getMenuOptions } from "src/api/@tanstack/react-query.gen.ts";
import { postOrdersMutation } from "src/api/@tanstack/react-query.gen.ts";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
	const { data } = useQuery(getMenuOptions());

	//för att lägga beställningar:
	const adressInput: HTMLInputElement = document.getElementById(
		"adress",
	) as HTMLInputElement;
	let adress: string;

	const noteInput: HTMLINputElement = document.getElementById(
		"note",
	) as HTMLInputElement;
	let note: string;

	function onButtonClick() {
		adress = adressInput.value;
		note = noteInput.value;
	}

	return (
		<div className="space-y-4">
			<ul className="list-disc">
				{data?.map((x) => (
					<li key={x.id}>
						{" "}
						<b>{x.name}</b> | {x.price} kr | Antal:
						<select id={String(x.id)}>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
						<ol> {x.description} </ol>{" "}
					</li>
				))}
			</ul>

			<p>
				Adress: <input type="text" id="adress" /> <br />
				Kommentar: <input type="text" id="note" />
			</p>

			{/* <form onSubmit={(e) => {   
  		e.preventDefault(); 
 			adress = e.target.value;
			}}>
			<label for="adress" >Adress:</label> <input type="text" id="adress" name="adress"/>
		</form> */}

			<button
				type="button"
				className="bg-amber-400 shadow-sm text-lg font-medium hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
				onClick={onButtonClick}
			>
				Beställ
			</button>
		</div>
	);
}
