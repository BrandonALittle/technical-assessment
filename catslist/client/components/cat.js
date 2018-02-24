angular.module('cat', [])
  .component('cat', {
    bindings: {
      cat: '<'
    },
    template:
              `
                <div id="litterbox">
                  <img src="$ctrl.cat.img" />
                  <h4>{{cat.name}}</h4>
                  <span>{{cat.owner}}</span>
                  <p>{{cat.description}}</p>
                </div>
              `
  })