/**
* Student.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    enrollment: {
      type: 'integer',
      size: 9,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    alias: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      //email: true,
      required: true
    },
    salt: {
      type: 'string',
      size: 64,
      required: true
    },
    password: {
      type: 'string',
      size: 64,
      required: true
    }
  }

};

