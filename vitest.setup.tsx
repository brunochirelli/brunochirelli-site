import "@testing-library/jest-dom/vitest";

// eslint-disable-next-line @typescript-eslint/no-require-imports
vi.mock("next/navigation", () => require("next-router-mock"));

vi.mock("next/image", () => ({
  default: () => <div />,
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
