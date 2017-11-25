angular.module('starter.controllers',  [])
.controller('TodoController', function($scope, $http){

  $http({
//    url:"http://192.168.8.100/medify/include/getdata.php",
      // url:"http://www.jeonneilblanco.esy.es/php/getdata.php",
       url:"http://localhost/medify/include/getdata.php",
      method:"GET"
    })
    .then(function(response){
      // console.log(response['data']);
      $scope.medlist = response['data'];
    })
  // // Triggered on a button click, or some other target
  // $scope.show = function(a) {
  //
  //   // Show the action sheet
  //   var hideSheet = $ionicActionSheet.show({
  //     buttons: [
  //       { text: '<b>Share</b> This' },
  //       { text: 'Edit' }
  //     ],
  //     destructiveText: 'Delete',
  //     titleText: 'Modify your Medicine List',
  //     cancelText: 'Cancel',
  //     cancel: function() {
  //          // add cancel code..
  //        },
  //     destructiveButtonClicked: function(){
  //       console.log(a.medicine_list_ID);
  //       $http({
  //         url:"http://www.jeonneilblanco.esy.es/php/delete.php",
  //         method:"POST",
  //         data:{
  //         'id':a.medicine_list_ID
  //         }
  //       })
  //       .then(function(response){
  //         return true;
  //       })
  //     } ,
  //
  //     destructiveButtonClickedEdit: function(){
  //       console.log(a.medicine_list_ID);
  //       $http({
  //       url:"http://www.jeonneilblanco.esy.es/php/edit.php",
  //       method:"POST",
  //       data:{
  //       'id':id,
  //       'addname':name,
  //       'addquantity':quantity
  //       }
  //     })
  //     .then(function(response){
  //       $scope.add = false;
  //       $scope.cancel = false;
  //       // console.log(response);
  //       document.getElementById('name').value = "";
  //       document.getElementById('quantity').value = "";
  //     })
  //     } ,
  //
  //     buttonClicked: function(index) {
  //       return true;
  //     }
  //   });
  //
  //   // For example's sake, hide the sheet after two seconds
  //   $timeout(function() {
  //     hideSheet();
  //   }, 1500);
  //
  // };

$scope.addMed = function(){
  var name = document.getElementById('name').value;
  var quantity = document.getElementById('quantity').value;


  $http({
//        url:"http://192.168.8.100/medify/include/add.php",
    // url:"http://www.jeonneilblanco.esy.es/php/add.php",
     url:"http://localhost/medify/include/add.php",
    method:"POST",
    data:{
    'addname':name,
    'addquantity':quantity
    }
  })
  .then(function(response){
    // console.log(response);
    document.getElementById('name').value = "";
    document.getElementById('quantity').value = "";
    $http({
//          url:"http://192.168.8.100/medify/include/getdata.php",
        // url:"http://www.jeonneilblanco.esy.es/php/getdata.php",
         url:"http://localhost/medify/include/getdata.php",
        method:"GET"
      })
      .then(function(response){
        // console.log(response['data']);
        $scope.medlist = response['data'];
      })
  })
};

// $http({
//     url:"http://localhost/medify/include/getdata.php",
//     method:"GET"
//   })
//   .then(function(response){
//     // console.log(response['data']);
//     $scope.medlist = response['data'];
//   })

// setInterval(function(){
// $http({
//     // url:"http://www.jeonneilblanco.esy.es/php/getdata.php",
//     url:"http://localhost/medify/include/getdata.php",
//     method:"GET"
//   })
//   .then(function(response){
//     // console.log(response['data']);
//     $scope.medlist = response['data'];
//   })
// },1000)

$scope.edit = function(id, name, quantity){
  $scope.add = true;
  $scope.cancel = true;
  document.getElementById('name').value = name;
  document.getElementById('quantity').value = quantity;
  $scope.id = id;
}
$scope.save_edit = function(id, name, quantity){


    $http({
//          url:"http://192.168.8.100/medify/include/edit.php",
    // url:"http://www.jeonneilblanco.esy.es/php/edit.php",
     url:"http://localhost/medify/include/edit.php",
    method:"POST",
    data:{
    'id':id,
    'addname':name,
    'addquantity':quantity
    }
  })
  .then(function(response){
    $http({
//          url:"http://192.168.8.100/medify/include/getdata.php",
        // url:"http://www.jeonneilblanco.esy.es/php/getdata.php",
         url:"http://localhost/medify/include/getdata.php",
        method:"GET"
      })
      .then(function(response){
        // console.log(response['data']);
        $scope.medlist = response['data'];
      })
    $scope.add = false;
    $scope.cancel = false;
    // console.log(response);
    document.getElementById('name').value = "";
    document.getElementById('quantity').value = "";
  })
}

$scope.canceled = function(){
  $scope.add = false;
  $scope.cancel = false;
  document.getElementById('name').value = "";
  document.getElementById('quantity').value = "";
}

$scope.delete = function(id){
  $http({
//        url:"http://192.168.8.100/medify/include/delete.php",
    // url:"http://www.jeonneilblanco.esy.es/php/delete.php",
     url:"http://localhost/medify/include/delete.php",
    method:"POST",
    data:{
    'id':id
    }
  })
  .then(function(response){
    $http({
//          url:"http://192.168.8.100/medify/include/getdata.php",
        // url:"http://www.jeonneilblanco.esy.es/php/getdata.php",
         url:"http://localhost/medify/include/getdata.php",
        method:"GET"
      })
      .then(function(response){
        // console.log(response['data']);
        $scope.medlist = response['data'];
      })
  })
}
})
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
