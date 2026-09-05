# React Todo-app - Testprojekt

Detta projekt är en individuell examinationsuppgift i mjukvarutestning. Den ursprungliga React Todo-appen har behållits och kompletterats med automatiserade tester och dokumentation.

## Funktioner

Appen kan:

- hämta och visa sparade uppgifter från JSON Server
- skapa nya uppgifter
- markera uppgifter som aktiva eller slutförda
- ta bort uppgifter
- filtrera mellan Alla, Aktiva och Slutförda
- visa antal uppgifter
- visa loading-, error- och empty-lägen
- hämta väder för Stockholm
- visa temperatur, väderikon och klädtips

## Installation

Projektet kräver Node.js 24 eller senare.

Installera alla paket:

```bash
npm install
```

## Starta appen

Starta JSON Server i den första terminalen:

```bash
npm run server
```

Starta React-appen i en andra terminal:

```bash
npm run dev
```

Öppna adressen som Vite visar i terminalen, vanligtvis:

```text
http://localhost:5173
```

Om porten redan används kan Vite välja en annan port, till exempel 5174.

## Tester

Kör alla automatiserade tester en gång:

```bash
npm run test:run
```

Starta Vitest i watch mode:

```bash
npm test
```

Projektet innehåller:

- enhetstester med Vitest
- ett komponenttest med React Testing Library
- ett integrationstest med MSW för Open-Meteo

Senaste testresultat:

```text
Test Files  4 passed
Tests       19 passed
```

## ESLint

Kör statisk kodkontroll:

```bash
npx eslint .
```

## Build

Kontrollera att projektet går att bygga:

```bash
npm run build
```

## Dokumentation

Dokumentationen finns i mappen `Documentation`:

- `Testplan.docx` - testplan
- `Manuella-testfall.docx` - genomförda manuella testfall
- `VG-rapport.md` - analys av testnivåer, testval, risker och AI-användning
- `Testplan.md` - textversion av testplanen

## Testresultat

Totalt finns 19 automatiserade tester och samtliga passerar.

De manuella testerna omfattar skapande, slutförande, filtrering och borttagning av uppgifter.

## A/B-variant

Kopiera `.env.example` och döp kopian till `.env`.

```env
VITE_BUTTON_VARIANT=A
```

- `A` visar **Lägg till**
- `B` visar **Skapa uppgift**

Starta om React-appen efter att `.env` har ändrats.
