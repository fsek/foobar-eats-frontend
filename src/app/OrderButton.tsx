import { NotifyEvent } from "@tanstack/react-query";
import { useState } from "react";

interface OrderButtonProps {
	placeOrder: () => void;
	itemsOrdered: number[];
	adress: string;
	note: string;
}

export default function OrderButton({ itemsOrdered }: OrderButtonProps) {
	const [open, onOpenChange] = useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => onOpenChange(true)}
				className="bg-amber-400 shadow-sm text-lg font-medium hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
			>
				<b>Beställ</b>
			</button>
		</>
	);
}
