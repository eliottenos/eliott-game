curl --include --request DELETE http://localhost:4741/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"
ID=1 TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/sign-out.sh

# data output from curl doesn't have a trailing newline
echo
