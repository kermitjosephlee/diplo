// const { PrismaClient, LocationAbbreviation } = require("@prisma/client");
// const isEqual = require("lodash/isEqual")
const { gameMap } = require("./constants/gameMap")

// const prisma = new PrismaClient()

// async function firstPing() {
//   await prisma.$connect()
//   const allCountries = await prisma.country.findMany()
//   console.log("all countries", allCountries)
// }

// firstPing().catch(e => console.log(e)).finally(async () => {await prisma.$disconnect()})

console.log(gameMap.map(location => location.borderingTerritories.filter(each => each.length !== 3) ))

