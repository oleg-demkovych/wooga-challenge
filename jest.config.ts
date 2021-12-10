import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: false,
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>/node_modules', 'src', './'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  preset: 'ts-jest',
  // setupFiles: ['<rootDir>/test/__setup__/setupFiles.ts'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testMatch: null,
  testRegex: '/Tests/.*?\\.(test|spec)\\.(ts?|tsx?)?$',
  testEnvironment: 'jsdom',

  // roots: ['<rootDir>/packages'],

  moduleNameMapper: {
    '^Components$': '<rootDir>/src/Components$1',
    '^Utils(.*)$': '<rootDir>/src/Utils$1',
    '^Models(.*)$': '<rootDir>/src/Models$1',
    '^Tests(.*)$': '<rootDir>/src/Tests$1',
    '^Hooks(.*)$': '<rootDir>/src/Hooks$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
export default config;
