import { BREAKPOINTS } from "@constants";

import { Breakpoints } from "@enums";

type getMediaSignature = (
  size: keyof typeof Breakpoints
) => `@media (min-width: ${string}px)`;

/**
 * Shorthand for css media queries
 *
 * @param size - screen resolution breakpoint
 * @see @enums/breakpoints
 *
 * @returns css media query
 *
 * @example
 * Sample usage in styled-components:
 * ```
 * ${getMedia('lg')} {
 *   margin: 0 auto;
 * }
 * ```
 */
const getMedia: getMediaSignature = size =>
  `@media (min-width: ${BREAKPOINTS[size.toUpperCase() ?? 0]}px)`;

export default getMedia;
