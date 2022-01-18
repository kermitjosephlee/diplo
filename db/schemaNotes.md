User can be many players - player has exactly one user
Game has many players - player has exactly one game
Player exactly one country - country has many players
Turns have many orders - order has exactly one turn
Games have many turns - turn has exactly one game
Player have many turns - turn has exactly one player
Each turn has exactly one map - each map represents exactly one turn
Game has many maps - a map belongs to exactly one game

user can have many chatServices - a chatService can have many users

A map has many locations - a location has exactly one map
a location borders many locations
a location can have many coasts - a coast has exactly one location
a coast has many borders - a border exactly one coast
