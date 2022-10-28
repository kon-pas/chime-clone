import { breakpoints } from "@enums";

interface Breakpoints {
  readonly [key: string]: number;
}

/**
 * Creates an object from enum with all keys being upper case.
 */
const BREAKPOINTS: Breakpoints = Object.entries(breakpoints).reduce(
  (prev, [key, value]) =>
    typeof value === "number" && { [key.toUpperCase()]: value, ...prev },
  {}
);

export default BREAKPOINTS;
