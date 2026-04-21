import "@testing-library/jest-dom";
import React from "react";
import { jest } from "@jest/globals";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) =>
    React.createElement("img", { alt: alt ?? "", ...props }),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
    React.createElement(
      "a",
      { href: typeof href === "string" ? href : "", ...props },
      children,
    ),
}));

jest.mock("lottie-react", () => ({
  __esModule: true,
  default: () => React.createElement("div", { "data-testid": "lottie-player" }),
}));
