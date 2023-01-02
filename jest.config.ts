export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  coverageReporters: ["json-summary", "text", "lcov"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  collectCoverage: true,
  testEnvironment: "jsdom",
};
