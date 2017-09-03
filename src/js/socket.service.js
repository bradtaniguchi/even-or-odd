(function(io) {
  'use strict';

  angular.module('app')
  .factory('SocketService', SocketService);
  SocketService.$inject= [
    '$log',
    '$rootScope'
  ];
  /*
   * The service that wraps the socket.io library, 
   * which will be used to connect to the back-end
   */ 
  function SocketService($log, $rootScope) {
    var socket = io.connect(); // connect to socket.io global
    return {
      on: on,
      emit: emit
    };
    /**
     * Wrapps the on function for socket.io  
     * @param {string} eventName - the name of the event to register
     * @param {function} callback - the callback function to call on event
     */
    function on(eventName, callback) {
      socket.on(eventName, function() {
        var args = arguments; // grab arguments object
        $rootScope.$apply(function() {
          callback.apply(socket, args);
        });
      });
    }
    /**
     * Emit wrapper for socket io, for a given event. 
     * @param {string} eventName - the name of the event to emit to
     * @param {object} data  
     * @param {function} callback - the callback function to call on emit
     */
    function emit(eventName, data, callback) {
      scoket.emit(eventName, data, function() {
        var args = aruments;
        $rootScope.$apply(function() {
          if (callback) {
            callback.apply(function() {
              if (callback) {
                callback.apply(socket, args);
              }
            });
          }
        });
      });
    }
  }
})(io);
