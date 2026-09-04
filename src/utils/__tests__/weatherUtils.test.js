import { describe, test, expect } from "vitest";
import {
  getWeatherIcon,
  getClothingAdvice,
} from "../weatherUtils.js";

describe("weatherUtils", () => {
  test("getWeatherIcon ska returnera sol för weatherCode 0", () => {
    // Arrange
    const weatherCode = 0;

    // Act
    const result = getWeatherIcon(weatherCode);

    // Assert
    expect(result).toBe("\u2600\uFE0F");
  });

  test("getWeatherIcon ska returnera regnikon för weatherCode 61", () => {
    // Arrange
    const weatherCode = 61;

    // Act
    const result = getWeatherIcon(weatherCode);

    // Assert
    expect(result).toBe("\uD83C\uDF27\uFE0F");
  });

  test("getWeatherIcon ska returnera snöikon för weatherCode 71", () => {
    // Arrange
    const weatherCode = 71;

    // Act
    const result = getWeatherIcon(weatherCode);

    // Assert
    expect(result).toBe("\uD83C\uDF28\uFE0F");
  });

  test("getClothingAdvice ska rekommendera varma kläder under 5 grader", () => {
    // Arrange
    const temperature = 4;
    const weatherCode = 0;

    // Act
    const result = getClothingAdvice(temperature, weatherCode);

    // Assert
    expect(result).toContain("varm");
    expect(result).toContain("handskar");
  });

  test("getClothingAdvice ska använda nästa temperaturintervall vid exakt 5 grader", () => {
    // Arrange
    const temperature = 5;
    const weatherCode = 0;

    // Act
    const result = getClothingAdvice(temperature, weatherCode);

    // Assert
    expect(result).toContain("jacka");
    expect(result).not.toContain("handskar");
  });

  test("getClothingAdvice ska rekommendera tunn jacka vid exakt 15 grader", () => {
    // Arrange
    const temperature = 15;
    const weatherCode = 0;

    // Act
    const result = getClothingAdvice(temperature, weatherCode);

    // Assert
    expect(result).toContain("tunn jacka");
  });

  test("getClothingAdvice ska rekommendera lätta kläder från 20 grader", () => {
    // Arrange
    const temperature = 20;
    const weatherCode = 0;

    // Act
    const result = getClothingAdvice(temperature, weatherCode);

    // Assert
    expect(result).toContain("lätta kläder");
  });

  test("getClothingAdvice ska lägga till paraplyråd vid regn", () => {
    // Arrange
    const temperature = 18;
    const weatherCode = 61;

    // Act
    const result = getClothingAdvice(temperature, weatherCode);

    // Assert
    expect(result).toContain("paraply");
  });
});
