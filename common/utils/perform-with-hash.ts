import { hash as performHash } from "bcrypt";

const { USER_PASSWORD_HASH_SALT } = process.env ?? "10";

const performWithHash = async (
  value: string,
  callback: (hash: string) => void
): Promise<void> => {
  performHash(value, USER_PASSWORD_HASH_SALT as string, (err, hash) => {
    if (err) {
      console.error(err);
      return false;
    } else return callback(hash);
  });
};

export default performWithHash;
