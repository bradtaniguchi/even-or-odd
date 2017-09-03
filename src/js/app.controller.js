(function() {
  'use strict';
  angular.module('app')
  .controller('AppController', AppController);
  AppController.$inject=[
    '$log',
    'UserService',
    'RollService'
    ];
  function AppController($log, UserService, RollService) {
    var vm = this;
    // variables
    vm.user; // the current player
    vm.loading = true; // loading the game/player registration
    vm.users = []; // list of other people, not including the player
    vm.player = {}; // the current player
    // functions
    vm.flip = flip;
    vm.$onInit = onInit;
    return vm;
    /**
     * Load player, if not logged in, show login page
     */
    function onInit() {
      console.log('in AppController');
      UserService.getUser()
      .then(function(user) {
        if (user) {
          console.log('user found!');
          console.log(user);
          vm.user = user;
        } else {
          console.error('user not found!');
        }
        vm.loading = false; // show/hide all pages
      });
    }

    function flip() {
      console.log('flip clicked');
    }
  }
})();
