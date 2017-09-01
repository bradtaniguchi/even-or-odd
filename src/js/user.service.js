(function(){
  'use strict';
  angular.module('app')
  .factory('UserSerivce', UserService);
  UserService.$inject=[
    '$log',
    '$http',
    '$q'
  ];

  function UserService($log, $http, $q) {
    return {
      loginUser: loginUser,
      logoutUser: logoutUser
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
     */
    function getUser() {
      return {
        username: 'brad',
        jwt: '12345' // totally fake
      };
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
