/**
 * SchoolService.js
 */

module.exports = {

  checkStudent: function(code, pass, callback) {

    var client = require('ldapjs').createClient({
      //url: 'ldap://172.20.0.40' //local
      url: 'ldap://189.3.209.187'
    });

    client.bind(code+'@fjn.com', pass, function(err) {
      if (err) {
        callback(err, null);
      } else {
        client.search('ou=Laboratorios, ou=FJN, dc=FJN, dc=COM', {
          filter: '(givenName='+code+')',
          scope: 'sub'
        }, function(err, res) {
          if (err) {
            callback(err, null);
          } else {
            res.on('searchEntry', function(entry){
              var student = {
                name: entry.object.name
              };
              callback(null, student);
            });
            res.on('error', function(err){
              callback(err, null);
            });
          }
        });
      }
    });
  }

};

