angular.module('catsList', ['catList', 'catFetcher'])
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

  .controller('catsListCtrl', function(catFetcher) {
    this.services = catFetcher;
    this.setCats = (data) => {
      this.cats = data;
    };
    this.services.fetch(this.setCats);
  })

  .component('app', {
    controller: 'catsListCtrl',

    template:
              `
                <div id="app container">
                  <div id="navCtrl">
                    <div><h3>Borrow a Cat</h3></div>
                    <div><h3>Lend a Cat</h3></div>
                  </div>
                  <div id="main">
                    <div id="cats">
                      <cat-list cats="$ctrl.cats"></cat-list>
                    </div>
                  </div>
                </div>
              `
  })