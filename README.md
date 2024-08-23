# Connect 4 - Terminalbaserat

Detta är en terminalbaserad implementation av det klassiska spelet 4-i-rad (Connect 4) skriven i TypeScript. Spelet låter två spelare turas om att lägga sina symboler ("X" och "O") i ett rutnät och den första spelaren att få fyra i rad vinner.

## Innehållsförteckning

- [Förutsättningar](#förutsättningar)
- [Installation](#installation)
- [Användning](#användning)
- [Spelregler](#spelregler)
- [Funktioner](#funktioner)

## Förutsättningar

För att kunna köra detta projekt behöver du ha följande installerat på din dator:

- [Node.js](https://nodejs.org/) (rekommenderad version är LTS)
- npm (Node Package Manager, medföljer Node.js)
- [TypeScript](https://www.typescriptlang.org/) (installeras via npm)

## Installation

Följ dessa steg för att klona och installera projektet:

1. Klona repositoriet:

    ```bash
    git clone https://github.com/yourusername/connect-four.git
    ```

2. Gå till projektmappen:

    ```bash
    cd connect-four
    ```

3. Installera beroenden:

    ```bash
    npm install
    ```

4. Kompilera TypeScript-koden till JavaScript:

    ```bash
    tsc
    ```

## Användning

För att starta spelet, kör följande kommando:

```bash
node dist/index.js


## Spelregler
- Spelbrädet är ett rutnät med 6 rader och 7 kolumner.
- Två spelare turas om att placera sina symboler ("X" för spelare 1 och "O" för spelare 2) i en av kolumnerna.
- En spelare vinner om de lyckas få fyra av sina symboler i rad horisontellt, vertikalt eller diagonalt.
- Spelet avslutas med oavgjort om hela brädet är fyllt utan att någon spelare har vunnit.

## Funktioner
- Terminalbaserat gränssnitt.
- Hanterar oavgjort och felaktiga drag (t.ex. försök att placera en symbol i en full kolumn).
- Enkel att utöka och modifiera tack vare den objektorienterade designen.

