User has many players - player has exactly one user
Game has many players - player has exactly one game
Player exactly one country - country has many players
Turns have many orders - order has exactly one turn
Games have many turns - turn has exactly one game
Player have many turns - turn has exactly one player
Each turn has a map
Game has many maps - a map has exactly one map

A map has many locations - a location has exactly one map
a location borders many locations
a location can have many coasts - a coast has exactly one location
a coast borders many locations (less than the root location)
