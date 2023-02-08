import { prisma } from "@lib";
import { USERS } from "@database";

/**
 * Repopulate databse with fake data.
 */
const seedDatabase = async () => {
  await prisma.user.deleteMany({});

  await prisma.user.createMany({
    data: USERS,
  });
};

export default seedDatabase;
