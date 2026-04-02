import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const sampleFoodItems = [
  {
    name: "Premium Puppy Formula",
    description: "Specially crafted nutrition for growing puppies with DHA for brain development",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400"
  },
  {
    name: "Adult Chicken & Rice",
    description: "Balanced meal with real chicken, brown rice, and essential vitamins",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400"
  },
  {
    name: "Senior Care Formula",
    description: "Joint support and easy digestion for senior dogs 7+ years",
    price: 44.99,
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400"
  }
];

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.foodItem.deleteMany();
  console.log('  Cleared existing food items');

  // Insert sample data
  for (const item of sampleFoodItems) {
    await prisma.foodItem.create({
      data: item
    });
    console.log(`  ✅ Created: ${item.name}`);
  }

  console.log('✨ Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
