angular.module('wikiApp', [])
      .controller('wikiController', wikiController);

    wikiController.$inject = ['$scope', '$http'];
      function wikiController ($scope, $http){
   
        const vm = $scope;

        vm.search = function(searchText){
          vm.searchText = '';//clears the ng-model after ng-click
          // console.log(searchText);

          const wikiURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
          const callback = "&callback=JSON_CALLBACK";
          const appURL = wikiURL + searchText + callback;
          // console.log(appURL);


               $http.jsonp(appURL)
                .success(function(data){
                
                vm.results=data.query.pages;
                // console.log(vm.results);
          });
   };
}