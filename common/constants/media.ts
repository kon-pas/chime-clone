// This approach might be an overkill, but for now I will stick to it.

import { BREAKPOINTS } from "@constants";

const MEDIA: { [key: string]: `@media (min-width: ${string}px)` } = Object.fromEntries(
  Object.entries(BREAKPOINTS).map(([breakpoint, pixels]) => [
    breakpoint,
    `@media (min-width: ${pixels}px)`,
  ])
);

export default MEDIA;
