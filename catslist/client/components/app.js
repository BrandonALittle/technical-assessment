angular.module('catsList', ['catList', 'catFetcher', 'lendForm', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
      template: `<div id="cats">
                   <cat-list cats="$ctrl.cats"></cat-list>
                 </div>`,
                 controller: 'catsListCtrl'
    })
    .when("/borrow", {
      template: `<div id="cats">
                   <cat-list cats="$ctrl.cats"></cat-list>
                 </div>`,
                 controller: 'catsListCtrl'
    })
    .when("/lend", {
      template: `<lend-form service="$ctrl.services" set-cats="$ctrl.setCats"></lend-form>`,
      controller: 'catsListCtrl'
    });
  })

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
                    <ul class="nav">
                      <li><a href="#borrow">Borrow a Cat</a></li>
                      <li><a href="#lend">Lend a Cat</a></li>
                    </ul>
                  </div>
                    <div class="row" id="main" ng-view>
                </div>
              `
  })