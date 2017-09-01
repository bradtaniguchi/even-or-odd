(function() {
  'use strict';
  angular.module('app')
  .factory('RollService', RollService);
  RollService.$inject= [
    '$log',
    '$http',
    '$q'
  ];
  function RollService($log, $http, $q) {
    return {
      roll: roll
    };
    
    /**
     * Returns the word even or odd.
     */
    function roll() {
      return (Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails';
    }
  }
})();
