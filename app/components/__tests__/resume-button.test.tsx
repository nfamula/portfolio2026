import { describe, expect, it, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ResumeDownloadButton from "../navigation/resume-button";

describe("ResumeDownloadButton", () => {
  it("renders a download link to the resume PDF", () => {
    render(<ResumeDownloadButton />);

    const link = screen.getByRole("link", { name: "Download resume PDF" });
    expect(link.getAttribute("href")).toBe(
      "/downloads/NatalieFamula_Resume.pdf",
    );
    expect(link.getAttribute("download")).toBe("NatalieFamula_Resume.pdf");
  });

  it("pushes dataLayer event on click", async () => {
    const user = userEvent.setup();
    const push = jest.fn();
    Object.defineProperty(window, "dataLayer", {
      configurable: true,
      value: { push },
    });

    render(<ResumeDownloadButton />);
    await user.click(screen.getByRole("link", { name: "Download resume PDF" }));

    expect(push).toHaveBeenCalledWith({
      event: "resume_download",
      file_name: "NatalieFamula_Resume.pdf",
    });
  });
});
