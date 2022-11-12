const keysToLowercase = (obj: object): object =>
  Object.entries(obj).reduce(
    (prev, [key, value]) => ({ [key.toLowerCase()]: value, ...prev }),
    {}
  );

export default keysToLowercase;
