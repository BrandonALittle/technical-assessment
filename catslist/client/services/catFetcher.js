angular.module('catFetcher', [])
  .service('catFetcher', function($http) {
    this.fetch = function(callback) {
      $http.get('http://127.0.0.1:3000/cats')
        .then(function(response) {
          if (callback) {
            callback(response.data);
            console.log(response);
          }
        }), function(response) {
          console.log(`Could not get cats from server`);
        }
    }

    this.post = function(callback) {
      $http.post('http://127.0.0.1:3000')
        .then(function(response) {
          console.log('Cat added to server');
        }), function(response) {
          console.log('Unable to post cat to server');
        }
    }
  });