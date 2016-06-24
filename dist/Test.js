/**
 * Created by root on 23/6/16.
 */
Cards=require("./Cards"),Orders=require("./Orders"),Payments=require("./Payments"),config=require("./config"),test=require("unit.js"),config.api_key="4168A8A476B84DBCAF409C24F379BAC5"
var timestamp=Math.round((new Date).getTime()/1e3)
Payments.create_card_payment({order_id:1465893617,merchant_id:"juspay_recharge",payment_method_type:"CARD",card_token:"68d6b0c6-6e77-473f-a05c-b460ef983fd8",redirect_after_payment:!1,format:"json",card_number:"5243681100075285",name_on_card:"Customer",card_exp_year:"20",card_exp_month:"12",card_security_code:"123",save_to_locker:!1},function(e,r){console.log(e),test.value(r).is(null)}),Payments.create_net_banking_payment({order_id:1465893617,merchant_id:"juspay_recharge",payment_method_type:"NB",payment_method:"NB_ICICI",redirect_after_payment:!1,format:"json"},function(e,r){console.log(e),test.value(r).is(null)})
