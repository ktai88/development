import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "src/pages/Main";

describe("Main", () => {
  it("should render without error", () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
    );
    expect(screen.getByText("Lorem ipsum dolor sit amet.")).toBeInTheDocument();
  });
});
