/**
 * Created by root on 23/6/16.
 */
util = require('./util.js');
module.exports = {
    create :function(parameters,callback){
        method = 'POST';
        url = '/order/create';
        required_args = ['order_id','amount'];
        all_args = ['order_id', 'amount', 'currency', 'customer_id', 'customer_email', 'customer_phone',
            'description', 'product_id', 'gateway_id', 'return_url', 'billing_address_first_name',
            'billing_address_last_name', 'billing_address_line1', 'billing_address_line2',
            'billing_address_line3', 'billing_address_city', 'billing_address_state',
            'billing_address_country', 'billing_address_postal_code', 'billing_address_phone',
            'billing_address_country_code_iso', 'shipping_address_first_name',
            'shipping_address_last_name', 'shipping_address_line1', 'shipping_address_line2',
            'shipping_address_line3', 'shipping_address_city', 'shipping_address_state',
            'shipping_address_country', 'shipping_address_postal_code', 'shipping_address_phone',
            'shipping_address_country_code_iso', 'udf1', 'udf2', 'udf3', 'udf4', 'udf5', 'udf6', 'udf7',
            'udf8', 'udf9', 'udf10'];
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
    get_status : function(parameters,callback){
        method = 'GET';
        url = '/order/status';
        required_args = ['order_id'];
        all_args = ['order_id'];
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
    list : function(parameters, callback){
        if (typeof parameters === 'function') {
            callback = parameters;
            parameters = '';
        }
        method = 'GET';
        url = '/order/list';
        util.request(method,url,parameters,function(response,error){callback(response,error)});
    },
    update : function(parameters,callback){
        method = 'POST';
        url = '/order/update';
        required_args = ['order_id'];
        all_args = ['order_id', 'amount', 'currency', 'customer_id', 'customer_email', 'customer_phone',
            'description', 'product_id', 'gateway_id', 'return_url', 'billing_address_first_name',
            'billing_address_last_name', 'billing_address_line1', 'billing_address_line2',
            'billing_address_line3', 'billing_address_city', 'billing_address_state',
            'billing_address_country', 'billing_address_postal_code', 'billing_address_phone',
            'billing_address_country_code_iso', 'shipping_address_first_name',
            'shipping_address_last_name', 'shipping_address_line1', 'shipping_address_line2',
            'shipping_address_line3', 'shipping_address_city', 'shipping_address_state',
            'shipping_address_country', 'shipping_address_postal_code', 'shipping_address_phone',
            'shipping_address_country_code_iso', 'udf1', 'udf2', 'udf3', 'udf4', 'udf5', 'udf6', 'udf7',
            'udf8', 'udf9', 'udf10'];
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
    refund : function(parameters,callback){
        method = 'POST';
        url = '/order/refund';
        required_args = ['unique_request_id', 'order_id'];
        all_args = ['unique_request_id', 'order_id', 'amount'];
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