import { mergeConfig } from 'vite';
import path from 'path';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        postcss: null,
        preprocessorOptions: {
          scss: {
            additionalData: `
                        @import "${path.resolve(
                          __dirname,
                          '../assets/css/variables'
                        )}";
                    `,
          },
        },
      },
    });
  },
};
export default config;
