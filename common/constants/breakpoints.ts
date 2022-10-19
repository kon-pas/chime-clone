import { breakpoints } from "@enums";

/**
 * Creates an object from enum with all keys being upper case.
 */
const BREAKPOINTS: {readonly [key: string]: number} = Object.entries(breakpoints).reduce(
  (prev, [key, value]) =>
    typeof value === "number" && { [key.toUpperCase()]: value, ...prev },
  {}
);

// const BREAKPOINTS: {
//   [key: string]: number;
// } = {
//   MD: 860,
//   LG: 1100,
// };

export default BREAKPOINTS;
