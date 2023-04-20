import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
 //testMatch: ["tests/frames.test.ts"],
 use: {
  headless:false,
  screenshot: "only-on-failure",
  video:"on",
  launchOptions:{
   slowMo: 1000
  }
 },
 retries: 0,
 reporter: [["dot"], ["json", {
  outputFile: "jsonReports/jsonReport.json"
 }], ["html", {
  open: "newer"
 }]]
}
export default config;












