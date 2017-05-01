curl --include --request GET https://ga-wdi-boston.herokuapp.com/games/${ID}
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "id": 1,
    "cells": ["o","x","o","x","o","x","o","x","o"],
    "over": true,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
    },
    "player_o": {
      "id": 3,
      "email": "dna@dna.com"
    }
  }
}'
