import { describe, expect, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FooterNavigation from "../navigation/footer-navigation";

describe("FooterNavigation", () => {
  it("renders external links", () => {
    render(<FooterNavigation />);

    expect(
      screen
        .getByRole("link", { name: "nfamula@gmail.com" })
        .getAttribute("href"),
    ).toBe("mailto:nfamula@gmail.com");
    expect(
      screen.getByRole("link", { name: "LinkedIn" }).getAttribute("href"),
    ).toBe("https://www.linkedin.com/in/nataliefamula/");
    expect(
      screen.getByRole("link", { name: "GitHub" }).getAttribute("href"),
    ).toBe("https://github.com/nfamula");
  });

  it("tracks footer link click analytics", async () => {
    const user = userEvent.setup();
    const push = jest.fn();
    Object.defineProperty(window, "dataLayer", {
      configurable: true,
      value: { push },
    });

    render(<FooterNavigation />);
    await user.click(screen.getByRole("link", { name: "LinkedIn" }));

    expect(push).toHaveBeenCalledWith({
      event: "external_link_click",
      link_text: "linkedin",
      link_location: "footer",
    });
  });
});
