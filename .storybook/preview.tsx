import React from "react";
import type { Preview } from "@storybook/react";
import { AllProviders } from "../src/providers";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <AllProviders>
        <Story />
      </AllProviders>
    ),
  ],
};

export default preview;
