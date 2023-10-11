/** @type { import('@storybook/html').Preview } */

const customViewports = {
  smallUgly: {
    name: 'Small Ugly',
    styles: {
        width: '320px',
        height: '540px',
    }
  },
  mediumUgly: {
    name: 'Medium Ugly',
    styles: {
      width: '1024px',
      height: '1200px',
    }
  }
}

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    customViewports: {
        viewport: {
            viewports: customViewports,
          defaultViewport: 'smallUgly',
        }
    }
  },
};

export default preview;
