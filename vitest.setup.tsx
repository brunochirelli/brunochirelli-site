import "@testing-library/jest-dom/vitest";

// eslint-disable-next-line @typescript-eslint/no-require-imports
vi.mock("next/navigation", () => require("next-router-mock"));

vi.mock("next/image", () => ({
  default: () => <div />,
}));
