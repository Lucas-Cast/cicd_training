import { createRequire } from "node:module"
const require = createRequire(import.meta.url)
const scanner = require("sonarqube-scanner")

scanner(
  {
    serverUrl: process.env.SONAR_HOST_URL || "http://localhost:9000",
    token: process.env.SONAR_TOKEN || "",
    options: {
      "sonar.projectKey": process.env.SONAR_PROJECT_KEY || "api-js",
      "sonar.projectName": "API JS",
      "sonar.sources": ".",
      "sonar.exclusions":
        "node_modules/**,coverage/**,tests/**,sonar-project.js",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => process.exit(),
)
