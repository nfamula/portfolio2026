import { describe, expect, it } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import ProjectCard from "../project/Card";

const baseProps = {
  badgesImage: "/images/skill-badges/react.svg",
  content: "Project summary",
  more: "More detail",
  projectLink: "https://example.com",
  screenshotBase: "project-demo",
  title: "Project Demo",
};

describe("ProjectCard", () => {
  it("renders title, summary, and external project link", () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText("Project Demo")).toBeTruthy();
    expect(screen.getByText("Project summary")).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Visit Project" }).getAttribute("href"),
    ).toBe("https://example.com");
  });

  it("does not render Visit Project link when URL is blank", () => {
    render(<ProjectCard {...baseProps} projectLink="   " />);

    expect(screen.queryByRole("link", { name: "Visit Project" })).toBeNull();
  });

  it("opens lightbox when screenshot is clicked", () => {
    render(<ProjectCard {...baseProps} />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByAltText("Natalie Famula watermark")).toBeTruthy();
  });
});
