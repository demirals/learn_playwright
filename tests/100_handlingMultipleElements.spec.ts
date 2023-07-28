//video :  https://www.youtube.com/watch?v=Ov9e_F8I5zc
//min. 37


import { test, expect } from '@playwright/test';

test("Verify navLinks", async ({page}) =>{
    //const expectedLinks = ["hallo"]  >>    here we do not have to find and wriht all array elements. 
    //Instead, we will run the code intentionally false and take the elements from there (assertion)
    const expectedLinks = ["FIFA WOMEN'S WORLD CUP 2023™",
    "FIFA U-17 WORLD CUP 2023™",
    "FIFA CLUB WORLD CUP 2023™",
    "FIFA WORLD CUP 26™",
    "OTHER FIFA TOURNAMENTS",
    "RECENT TOURNAMENTS",
    "HOME",
    "FIFA WOMEN'S WORLD CUP 2023™",
    "RELIVE QATAR 2022™",
    "RELIVE U-20 WORLD CUP",
    "ORIGINALS",
    "ARCHIVE",
    "PLAY ZONE",
    "BRACKET CHALLENGE",
    "DAILY FANTASY",
    "MATCH PREDICTOR",
    "WHO AM I?",
    "TRIVIA",
    "PANINI COLLECTION",
    "ROBLOX FIFA WORLD",
    "MORE GAMES",
    "MATCH CENTRE",
    "LIVE STREAMING",
    "MEMBER ASSOCIATIONS",
    "HIGHLIGHTS",
    "FIFA STORE",
    "BUY TICKETS",
    "FIFA+ COLLECT",
    "NEWS",
    "OVERVIEW",
    "ABOUT FIFA",
    "WOMEN'S FOOTBALL",
    "SOCIAL IMPACT",
    "FOOTBALL DEVELOPMENT",
    "TECHNICAL",
    "LEGAL",
    "WORLD RANKING",]
    console.log(expectedLinks);
    
    await page.goto("https://www.fifa.com/fifaplus/en/home");
    const navLinks = page.locator("#mainLinksID a");

    await page.pause();
    //min. 53.   with ...pause() for DEBUG plwr inspector appears. And you can explore, find locaters with inspector
    //but be aware of dynamic locaters


    //await page.waitForTimeout(5000);  >> instead of we use teBeVisibla, it is enough to see first element
    expect(navLinks.first()).toBeVisible()
    expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);   //attention on where to use await (we go over the code and look for promise)


})