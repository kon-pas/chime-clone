import { Breakpoints } from "@enums";

interface BreakpointsSignature {
  readonly [key: string]: number;
}

/**
 * Creates an object from enum with all keys being upper case.
 */
const BREAKPOINTS: BreakpointsSignature = Object.entries(Breakpoints).reduce(
  (prev, [key, value]) =>
    typeof value === "number" && { [key.toUpperCase()]: value, ...prev },
  {}
);

export default BREAKPOINTS;
