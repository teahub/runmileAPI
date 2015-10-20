var jwt = require('jsonwebtoken');
var secret ='709bd73c91c167188806f5936589cc2aeb97bf6907456bc5708c0e85b414f0e8';

module.exports = {

    issue: function (payload) {
        return jwt.sign(payload, secret); // sign with default (HMAC SHA256)
    },

    verify: function (token, callback) {
        jwt.verify(
            token, // The token to be verified
            secret, // Same token we used to sign
            {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
            callback // Pass errors or decoded token to callback, eg. function (err, decoded) {}
        );
    }

};
