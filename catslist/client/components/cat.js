angular.module('cat', [])
  .component('cat', {
    bindings: {
      cat: '<'
    },
    template:
              `<li class="list-group-item col-xs-6 col-sm-4 col-md-3">
                <div id="litterbox">
                  <img src={{$ctrl.cat.image}} class="catImg">
                  <h4>{{$ctrl.cat.name}}</h4>
                  <span>{{$ctrl.cat.owner}}</span>
                  <p>{{$ctrl.cat.description}}</p>
                </div>
                </li>
              `
  })