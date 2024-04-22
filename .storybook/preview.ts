import type { Preview } from "@storybook/react";
import "../src/tailwind.css";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    options: {
      storySort: {
        method: '',
        oder: ["Documentation", ["Introduction", "Colour Palette"], "Components"],
        locales: "en-GB"
      },
    },
  },
};

export default preview;
