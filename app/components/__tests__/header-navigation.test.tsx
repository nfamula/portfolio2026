import { describe, expect, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeaderNavigation from "../navigation/header-navigation";

describe("HeaderNavigation", () => {
  it("renders primary navigation links including Articles", () => {
    render(<HeaderNavigation />);

    expect(
      screen
        .getByRole("link", { name: "View my projects" })
        .getAttribute("href"),
    ).toBe("/full-portfolio");
    expect(
      screen
        .getByRole("link", { name: "Read my articles" })
        .getAttribute("href"),
    ).toBe("/articles");
    expect(
      screen
        .getByRole("link", { name: "Learn more about me" })
        .getAttribute("href"),
    ).toBe("/about");
    expect(
      screen
        .getByRole("link", { name: "Get in touch with me" })
        .getAttribute("href"),
    ).toBe("/contact");
  });

  it("opens and closes mobile menu", async () => {
    const user = userEvent.setup();
    render(<HeaderNavigation />);

    expect(screen.queryAllByText("Resume")).toHaveLength(1);

    await user.click(screen.getByRole("button", { name: "open menu" }));
    expect(screen.getByRole("button", { name: "close menu" })).toBeTruthy();
    expect(screen.queryAllByText("Resume")).toHaveLength(2);

    await user.click(screen.getByRole("button", { name: "close menu" }));
    expect(screen.getByRole("button", { name: "open menu" })).toBeTruthy();
    expect(screen.queryAllByText("Resume")).toHaveLength(1);
  });

  it("tracks resume download click", async () => {
    const user = userEvent.setup();
    const push = jest.fn();
    Object.defineProperty(window, "dataLayer", {
      configurable: true,
      value: { push },
    });

    render(<HeaderNavigation />);
    await user.click(
      screen.getAllByRole("link", { name: "Download my resume" })[0],
    );

    expect(push).toHaveBeenCalledWith({
      event: "resume_download",
      file_name: "NatalieFamula_Resume.pdf",
    });
  });
});
