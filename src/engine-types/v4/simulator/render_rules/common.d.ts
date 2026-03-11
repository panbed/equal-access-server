import { SRCursor } from "../SRCursor";
import { SRRendererRule } from "../SRRendererRule";
/**
 * Provide the name, surrounded by the quoteCharBefore and quoteCharAfter and followed by the padding if the name exists
 * @param cursor The cursor for which to fetch the name
 * @param padding String to add after, if the name exists
 * @param quoteCharBefore The string to use as the leading quote, if the name exists
 * @param quoteCharBefore The string to use as the trailing quote, if the name exists
 * @returns
 */
export declare function quoteNamePadAfter(cursor: SRCursor, padding?: string, quoteCharBefore?: string, quoteCharAfter?: string): string;
export declare function quoteNamePadBefore(cursor: SRCursor, padding?: string): string;
export declare function quoteName(cursor: SRCursor, quoteCharBefore?: string, quoteCharAfter?: string): string;
export declare const RULES: SRRendererRule[];
