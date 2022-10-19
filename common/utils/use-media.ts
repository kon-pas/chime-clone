import { BREAKPOINTS } from "@constants";

import { breakpoints } from "@enums";

type useMediaSignature = (size: keyof typeof breakpoints) => `@media (min-width: ${string}px)`

const useMedia: useMediaSignature = size => `@media (min-width: ${BREAKPOINTS[size.toUpperCase() ?? 0]}px)`;

export default useMedia;
