//- default browser is chromium
//- we can assign browser in package.json file

import { devices, type PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {

    projects: [            //xbrowser
        {
            name: "chrome",
            use: {
                ...devices["Desktop Chrome"]   //you can choose  mobile simulators as well
            }
        }
 //       {
 //           name: "firefox",
 //           use: {
 //               ...devices["Desktop Firefox"]   //you can choose  mobile simulators as well
 //           }
 //       }
    ],

    // testMatch : zu führende tests hier schreiben, wenn wir commentieren testmatch, erscheint play buttons    
    testMatch: ["tests/1_login.test.ts"],
    use: {
        baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        launchOptions: {
            slowMo: 1000
        }
    },
    retries: 0,
    //reporting, video min 44.40 - 60.00  >> öffnen index.html datei mit browser in playwright-report 
    //Grün "dot" oder F,  erfolgreich oder nicht.  
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "newer"
    }]]
}
export default config;












