import { NavigationMode } from "./SRTypes";
import { SRCursor, SRCursorSkipFunc } from "./SRCursor";
export declare namespace SRNavigator {
    function getSkipFunc(mode: NavigationMode): SRCursorSkipFunc;
    function jumpCurrent(mode: NavigationMode, walker: SRCursor): SRCursor;
    function jumpCurrentEnd(mode: NavigationMode, walker: SRCursor): SRCursor;
    function jumpNext(mode: NavigationMode, walker: SRCursor): SRCursor;
    function jumpPrevious(mode: NavigationMode, walker: SRCursor): SRCursor;
}
