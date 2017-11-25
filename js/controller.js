angular.module('starter.controllers',  [])


 .controller('SearchController', function($scope, $http) {

    $http({
        // url:"http://192.168.8.101/medify/include/search.php",
//        url: "https://medify.000webhostapp.com/search.php",
//         url:"http://localhost/Vercons/include/search.php",
      url: "https://vercons.000webhostapp.com/search.php",
        method: "GET"
      })
      .then(function(response) {
        // console.log(response['data']);
        $scope.searchlist = response['data'];
      })
});
