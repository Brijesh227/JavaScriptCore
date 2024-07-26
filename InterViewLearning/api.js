/*
/get-data
{
   data: [1,2,3,4,5…],
   nextToken: "token1",
   limit:100
}
/get-data?nextToken=token1
{
   data: [6,7,8,9,10…],
   nextToken: "token2",
   limit:100
}
/get-data?nextToken=token2
{
   data: [100,200,800,900,10000…],
   limit:100
}
Cron 
100 customer
Average numbers 100/customer
-> cron -> fetchdata -> store

*/