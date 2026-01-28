"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { client } from "@/api";

client.setConfig({ baseUrl: "https://foobar-eats.fly.dev" });
const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<QueryClientProvider client={queryClient}>
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

					<main>{children}</main>

					<footer className="mt-auto py-4">
						<p className="text-center text-sm text-neutral-400">
							&copy; {new Date().getFullYear()} FooBar Eats. All rights
							reserved.
						</p>
					</footer>
				</body>
			</html>
		</QueryClientProvider>
	);
}
