/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: "@storybook/html-webpack5",
        options: {},
    },
};
export default config;
