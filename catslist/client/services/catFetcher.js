angular.module('catFetcher', [])
  .service('catFetcher', function($http) {
    this.fetch = function(callback) {
      $http.get('http://127.0.0.1:3000/cats')
        .then(function(response) {
          if (callback) {
            callback(response.data);
          }
        }), function(response) {
          console.log(`Could not get cats from server`);
        }
    }

    this.post = function(data) {
      $http.post('http://127.0.0.1:3000/cats', data)
        .then(function(response) {
          console.log('Cat added to server');
        }), function(response) {
          console.log('Unable to post cat to server');
        }
    }
  });