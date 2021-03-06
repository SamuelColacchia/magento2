/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            braintreeClient: 'https://js.braintreegateway.com/web/3.44.1/js/client.min.js',
            braintreeHostedFields: 'https://js.braintreegateway.com/web/3.44.1/js/hosted-fields.min.js',
            braintreePayPal: 'https://js.braintreegateway.com/web/3.44.1/js/paypal-checkout.min.js',
            braintree3DSecure: 'https://js.braintreegateway.com/web/3.44.1/js/three-d-secure.min.js',
            braintreeDataCollector: 'https://js.braintreegateway.com/web/3.44.1/js/data-collector.min.js'
        }
    },
    paths: {
        braintreePayPalCheckout: 'https://www.paypalobjects.com/api/checkout.min'
    },
    shim: {
        braintreePayPalCheckout: {
            exports: 'paypal'
        }
    }
};
