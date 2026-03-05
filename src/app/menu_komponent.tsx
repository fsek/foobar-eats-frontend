"use client";

import type { MenuItem } from "@/api";

export default function Komponent({ menuitem }: { menuitem: MenuItem }) {
	function onButtonClick() {
		alert("<3");
	}

	return (
		<div
			onClick={() => alert(`Du har beställt: ${menuitem.name}`)}
			className="border rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-105
			transition duration-300 cursor-pointer bg-pink-400 w-64"
		>
			<div>Name: {menuitem.name}</div>
			<div>Price: {menuitem.price} kr</div>
			<div>ID: {menuitem.id}</div>
			<div>Description: {menuitem.description}</div>
		</div>
	);
}
