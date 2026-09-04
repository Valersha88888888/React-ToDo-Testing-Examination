import { describe, test, expect } from "vitest";
import {
  validateTitle,
  filterTasks,
  countActiveTasks,
  countCompletedTasks,
} from "../taskUtils.js";

describe("taskUtils", () => {
  test("validateTitle ska ge felmeddelande för tom text", () => {
    // Arrange
    const title = "";

    // Act
    const result = validateTitle(title);

    // Assert
    expect(result).toBeTruthy();
  });

  test("validateTitle ska ge felmeddelande för endast mellanslag", () => {
    // Arrange
    const title = "   ";

    // Act
    const result = validateTitle(title);

    // Assert
    expect(result).toBeTruthy();
  });

  test("validateTitle ska ge felmeddelande för en enda bokstav", () => {
    // Arrange
    const title = "A";

    // Act
    const result = validateTitle(title);

    // Assert
    expect(result).toBeTruthy();
  });

  test("validateTitle ska godkänna giltig text", () => {
    // Arrange
    const title = "Handla";

    // Act
    const result = validateTitle(title);

    // Assert
    expect(result).toBe("");
  });

  test("filterTasks ska returnera endast aktiva uppgifter", () => {
    // Arrange
    const tasks = [
      { id: 1, title: "Aktiv", completed: false },
      { id: 2, title: "Klar", completed: true },
    ];

    // Act
    const result = filterTasks(tasks, "active");

    // Assert
    expect(result).toEqual([
      { id: 1, title: "Aktiv", completed: false },
    ]);
  });

  test("filterTasks ska returnera endast slutförda uppgifter", () => {
    // Arrange
    const tasks = [
      { id: 1, title: "Aktiv", completed: false },
      { id: 2, title: "Klar", completed: true },
    ];

    // Act
    const result = filterTasks(tasks, "completed");

    // Assert
    expect(result).toEqual([
      { id: 2, title: "Klar", completed: true },
    ]);
  });

  test("filterTasks ska returnera alla uppgifter för filtret all", () => {
    // Arrange
    const tasks = [
      { id: 1, title: "Aktiv", completed: false },
      { id: 2, title: "Klar", completed: true },
    ];

    // Act
    const result = filterTasks(tasks, "all");

    // Assert
    expect(result).toEqual(tasks);
  });

  test("countActiveTasks ska räkna aktiva uppgifter", () => {
    // Arrange
    const tasks = [
      { completed: false },
      { completed: true },
      { completed: false },
    ];

    // Act
    const result = countActiveTasks(tasks);

    // Assert
    expect(result).toBe(2);
  });

  test("countCompletedTasks ska räkna slutförda uppgifter", () => {
    // Arrange
    const tasks = [
      { completed: false },
      { completed: true },
      { completed: true },
    ];

    // Act
    const result = countCompletedTasks(tasks);

    // Assert
    expect(result).toBe(2);
  });
});
