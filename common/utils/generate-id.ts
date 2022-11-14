import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 8);

export const generateId: (size?: number | undefined) => string = nanoid;

export default generateId;
