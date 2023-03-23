import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    baseUrl: 'https://marmelab.com/react-admin-demo/#/',
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    "supportFile": "cypress/support/index.ts"
  },
});
