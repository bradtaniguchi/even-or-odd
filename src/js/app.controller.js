(function() {
  'use strict';
  angular.module('app')
  .controller('AppController', AppController);
  AppController.$inject=['$log'];
    
  function AppController($log) {
    var vm = this;
    vm.$onInit = onInit;
    return vm;
    
    function onInit() {
      console.log('in AppController'); 
    }
  }
})();
