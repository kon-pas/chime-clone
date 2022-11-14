import { hash, genSalt } from "bcrypt";

const { HASH_BASE_SALT } = process.env;

/**
 * @deprecated Does not work client-side. Use `bcrypt` directly.
 * 
 * Returns hashed value.
 * Use only server-side.
 *
 * @param value - string to hash
 * @returns `Promise` resolving a hashed string
 */
const getHash = async (value: string): Promise<string> => {
  const salt = await genSalt(Number(HASH_BASE_SALT));
  return await hash(value, salt);
};

export default getHash;
