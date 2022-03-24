import { PrismaClient } from '@prisma/client';
const resources = require('./data/resources.json');
const categories = require('./data/category.json');

const prisma = new PrismaClient();

async function seed() {
  await seedCategory();
  await seedResource();
}

async function seedResource() {
  // delete old data
  await prisma.resource.deleteMany();
  console.log('clear table: resource.');

  // reset id
  await prisma.$queryRaw`ALTER TABLE resource AUTO_INCREMENT = 1`;
  console.log("reset resource id to 1");

  const res = await prisma.resource.createMany({
    data: resources
  });

  console.log(`${res.count} resources created.`)
}

async function seedCategory() {
  // delete old data
  await prisma.category.deleteMany();
  console.log('clear table: category.');

  // reset id
  await prisma.$queryRaw`ALTER TABLE resource AUTO_INCREMENT = 1`;
  console.log("reset resource id to 1");

  const res = await prisma.category.createMany({
    data: categories
  });

  console.log(`${res.count} categories created.`)
}

seed().catch(e => {
  throw e;
})
.finally(async () => {
  await prisma.$disconnect();
});