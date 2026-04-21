import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import AnimatedCard from "../animated/Card";

describe("AnimatedCard", () => {
  it("renders the lottie animation container", () => {
    render(<AnimatedCard />);

    expect(screen.getByTestId("lottie-player")).toBeTruthy();
  });
});
