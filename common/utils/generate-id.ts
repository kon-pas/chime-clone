import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 8);

type generateIdSignature = (size?: number | undefined) => string;

export const generateId: generateIdSignature = nanoid;

export default generateId;
