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
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
				{data?.map((menuitem) => (
					<div
						onClick={() => alert(`Du har beställt: ${menuitem.name}`)}
						className="border rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105
			transition duration-300 cursor-pointer bg-pink-400 w-64 min-h-32"
					>
						<div>Name: {menuitem.name}</div>
						<div>Price: {menuitem.price} kr</div>
						<div>ID: {menuitem.id}</div>
						<div>Description: {menuitem.description}</div>
					</div>
				))}
			</div>
		</div>
	);
}
