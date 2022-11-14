import { Breakpoints } from "@enums";

/**
 * Creates an object from enum with all keys being upper case.
 */
const BREAKPOINTS: {
  readonly [key: string]: number;
} = Object.entries(Breakpoints).reduce(
  (prev, [key, value]) =>
    typeof value === "number" && { [key.toUpperCase()]: value, ...prev },
  {}
);

export default BREAKPOINTS;
