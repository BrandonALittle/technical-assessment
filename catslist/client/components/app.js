angular.module('catsList', ['ngRoute'])
  // ROUTING - TODO LATER
  // .config(function($routeProvider) {
  //   $routeProvider
  //   .when("/", {
  //     templateUrl: ""
  //   })
  //   .when("/borrow", {
  //     templateUrl: ""
  //   })
  //   .when("/lend", {
  //     templateUrl: ""
  //   })
  // })

  .controller('catsListCtrl', function() {

  })

  .component('app', {
    controller: catsListCtrl,

    template:
              `
                <div id="app container">
                  <div id="navCtrl">
                    <div></div>
                    <div></div>
                  </div>
                  <div id="main">
                    <div id="cats">
                      <cat-list></cat-list>
                    </div>
                  </div>
                </div>
              `
  })