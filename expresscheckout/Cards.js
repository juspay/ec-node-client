/**
 * Created by root on 23/6/16.
 */
util = require('./util.js');
module.exports = {
    add :function(parameters,callback){
        method = 'POST';
        url = '/card/add';
        required_args = ['merchant_id', 'customer_id', 'customer_email', 'card_number', 'card_exp_year', 'card_exp_month'];
        all_args = ['merchant_id', 'customer_id', 'customer_email', 'card_number', 'card_exp_year',
            'card_exp_month', 'name_on_card', 'nickname'];
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
    list : function(parameters,callback){
        method = 'GET';
        url = '/card/list';
        required_args = ['customer_id'];
        all_args = ['customer_id'];
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

    },
    delete : function(parameters,callback){
        method = 'POST';
        url = '/card/delete';
        required_args = ['card_token'];
        all_args = ['card_token'];
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