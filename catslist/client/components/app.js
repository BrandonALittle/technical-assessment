angular.module('catsList', ['catList', 'catFetcher', 'lendForm', 'ngRoute'])
  // .config(function($routeProvider) {
  //   $routeProvider
  //   .when("/", {
  //     template: `<div id="cats">
  //                  <cat-list cats="$ctrl.cats"></cat-list>
  //                </div>`,
  //                controller: 'catsListCtrl'
  //   })
  //   .when("#borrow", {
  //     template: `<div id="cats">
  //                  <cat-list cats="$ctrl.cats"></cat-list>
  //                </div>`,
  //                controller: 'catsListCtrl'
  //   })
  //   .when("#lend", {
  //     template: `<lend-form></lend-form>`,
  //     controller: 'catsListCtrl'
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
                    <div><a href="#borrow">Borrow a Cat</a> |
                    <a href="#lend">Lend a Cat</a></div>
                  </div>
                  <div id="main">
                  <div id="cats">
                   <cat-list cats="$ctrl.cats"></cat-list>
                 </div>
                  <lend-form service="$ctrl.services" set-cats="$ctrl.setCats"></lend-form>
                  </div>
                </div>
              `
  })