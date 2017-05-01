#!bin/bash
curl https://ga-wdi-boston.herokuapp.com/games \
--include \
--request POST \
--header "Authorization: Token token=$TOKEN" \

echo
