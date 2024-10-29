import { render, screen } from "@testing-library/react";

import { TestClientProvider } from "@/providers/TestProvider";

import Home from "./page";

describe("page.spec", () => {
  it("should work", () => {
    render(<Home />, { wrapper: TestClientProvider });
    expect(screen.getByText(/Home/)).toBeDefined();
  });
});
