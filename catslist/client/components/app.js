angular.module('catsList', ['catList'])
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
    this.cats = Window.cats;
    console.log(this.cats);
  })

  .component('app', {
    controller: 'catsListCtrl',

    template:
              `
                <div id="app container">
                  <div id="navCtrl">
                    <div></div>
                    <div></div>
                  </div>
                  <div id="main">
                    <div id="cats">
                      <cat-list cats="$ctrl.cats"></cat-list>
                    </div>
                  </div>
                </div>
              `
  })