import type { MenuItem } from "@/api";
import { useState } from "react";

interface MenuItemButtonProps {
	addItem: (item: MenuItem) => void;
	item: MenuItem;
}

export default function MenuItemButton({ addItem, item }: MenuItemButtonProps) {
	return (
		<button
			type="button"
			onClick={() => addItem(item)}
			className="bg-amber-400 shadow-sm text-lg font-medium hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
		>
			<b>{item.name}</b> | {item.price} <br />
			<font size="2"> {item.description} </font>
		</button>
	);
}
