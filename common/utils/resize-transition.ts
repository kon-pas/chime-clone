const resizeTransition = (...properties: string[]): string =>
  `transition: ${properties.map((property, idx, properties) =>
    `${property} 0.5s ease-out${idx === properties.length - 1 ? ";" : ","}`
  )}`;

export default resizeTransition;
