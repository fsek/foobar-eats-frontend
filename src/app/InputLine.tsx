import { useState } from "react";

interface InputLineProps {
	addText: (input: string) => void;
	text: string;
}

export default function InputLine({ addText, text }: InputLineProps) {
	return (
		<>
			<form>
				<label htmlFor={text}> {text}: </label>
				<input id={text} /> <br />
			</form>

			<button
				type="button"
				onClick={() => {
					const inputElement = document.getElementById(
						text,
					) as HTMLInputElement;
					const returnText = inputElement?.value;
					addText(returnText);
				}}
				className="bg-amber-400 shadow-sm text-lg font-small hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
			>
				OK
			</button>
		</>
	);
}
