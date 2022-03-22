import { PrismaClient } from '@prisma/client';
const resources = require('./data/resources.json');

const prisma = new PrismaClient();

async function seed() {
  // delete old data
  await prisma.resource.deleteMany();
  console.log('clear categories data.');

  // reset id
  await prisma.$queryRaw`ALTER TABLE resource AUTO_INCREMENT = 1`;
  console.log("reset resource id to 1");

  const res = await prisma.resource.createMany({
    data: resources
  });

  console.log(`${res.count} resources created.`)
}

seed().catch(e => {
  throw e;
})
.finally(async () => {
  await prisma.$disconnect();
});