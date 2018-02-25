angular.module('cat', [])
  .component('cat', {
    bindings: {
      cat: '<'
    },
    template:
              `<li class="list-group-item">
                <div id="litterbox">
                  <img src={{$ctrl.cat.image}} class="image-responsive">
                  <div class="details">
                    <h4>{{$ctrl.cat.name}}</h4>
                    <span>{{$ctrl.cat.owner}}</span>
                    <p>{{$ctrl.cat.description}}</p>
                  </div>
                </div>
                </li>
              `
  })