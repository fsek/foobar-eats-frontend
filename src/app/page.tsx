"use client";
import {
	getMenuOptions,
	getOrdersByIdOptions,
} from "src/api/@tanstack/react-query.gen.ts";
import { postOrdersMutation } from "src/api/@tanstack/react-query.gen.ts";
import { useMutation, useQuery } from "@tanstack/react-query";

import { z } from "zod";
import { useState } from "react";

import MenuItemButton from "./MenuItemButton";
import OrderButton from "./OrderButton";
import InputLine from "./InputLine";
import { IterationCcw } from "lucide-react";
import type { Order } from "@/api";

export default function Page() {
	const { data } = useQuery(getMenuOptions());

	const [order, setOrder] = useState<number[]>([]);
	const [adress, setAdress] = useState<string>("");
	const [note, setNote] = useState<string>("");

	const [orderResponse, setOrderResponse] = useState<Order | undefined>();

	const [requestedOrderId, setRequestedOrderId] = useState<number>(-1);

	const { data: data2, error } = useQuery({
		enabled: requestedOrderId !== -1,
		...getOrdersByIdOptions({ path: { id: requestedOrderId ?? -1 } }),
	});
	console.log(data2);

	const postOrder = useMutation({
		...postOrdersMutation(),
		onSuccess: (variables) => {
			setOrderResponse(variables);
		},
		onError: () => {
			alert("Orderplacering misslyckades");
		},
	});

	function onOrderClick() {
		postOrder.mutate({
			body: {
				items: order,
				address: adress,
				note: note,
			},
		});
		setOrder([]);
		setAdress("");
		setNote("");
		alert(
			`Tack för din beställning. Total: ${orderResponse?.total}. Order-id: ${orderResponse?.id}`,
		);
	}

	function seeOrderClick() {
		if (data2) {
			alert(`Orderstatus: ${data2.status}`);
		} else {
			alert("Ingen sådan order.");
		}
	}

	return (
		<div className="space-y-4">
			{data?.map((x) => (
				<p key={x.id}>
					<MenuItemButton
						addItem={(x) => setOrder([x.id, ...order])}
						item={x}
						key={x.id}
					/>
					<br />
				</p>
			))}

			<InputLine addText={(x) => setAdress(x)} text="Adress" />
			<InputLine addText={(x) => setAdress(x)} text="Note" />
			<br />

			<button
				type="button"
				onClick={onOrderClick}
				className="bg-amber-400 shadow-sm text-lg font-medium hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
			>
				Beställ
			</button>

			<InputLine addText={(x) => setRequestedOrderId(x)} text="Order id" />
			<button
				type="button"
				onClick={seeOrderClick}
				className="bg-amber-400 shadow-sm text-lg font-medium hover:bg-amber-500 active:bg-amber-600 border-amber-500 border-2 px-4 py-2 text-white rounded-md"
			>
				Se orderstatus
			</button>
		</div>
	);
}
