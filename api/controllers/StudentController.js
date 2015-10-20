/**
 * StudentController
 *
 * @description :: Server-side logic for managing Accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function (req, res, next) {
    var student = req.params.all();
    Student.create(student, function (err, student) {
      if (err) {
        return res.json(err);
      } else {
        var token = JWTService.issue({id: student.id});
        return res.json({
          status: 200,
          data: {
            token: token
          }
        });
      }
    });

  }
};

