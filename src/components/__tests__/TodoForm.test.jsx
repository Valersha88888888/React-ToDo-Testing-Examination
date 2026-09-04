import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "../TodoForm.jsx";

describe("TodoForm", () => {
  test("ska skapa en uppgift när användaren skriver giltig text och skickar formuläret", async () => {
    // Arrange
    const user = userEvent.setup();
    const onAddTask = vi.fn().mockResolvedValue(true);

    render(
      <TodoForm
        onAddTask={onAddTask}
        isSaving={false}
        buttonVariant="A"
      />,
    );

    const input = screen.getByLabelText("Ny uppgift");
    const button = screen.getByRole("button", { name: /lägg till/i });

    // Act
    await user.type(input, "Köp mjölk");
    await user.click(button);

    // Assert
    expect(onAddTask).toHaveBeenCalledTimes(1);
    expect(onAddTask).toHaveBeenCalledWith("Köp mjölk");
    expect(input).toHaveValue("");
  });
});
