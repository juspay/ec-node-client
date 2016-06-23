/**
 * Created by root on 23/6/16.
 */
Cards = require('./src/Cards');
Orders =require('./src/Orders');
Payments = require('./src/Payments');
config = require('./src/config');

config = require('./config');
test = require('unit.js');

config.api_key = '4168A8A476B84DBCAF409C24F379BAC5';
var timestamp = Math.round((new Date()).getTime() / 1000);


//Test for Orders
orders.create({order_id:timestamp,amount: 700},function(response,error){console.log(response);test.value(error).is(null);
    orders.get_status({order_id:timestamp},function(response,error){console.log(response);test.value(error).is(null);});});
orders.list(function(response,error){console.log(response);test.value(error).is(null);});
orders.update({order_id:timestamp,amount: 800},function(response,error){console.log(response);test.value(error).is(null);});
orders.refund({unique_request_id:timestamp,order_id:1466696902,amount:10},function(response,error){console.log(response);test.value(error).is(null);});

//Test for Cards
cards.add({merchant_id:'shreyas', customer_id:"user1", customer_email:'abc@xyz.com',
    card_number:1111111111111111, card_exp_year:'20', card_exp_month:'12'},function(response,error){console.log(response);test.value(error).is(null);
    var token=response['card_token'];
    cards.delete({card_token:token},function(response,error){console.log(response);test.value(error).is(null);});
});
cards.list({customer_id:"user"},function(response,error){console.log(response);test.value(error).is(null);});

//Test for Payments
payments.create_card_payment({order_id:1465893617,
        merchant_id:'juspay_recharge',
        payment_method_type:'CARD',
        card_token:'68d6b0c6-6e77-473f-a05c-b460ef983fd8',
        redirect_after_payment:false,
        format:'json',
        card_number:'5243681100075285',
        name_on_card:'Customer',
        card_exp_year:'20',
        card_exp_month:'12',
        card_security_code:'123',
        save_to_locker:false},
        function(response,error){console.log(response);test.value(error).is(null);});
payments.create_net_banking_payment({order_id:1465893617,
        merchant_id:'juspay_recharge',
        payment_method_type:'NB',
        payment_method:'NB_ICICI',
        redirect_after_payment:false,
        format:'json'},
        function(response,error){console.log(response);test.value(error).is(null);});