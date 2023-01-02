export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  coverageReporters: ["json-summary", "text", "lcov"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/styled.ts",
    "!src/**/main.tsx",
    "!src/**/App.tsx",
  ],
  collectCoverage: true,
  testEnvironment: "jsdom",
};
