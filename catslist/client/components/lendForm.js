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
                  <form>
                    Name:
                    <input type="text" placeholder="Your cat's name" ng-model="$ctrl.cat.name">
                    Owner's Email:
                    <input type="text" placeholder="Your email" ng-model="$ctrl.cat.email">
                    Image URL:
                    <input type="text" placeholder="URL" ng-model="ctrl.cat.image">
                    Description:
                    <button type="submit" ng-click="$ctrl.postCat()">Post Cat</button>
                    <textarea name="description" placeholder="Describe your cat here..." ng-model="$ctrl.cat.description">

                    <br>
                    <br>
                  </form>
                </div>
              `
  })