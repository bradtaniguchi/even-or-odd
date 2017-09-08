(function() {
  'use strict';
  angular.module('app')
  .controller('RegistrationController', RegistrationController);
  RegistrationController.$inject=[
    '$log'
  ];
  function RegistrationController($log) {
    var vm = this;
    return vm;
  }
})();
