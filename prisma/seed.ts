import { PrismaClient } from '@prisma/client';
import * as fs from 'fs/promises';
import * as path from 'path';

const prisma = new PrismaClient();

async function seed() {
  try {
    const filePath = path.join(__dirname, 'exerciseInfo.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const exercises = JSON.parse(data);

    for (const exercise of exercises) {
      await prisma.exerciseInfo.create({
        data: exercise,
      });
    }
    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error executing seed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
