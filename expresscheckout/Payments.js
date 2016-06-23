/**
 * Created by root on 23/6/16.
 */
util = require('./util.js');
module.exports = {
    create_card_payment :function(parameters,callback){
        method = 'POST';
        url = '/txns';
        required_args = ['order_id', 'merchant_id', 'payment_method_type', 'card_token', 'card_number', 'name_on_card',
                        'card_exp_year', 'card_exp_month', 'card_security_code', 'save_to_locker',
                        'redirect_after_payment', 'format'];
        all_args = ['order_id', 'merchant_id', 'payment_method_type', 'payment_method', 'card_token',
                    'name_on_card', 'card_number', 'card_exp_year', 'card_exp_month', 'card_security_code',
                    'save_to_locker', 'redirect_after_payment', 'format'];
        for( var param in required_args )
            if(parameters.hasOwnProperty(required_args[param]) == false)
                console.error(required_args[param] + " is a required argument");

        for( var key in parameters )
            if(parameters.hasOwnProperty(key)) {
                if(all_args.indexOf(key)<=-1){
                    console.warn(key + ' is an invalid argument');
                }
            }

        util.request(method,url,parameters,function(response,error){callback(response,error)});
    },
    create_net_banking_payment : function(parameters,callback){
        method = 'POST';
        url = '/txns';
        required_args = ['order_id', 'merchant_id', 'payment_method_type', 'payment_method', 'redirect_after_payment',
            'format'];
        all_args = ['order_id', 'merchant_id', 'payment_method_type', 'payment_method', 'redirect_after_payment',
            'format'];
        for( var param in required_args )
            if(parameters.hasOwnProperty(required_args[param]) == false)
                console.error(required_args[param] + " is a required argument");

        for( var key in parameters )
            if(parameters.hasOwnProperty(key)) {
                if(all_args.indexOf(key)<=-1){
                    console.warn(key + ' is an invalid argument');
                }
            }

        util.request(method,url,parameters,function(response){callback(response)});

    }
};