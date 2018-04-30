# Message Verification and Signing
Viacore implementation of [denarius message signing and verification](http://bitcoin.stackexchange.com/questions/3337/what-are-the-safety-guidelines-for-using-the-sign-message-feature/3339#3339). This is used to cryptographically prove that a certain message was signed by the holder of an address private key.

For more information refer to the [denariicore-message](https://github.com/denarius/denariicore-message) github repo.

## Installation
Message Verification and Signing is implemented as a separate module and you must add it to your dependencies:

For node projects:

```bash
npm install denariicore-message --save
```

For client-side projects:

```bash
bower install denariicore-message --save
```

## Example
To sign a message:

```javascript
var privateKey = PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'IKdE4ut+leOMMN2CgW3iq71+K6NzjXJLwpMs0ZfFw3IoFzy6J7F06iK5qwQNQQxakUZPLmUlDKh2iG2VA1gygGY=';
var verified = Message('hello, world').verify(address, signature);
```
