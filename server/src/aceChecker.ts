// import ace from '../../ace-engine/dist/ace-node.js';
import type { Report } from "./engine-types/v4/api/IReport";
// import { JSDOM } from 'jsdom';
// import { Checker } from '../../ace-engine/dist/ace-node.js';
import * as puppeteer from "puppeteer";

// Since ace is loaded from a script tag in the js runtime, we need to declare it here
declare var ace: any;

const acePath = './engine/ace.js';

export async function aceCheck(html: string, browser: puppeteer.Browser, guidelineIds?: string | string[]): Promise<Report> {
  const page = await browser.newPage();
  await page.setContent(html);
  await page.addScriptTag({
    path: require.resolve(acePath)
  })
  
  const report = await page.evaluate(async (guidelineIds) => {
    const checker = new ace.Checker();
    const result = await checker.check(document, guidelineIds);
    return result;
  }, guidelineIds);

  return report;
}

