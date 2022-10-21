/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/*.ts', 'src/*.tsx'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/scripts/CSSStub.js',
    '^.+\\.svg$': '<rootDir>/scripts/svgTransform.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@docs/(.*)$': '<rootDir>/docs/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
  },
  setupFiles: ['./config/jest.setup.js'],
};
