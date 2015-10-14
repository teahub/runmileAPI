/**
 * SchoolService.js
 */

module.exports = {

    checkStudent: function(enrollment, password, callback) {
        var client = require('ldapjs').createClient({
            //url: 'ldap://172.20.0.40' //local
            url: 'ldap://189.3.209.187'
        });

        client.bind(enrollment+'@fjn.com', password, function(err) {
            if (err) {
                callback({
                    status: 401,
                    message: err
                }, null);
            } else {
                client.search('ou=Laboratorios, ou=FJN, dc=FJN, dc=COM', {
                    filter: '(givenName='+enrollment+')',
                    scope: 'sub'
                }, function(err, res) {
                    if (err) {
                       callback({
                          status: 503,
                          message: err
                        }, null);
                    } else {
                        res.on('searchEntry', function(entry){
                            var student = {
                                name: entry.object.name.toUpperCase()
                            };
                            callback(null, student);
                        });
                        res.on('error', function(err){
                            callback({
                                status: 503,
                                message: err
                            }, null);
                        });
                    }
                });
            }
        });
    }

};

