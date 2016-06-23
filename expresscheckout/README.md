# ec-node-client
Node.js Client for ExpressCheckout

##Installation

Install from npm:

`sudo npm install expresscheckout`

##Usage

Import the library

`require('expresscheckout');`

###Example Usage

`config.api_key='YOUR API-KEY HERE';`
`orders.create({order_id:123,amount:700},function (response){console.log(response)});`

The complete API Documentation can be viewed at 'https//apidocs.juspay.in'