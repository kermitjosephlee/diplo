const { PrismaClient, LocationAbbreviation } = require("@prisma/client");
const isEqual = require("lodash/isEqual")
const { gameMap } = require("./constants/gameMap")

const prisma = new PrismaClient()

async function firstPing() {
  // await prisma.$connect()
  console.log("LocationAbbreviation", isEqual(Object.values(LocationAbbreviation).sort().map(each => each.toString()), gameMap.map(each => each.shortName)))
  // console.log("game map length", gameMap.filter((each) => !Object.values(LocationAbbreviation).includes(each.shortName)))
}

firstPing()