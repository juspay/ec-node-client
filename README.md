# ExpressCheckout Node.js Client
Easy way to integrate with ExpressCheckout from your node.js application.

## Installation

Install from npm:

`npm install expresscheckout`

## Usage

Import the library

`require('expresscheckout');`

### Example Usage

`config.api_key = 'YOUR API-KEY HERE';`

```
orders.create({order_id: 123, amount: 700}, function (response) {
  console.log(response);
});
```

The complete API Documentation can be viewed at: [https//apidocs.juspay.in](https//apidocs.juspay.in)
