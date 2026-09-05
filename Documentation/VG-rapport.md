# VG-rapport

I den här uppgiften har jag testat React Todo-appen på flera olika nivåer. I enhetstesterna använde jag Vitest för att testa mindre funktioner som validering, filtrering, summering, väderikoner och klädtips. Jag valde dessa delar eftersom de innehåller viktiga regler i appen och går att testa separat. Jag testade både vanliga fall, gränsvärden och negativa fall, till exempel tom text, för kort titel och olika temperaturer.

Komponenttestet gjordes med React Testing Library på TodoForm. Jag testade formuläret ungefär på samma sätt som en användare använder det: skrev en uppgift, skickade formuläret och kontrollerade att rätt funktion anropades och att fältet tömdes efteråt.

Integrationstestet gjordes med MSW och ett mockat svar från Open-Meteo. Testet kontrollerar att getStockholmWeather returnerar temperature och weatherCode som numeriska värden. Jag använde mocking för att testet inte skulle vara beroende av verkligt väder eller av att Open-Meteo alltid fungerar.

Jag gjorde också manuella tester i webbläsaren. Jag testade att skapa, slutföra och ta bort uppgifter. Jag kontrollerade även Console och Network och såg inga tydliga fel under testningen.

Det finns fortfarande saker som skulle kunna testas mer, till exempel fler fel- och nätverksscenarier. De tester jag har gjort täcker ändå de viktigaste funktionerna i appen.

Jag använde AI som stöd för idéer till testfall och för att förstå vissa felmeddelanden. Alla tester och resultat kontrollerades av mig i terminalen och även manuellt i webbläsaren.
