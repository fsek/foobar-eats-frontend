# <em>FooBar Eats Frontend</em>

## Specifikation
Hej nya spindel! Det är dags att bygga en hemsida för Foobar Eats™. Hemsidan är under utvecklingen kopplad till den provosoriska backenden https://foobar-eats.fly.dev, och de som går in på er klient bör kunna:

- Se restaurangens meny
- Lägga till en ny order
- Se orderstatus för någon order med ett givet id

Det finns två ställen där ni kan läsa exakt vad backenden kan göra så att ni vet hur ni måste interagera med den. På https://foobar-eats.fly.dev/docs finns en detaljerad specifikation av alla så kallade routes (funktioner som ni kan kommunicera med) på den provosoriska backenden, samt alla schemas som säger hur datan som ni skickar in till backenden och som backenden skickar tillbaka måste se ut. Denna sida kan vara lättare att förstå (och går att testa själv) än det nästkommande alternativet. Att bara kolla på den sidan ger er däremot inte de exakta funktionsnamnen som er sida av API:n (länken mellan backend och frontend) använder. Efter ni har kört `bun run generate-api` enligt installationsguiden nedan kommer en fil skapas i `src/api/@tanstack/react-query.gen.ts`. I denna ligger de funktioner ni måste importera och använda (exempelvis `export const getMenuOptions`). För exempel på hur detta görs kan ni kolla på [koden till riktiga frontend genom github](https://github.com/fsek/WWW-Web), kolla till exempel `src/app/(public)/songs/page.tsx`.

Ni kan i filen ovan se att vi använder [tanstack query](https://tanstack.com/query/latest/docs/framework/react/overview) för att kommunicera med backenden. Detaljer är överkurs och förklaras bäst på tanstacks hemsida, men det gör att vi inte behöver hålla koll på vad som händer med individuella requests som vi skickar till backenden och därmed kan abstrahera bort mycket av det jobbiga. 

## Installation

You can either run the project locally or via Github codespaces. Since Github has way better servers than most of us and running our projects can be quite demanding for most computers, we recommend using codespaces. In either case, the actual experience when coding will be similar.

### Using Codespaces

1. Go to the main Github page and click the green "Code" button
2. Go to the codespaces tab and create a new codespace
3. Everything should set itself up automatically, wait until it says "your application running is available at...".
4. If you want to get back to the codespace after closing it, go to the repository and once again click the green CODE button. It should show up in a list. You can also choose to open the codespace using vscode if you don't like the URL bar at the top, by clicking the three dots next to the codespace.
5. Open a new Bash terminal (`Ctrl + Shift + Ö`) and run: `bun install`, `bun run generate-api` and then `bun run dev`.
6. Go to http://localhost:3000 if you used VSCode and simply click the link in the terminal if you used the browser version of codespaces.

### Running Locally

0. Using Windows? First set up WSL 2.
    - Press Windows `⊞` -> "Turn Windows features on or off". Enable "Windows Subsystem for Linux".
    - Open Powershell as admin.
    - `wsl --install`
    - `wsl --set-default-version 2`
    - `wsl --install -d Ubuntu-22.04`
    - `wsl --set-default Ubuntu-22.04`
    -  For more info: [Microsoft documentation](https://learn.microsoft.com/en-us/windows/wsl/install)

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and run it.

    - Windows users: Make sure you select Use WSL 2 instead of Hyper-V if the option is presented.

2. Open a new VSCode window and install Dev Containers extension from the Extensions menu.

3. Open the Command Palette (`Ctrl + Shift + P` / `Cmd + Shift + P`) and select `Dev Containers: Clone Repository in Container Volume...`. Select `GitHub`, then enter `fsek/WWW-Web.git`.

4. After configuration has finished in the open terminal, it should say `Done. Press any key to close the terminal`.

5. Open a new Bash terminal (`Ctrl + Shift + Ö`) and run: `bun install`, `bun run generate-api` and then `bun run dev`. 

6. Go to http://127.0.0.1:3000/ (or http://localhost:3000) for the website where you can see the project🎉🥳🇱 🇬 🇹 🇲

7. From now on, whenever you want to open this project: Open a new VSCode window and in Recent, find `WWW-Web in a unique volume [Dev Container]`. Don't re-run `Clone Repository...` from step 3.

## Troubleshooting
- `Ctrl + Shift + P` and type `Rebuild Container`.
- Check if you alredy have an open port in the port window in VSCode. Delete it, press `Ctrl + Shift + P` and type `Rebuild Container`.

## Working on WWW-Web
- To install new components:
    - Go to https://ui.shadcn.com/
    - Follow the instructions there


## Tips and tricks
- Use https://www.creative-tim.com/twcomponents/cheatsheet to find different Tailwind css classes
