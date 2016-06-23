/**
 * Created by root on 23/6/16.
 */
var unirest=require("unirest"),config=require("./config")
module.exports={request:function(n,t,u,s){var i
"production"==config.environment?i="https://api.juspay.in":"staging"==config.environment&&(i="https://sandbox.juspay.in"),"GET"==n?unirest.get(i+t).auth(config.api_key,"").query(u).end(function(n){n.status>=200&&n.status<300&&"ERROR"!=n.body.status?s(n.body,null):s(null,n.body)}):unirest.post(i+t).auth(config.api_key,"").send(u).end(function(n){n.status>=200&&n.status<300&&"ERROR"!=n.body.status?s(n.body,null):s(null,n.body)})}}
