import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const marketData = await prisma.priceitems.findMany()
    console.log(marketData)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })