import { BREAKPOINTS } from "@constants";

import { breakpoints } from "@enums";

type getMediaSignature = (size: keyof typeof breakpoints) => `@media (min-width: ${string}px)`

/**
 * Shorthand for css media queries
 * 
 * @param size - string representing screen size
 * @see @enums/breakpoints
 * 
 * @returns string being a css media query
 * 
 * @example
 * Sample usage in styled-components:
 * ```
 * ${getMedia('lg')} {
 *   margin: 0 auto;
 * }
 * ```
 */
const getMedia: getMediaSignature = size => `@media (min-width: ${BREAKPOINTS[size.toUpperCase() ?? 0]}px)`;

export default getMedia;
