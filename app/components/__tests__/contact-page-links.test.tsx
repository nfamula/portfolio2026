import { describe, expect, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPageLinks from "../navigation/contact-page-links";

describe("ContactPageLinks", () => {
  it("renders the expected contact methods", () => {
    render(<ContactPageLinks />);

    expect(
      screen.getByRole("link", { name: "nfamula@gmail.com" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "linkedin.com/in/nataliefamula" }),
    ).toBeTruthy();
    expect(screen.getByRole("link", { name: "@nfamula" })).toBeTruthy();
  });

  it("pushes analytics data when email is clicked", async () => {
    const user = userEvent.setup();
    const push = jest.fn();
    Object.defineProperty(window, "dataLayer", {
      configurable: true,
      value: { push },
    });

    render(<ContactPageLinks />);
    await user.click(screen.getByRole("link", { name: "nfamula@gmail.com" }));

    expect(push).toHaveBeenCalledWith({
      event: "external_link_click",
      link_text: "email",
      link_location: "contact_page",
    });
  });
});
