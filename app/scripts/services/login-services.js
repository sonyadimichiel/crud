/**
 * Created by sonyadimichiel on 3/12/2015.
 */
angular.module('crudApp')
  .service('UserModel', function UserModel() {
    'use strict';
    // Initialise the model
    var loadUserModel = function() {
      var myUserModel = {
        userlist: localStorage['UserDS.userlist'] ?
            JSON.parse(localStorage['UserDS.userlist']) : []
      };

      return myUserModel;
    };

    var myUserModel = loadUserModel();

    this.saveUser = function(username, password) {
      var user = {
        username: username,
        password: password
      };

      myUserModel.userlist.push(user);
      localStorage['UserDS.userlist'] = JSON.stringify(myUserModel.userlist);
    };

    this.getUser = function(username, password) {
      var foundUser = false;
      for(var i = 0; i < myUserModel.userlist.length ; i++) {
        if (myUserModel.userlist[i].username === username &&
            myUserModel.userlist[i].password === password) {
          foundUser = true;
        }
      }
      return foundUser;
    };
  });
