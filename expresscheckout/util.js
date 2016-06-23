/**
 * Created by root on 23/6/16.
 */
var unirest = require('unirest');
var config = require('./config');

module.exports = {
    request: function (method, url, parameters, callback) {
        var server;
        if(config.environment=='production')
            server = 'https://api.juspay.in';
        else if(config.environment=='staging')
            server =  'https://sandbox.juspay.in';
        if (method == 'GET') {
            unirest.get(server + url).auth(config.api_key,'').send(parameters).end(function (resp) {
                if((resp.status>=200&&resp.status<300)&&resp.body['status']!='ERROR'){
                    callback(resp.body,null);
                }
                else{
                    callback(null, resp.body);
                }
            })
        }
        else {
            unirest.post(server + url).auth(config.api_key,'').send(parameters).end(function (resp) {
                if((resp.status>=200&&resp.status<300)&&resp.body['status']!='ERROR'){
                    callback(resp.body,null);
                }
                else{
                    callback(null, resp.body);
                }
            })
        }
    },
    get_arg: function (parameters,param,callback) {
        var value = null;
        if(parameters.hasOwnProperty(param)){
            value = parameters[param];
        }
        callback(value)
    },
    check_param: function(parameters,param,callback) {
        var flag = false;
        for (var key  in  parameters) {
            if(parameters.hasOwnProperty(key)) {
                if (key.startsWith(param)) {
                    flag = true
                }
            }
        }
        callback(flag);
    }

};

