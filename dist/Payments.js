/**
 * Created by root on 23/6/16.
 */
util=require("./util.js"),module.exports={create_card_payment:function(r,e){method="POST",url="/txns",required_args=["order_id","merchant_id","payment_method_type","card_token","card_number","name_on_card","card_exp_year","card_exp_month","card_security_code","save_to_locker","redirect_after_payment","format"],all_args=["order_id","merchant_id","payment_method_type","payment_method","card_token","name_on_card","card_number","card_exp_year","card_exp_month","card_security_code","save_to_locker","redirect_after_payment","format"]
for(var a in required_args)0==r.hasOwnProperty(required_args[a])&&console.error(required_args[a]+" is a required argument")
for(var t in r)r.hasOwnProperty(t)&&all_args.indexOf(t)<=-1&&console.warn(t+" is an invalid argument")
util.request(method,url,r,function(r,a){e(r,a)})},create_net_banking_payment:function(r,e){method="POST",url="/txns",required_args=["order_id","merchant_id","payment_method_type","payment_method","redirect_after_payment","format"],all_args=["order_id","merchant_id","payment_method_type","payment_method","redirect_after_payment","format"]
for(var a in required_args)0==r.hasOwnProperty(required_args[a])&&console.error(required_args[a]+" is a required argument")
for(var t in r)r.hasOwnProperty(t)&&all_args.indexOf(t)<=-1&&console.warn(t+" is an invalid argument")
util.request(method,url,r,function(r,a){e(r,a)})}}
