import type { Preview } from "@storybook/react";
import '../src/tailwind.css'; 
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    },
    options: {
      storySort: {
        method: "alphabetical",
        oder: [
          "Introduction"
        ],
      }
    },

  },
};

export default preview;
