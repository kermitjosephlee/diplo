const { gameMap } = require("../constants/gameMap");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

interface ICountry {
  [index:string]: number,
}

const countries: ICountry = {
  "England": 1,
  "Austria": 2,
  "France": 3,
  "Germany": 4,
  "Italy": 5,
  "Russia": 6,
  "Turkey": 7
}

interface ILocation {
  name: string, 
  shortName: string, 
  isMaritime: boolean, 
  isTerrestrial: boolean, 
  isLandLocked: boolean, 
  isSupplyCenter:boolean, 
  initialNation: string;
  occupyingNationId: number | null,
}

interface IReturnedLocation {
  name: string, 
  shortName: string, 
  isMaritime: boolean, 
  isTerrestrial: boolean, 
  isLandLocked: boolean, 
  isSupplyCenter:boolean, 
  initialNationId: number | null,
  occupyingNationId: number | null,
}

const locations = gameMap.map(({name, shortName, isMaritime, isTerrestrial, isLandLocked, isSupplyCenter, initialNation }: ILocation): IReturnedLocation => {
  return { name, shortName, isMaritime, isTerrestrial, isLandLocked, isSupplyCenter, initialNationId: countries[initialNation] || null, occupyingNationId: countries[initialNation] || null }
}).sort((a: ILocation, b: ILocation) => a.name.localeCompare(b.name))

async function locationSeeder() {
  await prisma.$queryRaw`TRUNCATE TABLE "Location" RESTART IDENTITY CASCADE;`
  const insertedLocations = await prisma.location.createMany({
    data: locations
  })
  console.log("inserted Location", insertedLocations[0])
}

// const borders = gameMap.map((location: ILocation) => {
//   const { shortName, borderingTerritories} = location
//   return borderingTerritories.map((bordering: string) => [shortName, bordering])
// }).flat()

// async function borderSeeder() {
//   const borderZ =  borders.map((borderPair: string[]) => {
//     const returnPromise = borderPair.map((border) => {
//       return prisma.location.findFirst({
//         where: {
//           shortName: border
//         }
//       })
//     })
//     return Promise.all(returnPromise)
//   })
//   console.log("borderZZ", borderZ)
// }

// console.log(gameMap.map((location) => location.borderingTerritories.filter(each => each.length !== 3) ))

// borderSeeder().catch(e => console.log(e)).finally(async() => await prisma.$disconnect()) 
locationSeeder().catch(e => console.log(e)).finally(async() => await prisma.$disconnect()) 