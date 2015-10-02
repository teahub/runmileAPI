/**
 * AccountsController
 *
 * @description :: Server-side logic for managing Accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	check: function(req, res, next) {
    SchoolService.checkStudent(req.headers.code, req.headers.pass, function(err, student){
      if (err) next(err);
      return res.json(student);
    });
	}

};

