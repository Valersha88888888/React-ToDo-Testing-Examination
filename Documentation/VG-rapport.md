# VG-rapport

I den här uppgiften har jag testat React Todo-appen på flera olika testnivåer. För enhetstesterna använde jag Vitest och fokuserade på små funktioner som validering, filtrering, summering, väderikoner och klädtips. Jag valde dessa funktioner eftersom de går att testa isolerat och eftersom de innehåller flera viktiga regler i appen. Jag testade både vanliga värden, gränsvärden och negativa fall, till exempel tom text, för kort titel och olika temperaturgränser.

Komponenttestet gjordes med React Testing Library på TodoForm. Där testade jag formuläret ur användarens perspektiv genom att skriva en uppgift, skicka formuläret och kontrollera att rätt funktion anropades och att inputfältet tömdes.

För integrationstestet använde jag MSW för att mocka Open-Meteo. Testet kontrollerar att getStockholmWeather returnerar temperature och weatherCode som numeriska värden. Jag valde mocking eftersom testet då inte blir beroende av det verkliga vädret eller av att det externa API:t alltid är tillgängligt.

Jag genomförde också manuella tester i webbläsaren. Jag kontrollerade att det går att lägga till, markera som slutförd och ta bort uppgifter. Jag kontrollerade även Console och Network och såg inga tydliga fel under testningen.

En risk som fortfarande finns är att alla möjliga användarflöden inte är testade. Exempelvis finns fler fel- och nätverksscenarier som skulle kunna testas mer detaljerat. Testerna ger ändå bra täckning av de viktigaste funktionerna i appen.

Jag använde AI som stöd för att få idéer till testfall och för att förstå vissa felmeddelanden. Alla tester kördes och kontrollerades av mig i terminalen med Vitest och ESLint, och jag verifierade även funktionerna manuellt i webbläsaren.
