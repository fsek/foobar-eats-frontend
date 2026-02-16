"use client";
import { getMenuOptions } from "src/api/@tanstack/react-query.gen.ts";
import { postOrdersMutation } from "src/api/@tanstack/react-query.gen.ts";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import MenuItemButton from "./MenuItemButton";
import { useState } from "react";
import OrderButton from "./OrderButton";
import InputLine from "./InputLine";

export default function Page() {
	const { data } = useQuery(getMenuOptions());

	const [order, setOrder] = useState<number[]>([]);

	const [adress, setAdress] = useState<string>("");
	const [note, setNote] = useState<string>("");

	console.log(adress);

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

			<OrderButton itemsOrdered={order} />
		</div>
	);
}
