(function() {
  'use strict';
  angular.module('app')
  .factory('UserService', UserService);
  UserService.$inject=[
    '$log',
    '$http',
    '$q'
  ];

  function UserService($log, $http, $q) {
    var url = '/app/user'; // base url for this service
    return {
      loginUser: loginUser,
      logoutUser: logoutUser,

      getUser: getUser,
      registerUser: registerUser
    };
    /**
     * Logs a user into the application.
     * @param {string} username
     * @param {string} password 
     */
    function loginUser(username, password) {
      $log.log('in login user');
      $log.log(username + '-' + password);
    }
    /**
     * Registers the user with the application.
     * @param {string} username
     * @param {string} password
     */ 
    function registerUser(username, password) {
      $log.log('register user');
    }
    /**
     * Gets the currently logged in user, or returns null if there isn't one.
     * @return {object} the user object that is registered
     */
    function getUser() {
      var differed = $q.defer();
      var user = { // hardcode a user for now
        username: 'brad',
        jwt: '12345' // totally fake
      };
      differed.resolve(user);
      return differed.promise;
    }
    /**
     * Logs the user out of the application.
     * @param {string} username
     */
    function logoutUser(username) {
      $log.log('logout user');
    }
  }
})();
