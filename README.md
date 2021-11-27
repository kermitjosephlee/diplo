# Diplo JS

## a Diplomacy Clone

Based on the classic board game [Diplomacy](<"https://en.wikipedia.org/wiki/Diplomacy_(game)">)

![Image of SVG Dip Map](https://github.com/kermitjosephlee/diplo/blob/master/currentMap.svg)

I got hooked on this game back in my university days. I'm not sure if it made me any friends but it definitely tested the ones I had and I'm all the better for it.

The SVG map was borrowed from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Diplomacy.svg) with so much gratitude. It kept me from having to figure out how to graphically represent the board after each move. So thank you very much Martin Asal & Wiki Commons.

Still a WIP.

Ultimately, this will be a node server on some sort of db (probably Postgres) to keep track of the orders and adjudicate the movements. Might have a snazzy React front-end for issuing orders, showing current and previous map states, and most likely a websockets chat feature.

Thought of using this as a way to plug into Slack and/or Discord to have daily order issuings and current chats.

TODO: as of Nov 2021

#### Maintenance

- [ ] fill out testing suite files to maximize reasonable coverage **IN PROGRESS**
- [ ] write test code outlined in [DATC](http://web.inter.nl.net/users/L.B.Kruijswijk/) and better illustrated in [WebDiplomacy](https://webdiplomacy.net/datc.php)
- [ ] comment code to get up-to-speed faster between long pauses

#### Core Features

- [ ] Persistent data storage, currently a Postgres JSONB, could be a redis cache-as-db, could be something else
- [ ] chat bot for receiving and returning submitted order receipts, also for showing current map (svg)
- [ ] authentication of some sort (passport js?)

#### Extended Features

- computer player (to fill in for games with less than the full 7 players):
  - [ ] BASIC
    - outlines basic strategy using min-max and A\* pathfinding
  - [ ] ADVANCED
    - ability to NLP chat with other players to derive intent
    - derive strategy based upon player interactions
    - create appropriate chat responses

#### Aspirational Features

- GraphQL / Webhooks service to persistent Front-end interactions
- FE built in something other than React (writing React code is my FT job, would like to try something else)
- Re-write whole BE in elixir and have FE in liveview?

---

### First Start Up procedure

- if not cloned, download repo using `$ git clone GIT_HUB_REPO_LINK`
- install packages, yarn is preferred `$ yarn install`
- run initial folders script `$ node folderInitializer`
- run game initializer script `$ node turns/gameInitializer`
