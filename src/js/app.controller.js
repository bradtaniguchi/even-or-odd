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
      UserService.
    }

    function flip() {
      console.log('flip clicked');
    }
  }
})();
