<img src="http://bitcore.io/css/images/module-message.png" alt="denariicore message" height="35">
# Denarius Message Verification and Signing for Bitcore


[![NPM Package](https://img.shields.io/npm/v/denariicore-message.svg?style=flat-square)](https://www.npmjs.org/package/denariicore-message)
[![Build Status](https://img.shields.io/travis/carsenk/denariicore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/carsenk/denariicore-message)
[![Coverage Status](https://img.shields.io/coveralls/carsenk/denariicore-message.svg?style=flat-square)](https://coveralls.io/r/carsenk/denariicore-message?branch=master)

denariicore-message adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main denariicore repo](https://github.com/carsenk/denariicore) for more information.

## Getting Started

```sh
npm install denariicore-message
```

```sh
bower install denariicore-message
```

To sign a message:

```javascript
var denariicore = require('denariicore-lib');
var Message = require('denariicore-message');

var privateKey = denariicore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'IKdE4ut+leOMMN2CgW3iq71+K6NzjXJLwpMs0ZfFw3IoFzy6J7F06iK5qwQNQQxakUZPLmUlDKh2iG2VA1gygGY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/carsenk/denariicore/blob/master/CONTRIBUTING.md) on the main denariicore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/carsenk/denariicore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

Copyright 2017 The Denarius Core Developers
