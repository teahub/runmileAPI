/**
 * AccountsController
 *
 * @description :: Server-side logic for managing Accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    validateStudent: function (req, res, next) {
        // Student.findone();
        SchoolService.checkStudent(req.headers.enrollment, req.headers.password, function (err, student) {
            if (err) {
                return res.json(err.status, err.message);
            } else {
                return res.json(200, student);
            }
        });
    }

};

