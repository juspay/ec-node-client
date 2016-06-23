/**
 * Created by root on 23/6/16.
 */
util=require("./util.js"),module.exports={add:function(r,e){method="POST",url="/card/add",required_args=["merchant_id","customer_id","customer_email","card_number","card_exp_year","card_exp_month"],all_args=["merchant_id","customer_id","customer_email","card_number","card_exp_year","card_exp_month","name_on_card","nickname"]
for(var a in required_args)0==r.hasOwnProperty(required_args[a])&&console.error(required_args[a]+" is a required argument")
for(var n in r)r.hasOwnProperty(n)&&all_args.indexOf(n)<=-1&&console.warn(n+" is an invalid argument")
util.request(method,url,r,function(r,a){e(r,a)})},list:function(r,e){method="GET",url="/card/list",required_args=["customer_id"],all_args=["customer_id"]
for(var a in required_args)0==r.hasOwnProperty(required_args[a])&&console.error(required_args[a]+" is a required argument")
for(var n in r)r.hasOwnProperty(n)&&all_args.indexOf(n)<=-1&&console.warn(n+" is an invalid argument")
util.request(method,url,r,function(r,a){e(r,a)})},"delete":function(r,e){method="POST",url="/card/delete",required_args=["card_token"],all_args=["card_token"]
for(var a in required_args)0==r.hasOwnProperty(required_args[a])&&console.error(required_args[a]+" is a required argument")
for(var n in r)r.hasOwnProperty(n)&&all_args.indexOf(n)<=-1&&console.warn(n+" is an invalid argument")
util.request(method,url,r,function(r,a){e(r,a)})}}
