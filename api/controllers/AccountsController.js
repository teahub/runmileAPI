/**
 * AccountsController
 *
 * @description :: Server-side logic for managing Accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  validateStudent: function (req, res, next) {
    SchoolService.checkStudent(req.headers.enrollment, req.headers.password, function (err, student) {
      if (err) {
        if (err.status) return res.status(err.status).json(err);
      } else {
        return res.json({
          status: 200,
          data: student
        });
      }
    });
  }

};

