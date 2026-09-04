import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { getStockholmWeather } from "../weatherApi.js";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

const server = setupServer(
  http.get(WEATHER_URL, () => {
    return HttpResponse.json({
      current: {
        temperature_2m: 12.5,
        weather_code: 61,
      },
    });
  }),
);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("getStockholmWeather integration", () => {
  test("ska returnera temperature och weatherCode som numeriska värden från mockat Open-Meteo API", async () => {
    // Arrange
    const expectedTemperature = 12.5;
    const expectedWeatherCode = 61;

    // Act
    const result = await getStockholmWeather();

    // Assert
    expect(result).toEqual({
      temperature: expectedTemperature,
      weatherCode: expectedWeatherCode,
    });

    expect(typeof result.temperature).toBe("number");
    expect(typeof result.weatherCode).toBe("number");
  });
});
