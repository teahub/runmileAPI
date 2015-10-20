/**
 * tokenAuthStudent
 *
 * @module      :: Policy
 * @description :: Simple policy to allow Student users.
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  if (req.headers && req.headers.authorization) {
    JWTService.verifyToken(req.headers.authorization, function (err, decoded) {
      if (err) return res.status(401).send({
        status: 401,
        message: 'Invalid token.'
      });
      req.decoded = decoded;
      return next();
    });
  } else {
    return res.status(401).send({
      status: 401,
      message: 'No Authorization header was found.'
    });
  }
};
