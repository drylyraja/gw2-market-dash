import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getMarketData() {
    const marketData = await prisma.priceitems.findMany()
    return marketData
}

getMarketData()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })