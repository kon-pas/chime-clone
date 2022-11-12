/**
 * Shorthand for css property intended for all screen resize transitions
 *
 * @param properties - properties to which apply transition
 *
 * @returns css transition property
 *
 * @example
 * Sample usage in styled-components:
 * ```
 * ${getResizeTransition('margin', 'padding)}
 * ```
 */
const getResizeTransition = (...properties: string[]): string =>
  `transition: ${properties.map(
    (property, idx, properties) =>
      `${property} 0.35s ease-out${idx === properties.length - 1 ? ";" : ","}`
  )}`;

export default getResizeTransition;
