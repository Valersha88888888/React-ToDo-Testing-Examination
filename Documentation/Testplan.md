# Testplan - React Todo-app

## Syfte

Syftet med testningen är att kontrollera att Todo-appen fungerar enligt kraven och att viktiga funktioner ger rätt resultat. Testningen omfattar enhetstester, komponenttest, integrationstest och manuella tester.

## Omfattning

Följande delar testas:

- validering av nya uppgifter
- filtrering av aktiva och slutförda uppgifter
- summering av uppgifter
- väderikoner och klädtips
- TodoForm ur användarens perspektiv
- hämtning av väderdata med mockat Open-Meteo API
- grundläggande funktioner i appen genom manuella tester

## Testnivåer

### Enhetstest

Små funktioner i `taskUtils.js` och `weatherUtils.js` testas isolerat med Vitest. Testerna omfattar både normala värden, gränsvärden och negativa fall.

### Komponenttest

`TodoForm` testas med React Testing Library. Testet kontrollerar att en användare kan skriva en giltig uppgift och skicka formuläret.

### Integrationstest

`getStockholmWeather()` testas tillsammans med ett mockat svar från Open-Meteo. MSW används för att undvika beroende av verkligt och förändrat väder.

### Manuell testning

Appens funktioner kontrolleras även manuellt i webbläsaren med React-appen och JSON Server igång.

## Verktyg

- Vitest
- React Testing Library
- MSW
- ESLint
- JSON Server

## Godkänt resultat

Testningen är godkänd när de obligatoriska automatiserade testerna passerar och de manuella testfallen ger det förväntade resultatet.
