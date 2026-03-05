"use client";

import { getMenuOptions, type MenuItem } from "@/api";
import {
	QueryClient,
	QueryClientProvider as ReactQueryClientProvider,
	useQuery,
} from "@tanstack/react-query";

export default function Komponent({ menuitem }: { menuitem: MenuItem }) {
	function onButtonClick() {
		alert("<3");
	}
	const queryClient = new QueryClient();
	const { data } = useQuery(getMenuOptions());
	return (
		<div>
			{data?.map((menuitem) => (
				<>
					<div
						onClick={() => alert(`Du har beställt: ${menuitem.name}`)}
						className="border rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-105
			transition duration-300 cursor-pointer bg-pink-400 w-64"
					></div>
					<div>Name: {menuitem.name}</div>
					<div>Price: {menuitem.price} kr</div>
					<div>ID: {menuitem.id}</div>
					<div>Description: {menuitem.description}</div>
				</>
			))}
		</div>
	);
}
