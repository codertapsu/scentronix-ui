/// <reference types="vite/client" />
/// <reference types="vitest" />

import path from 'path';
import { defineConfig, UserConfigExport } from 'vite';
import dts from 'vite-plugin-dts';

import react from '@vitejs/plugin-react';

import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vitejs.dev/config/
const userConfigExport: UserConfigExport = ({ mode }) => {
  const generateScopedName = mode === 'development' ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]';

  return defineConfig({
    plugins: [
      react(),
      libInjectCss(),
      dts({
        include: ['src'],
        exclude: ['src/stories', '**/*.stories.ts', '**/*.stories.tsx', 'src/test', '**/*.test.ts', '**/*.test.tsx'],
        insertTypesEntry: true,
        copyDtsFiles: true,
      }),
    ],
    css: {
      modules: {
        generateScopedName,
        localsConvention: 'camelCase',
      },
    },
    build: {
      copyPublicDir: false,
      lib: {
        entry: path.resolve(__dirname, 'src/scentronix-ui.ts'),
        formats: ['es', 'umd'],
        fileName: 'scentronix-ui',
        name: 'ScentronixUI',
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime', '@emotion/react', '@emotion/styled'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'React-dom',
            'react/jsx-runtime': 'react/jsx-runtime',
            'styled-components': 'styled-components',
          },
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      css: true,
      coverage: {
        include: ['src/components'],
        exclude: ['**/*.stories.tsx', '**/*.stories.ts'],
      },
    },
  });
};
export default userConfigExport;
