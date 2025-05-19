import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Login from "../components/Login";

describe("Login Component", () => {
  it("shows alert when fields are empty", () => {
    vi.spyOn(window, "alert").mockImplementation(() => {}); // Mock alert

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Please fill in both email and password."
    );
  });

  it("shows success alert for correct credentials", () => {
    vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByText(/submit/i));

    expect(window.alert).toHaveBeenCalledWith("Login successful!");
  });

  it("shows error alert for wrong credentials", () => {
    vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByTestId("email-input"), {
      target: { value: "wrong@example.com" },
    });

    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "wrongpass" },
    });

    fireEvent.click(screen.getByText(/submit/i));

    expect(window.alert).toHaveBeenCalledWith("Invalid email or password.");
  });
});
