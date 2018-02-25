angular.module('lendForm', [])
  .controller('lendFormCtrl', function() {
    this.postCat = function() {
      console.log(this.cat);
      this.service.post(JSON.stringify(this.cat));
      this.service.fetch(this.setCats);
    }
  })

  .component('lendForm', {
    controller: 'lendFormCtrl',
    bindings: {
      service: '<',
      setCats: '<'
    },

    template:
              `
                <div>
                  <h2>List a Cat to Lend</h2>
                  <form class="form-horizontal">
                    <div class="form-group col-lg-4">
                      <label class="control-label">Name:</label>
                      <input class="form-control" type="text" placeholder="Your cat's name" ng-model="$ctrl.cat.name">
                    </div>
                    <div class="form-group col-lg-4" >
                      <label class="control-label">Owner's Email:</label>
                      <input class="form-control" type="email" placeholder="Your email" ng-model="$ctrl.cat.email">
                    </div>
                    <div class="form-group col-lg-6">
                      <label class="control-label">Image URL:</label>
                      <input class="form-control type="text" placeholder="URL" ng-model="ctrl.cat.image">
                    </div>
                    <div class="form-group">
                      <label class="control-label">Description:</label>
                      <textarea class="form-control" name="description" placeholder="Describe your cat here..." ng-model="$ctrl.cat.description"></textarea>
                    </div>
                    <button class="btn btn-default" type="submit" ng-click="$ctrl.postCat()">Post Cat</button>
                  </form>

                  </div>
              `
  })