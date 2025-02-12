// import ace from '../../ace-engine/dist/ace-node.js';
import type { Report } from "./engine-types/v4/api/IReport";
import { JSDOM } from 'jsdom';
import { Checker } from '../../ace-engine/dist/ace-node.js';

export async function aceCheck(html: string, guidelineIds?: string | string[]): Promise<Report> {
  const dom = new JSDOM(html);
  const g = global as any;

  g.window = dom.window;
  g.document = dom.window.document;
  g.getComputedStyle = dom.window.getComputedStyle;
  g.Node = dom.window.Node;
  g.Element = dom.window.Element;
  g.HTMLElement = dom.window.HTMLElement;
  g.HTMLInputElement = dom.window.HTMLInputElement;
  g.HTMLSelectElement = dom.window.HTMLSelectElement;
  g.HTMLTextAreaElement = dom.window.HTMLTextAreaElement;
  g.HTMLButtonElement = dom.window.HTMLButtonElement;
  const checker = new Checker();
  const report = await checker.check(document, guidelineIds);

  delete g.window;
  delete g.document;
  delete g.getComputedStyle;
  delete g.Node;
  delete g.Element;
  delete g.HTMLElement;
  delete g.HTMLInputElement;
  delete g.HTMLSelectElement;
  delete g.HTMLTextAreaElement;
  delete g.HTMLButtonElement;

  return report;
}

