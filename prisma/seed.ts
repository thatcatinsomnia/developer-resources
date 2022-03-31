import { PrismaClient } from '@prisma/client';
const resources = require('./data/resources.json');
const categories = require('./data/categories.json');
const tags = require('./data/tags.json');

const prisma = new PrismaClient();

async function seedTag() {
    // delete old data
    await prisma.tag.deleteMany();
    console.log('clear table: tag.');
  
    // reset id
    await prisma.$queryRaw`ALTER TABLE tag AUTO_INCREMENT = 1`;
    console.log("reset tag id to 1");
  
    const res = await prisma.tag.createMany({
      data: tags
    });
  
    console.log(`${res.count} resource tags created.`)
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

async function seed() {
  await seedCategory();
  await seedResource();
  await seedTag();
}

seed().catch(e => {
  throw e;
})
.finally(async () => {
  await prisma.$disconnect();
});