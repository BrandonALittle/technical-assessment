angular.module('catList', ['cat'])
  .component('catList', {
    bindings: {
      cats: '<'
    },
    template:
              `
                <div id="list">
                <ul>
                  <cat ng-repeat="cat in $ctrl.cats" cat="cat"></cat>
                </ul>
                </div>
              `
  });