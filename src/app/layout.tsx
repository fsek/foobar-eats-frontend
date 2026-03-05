"use client";
import "./globals.css";
import { client, getMenuOptions } from "@/api";
import {
	QueryClient,
	QueryClientProvider as ReactQueryClientProvider,
	useQuery,
} from "@tanstack/react-query";

export default function Layout({ children }: { children: React.ReactNode }) {
	const queryClient = new QueryClient();
	const {data}= useQuery(getMenuOptions());
	return (
		<html lang="sv">
			<body className="mx-auto max-w-6xl px-4 min-h-screen flex flex-col">
				<header className="my-16 flex flex-col">
					<span className="text-2xl md:text-4xl font-medium tracking-tight">
						FooBar Eats
					</span>
					<span className="text-md mt-1 italic text-neutral-400">
						Eating, Unleashed.®
					</span>
				</header>
				<ReactQueryClientProvider client={queryClient}>
					<main>{children}</main>
				</ReactQueryClientProvider>
				<footer className="mt-auto py-4">
					<p className="text-center text-sm text-neutral-400">
						&copy; {new Date().getFullYear()} FooBar Eats. All rights reserved.
					</p>
				</footer>
			</body>
		</html>
	);
}
