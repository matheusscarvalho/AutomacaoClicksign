const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        testIsolation: false,
        baseUrl: 'https://www.saucedemo.com',
        env: {
            environment: 'qa',
            CYPRESS_SUPPRESS_WARNINGS: true,
            login: {
                validUsers: {
                    standard_user: {
                        username: 'standard_user',
                        password: 'secret_sauce'
                    },
                    problem_user: {
                        username: 'problem_user',
                        password: 'secret_sauce'
                    },
                    performance_glitch_user: {
                        username: 'performance_glitch_user',
                        password: 'secret_sauce'
                    },
                    error_user: {
                        username: 'error_user',
                        password: 'secret_sauce'
                    },
                    visual_user: {
                        username: 'visual_user',
                        password: 'secret_sauce'
                    }
                },
                invalidUsers: {
                    locked_out_user: {
                        username: 'locked_out_user',
                        password: 'secret_sauce'
                    }
                }
            }
        },
        integrationFolder: 'cypress/integration',
        reporterOptions: {
            suppressWarnings: true
        },
        specPattern: [
            'cypress/e2e/**/*.feature'
        ],
        supportFile: 'cypress/support/e2e.js',
        setupNodeEvents: async (on, config) => {
            const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
            const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
            const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
            await addCucumberPreprocessorPlugin(on, config);
            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );
            return config;
        },
    }
});
