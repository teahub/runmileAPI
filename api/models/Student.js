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
          required: true,
          unique: true
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
          type: 'email',
          required: true
      },
      password: {
          type: 'string',
          size: 64,
          required: true
      },

      toJSON: function(){
          var student = this.toObject();
          delete student.password;
          return student;
      }
  },

  beforeCreate: function (student, next) {
      //delete student._csrf;
      delete student.terms;
      student.password = CipherService.hashPassword(student.password);
      next();
  }

};
