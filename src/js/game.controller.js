(function() {
  'use strict';
  angular.module('app')
  .controller('GameController', GameController);
  GameController.$inject=[
    '$log',
    'UserService',
    'SocketService'
  ];
  function GameController($log, UserService, SocketService) {
    var vm = this;
    vm.user = {}; // the current user section
    vm.bet = bet;
    vm.$onInit = onInit;
    return vm;
    // Use SocketService here   

    function onInit() {
      $log.log('in game controller');
      UserService.getUser()
      .then(function(user) {
        if (user) {
          console.log('user found in game controller');
          console.log(user);
        } else {
          console.error('user not found in game controller!');
        }
      });
    }
    /**
     * Has the given user bet the side, with the ammount
     * @param {string} user - the name of the user that is betting
     * @param {string} side - the side, either HEADS or TAILS,
     * @param {number} amount - the amount the user is betting
     */
    function bet(user, side, amount) {
      console.log('bet');
      console.log(user);
      console.log(side);
      console.log(amount);
      console.log('---');
    }
  }
})();
