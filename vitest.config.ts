import path from "path";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react(), stubNextAssetImport()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.tsx"],
    coverage: {
      provider: "v8",
      include: ["src/**/*"],
      exclude: ["**/*.stories.*", "**/stories"],
      extension: [".tsx"],
      reporter: ["text", "json-summary", "json", "html"],
    },
  },
});

function stubNextAssetImport() {
  return {
    name: "stub-next-asset-import",
    transform(_code: string, id: string) {
      if (/(jpg|jpeg|png|webp|gif|svg)$/.test(id)) {
        const imgSrc = path.relative(process.cwd(), id);
        return {
          code: `export default { src: '${imgSrc}', height: 1, width: 1 }`,
        };
      }
    },
  };
}
