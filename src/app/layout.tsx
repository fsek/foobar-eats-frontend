import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
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

        <main>{children}</main>

        <footer className="mt-auto py-4">
          <p className="text-center text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} FooBar Eats. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
