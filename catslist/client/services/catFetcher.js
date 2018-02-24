angular.module('catFetcher', [])
  .service('catFetcher', function($http) {
    this.fetch = function(callback) {
      $http.get('http://127.0.0.1:3000/cats')
        .then(function(response) {
          if (callback) {
            callback(response);
          }
        }), function(response) {
          console.log(`Could not get cats from server`);
        }
    }
  });