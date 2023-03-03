
var app = angular.module("myApp", ["ngRoute"]);
// app.config(function ($routeProvider) {
//   $routeProvider.when("/cauhoi/:id/:name", {
//       templateUrl: "exam.html",
//       controller:"QuestionCtrl"
//   }).otherwise({
//       template: "<h1>éo có gì hết</h1>"
//   });
// });
app.controller("SubjectCtrl", async function ($scope, $http,$routeParams) {
  await $http.get("https://examtest-web-default-rtdb.firebaseio.com/Subjects.json").then((result) => {
    return result.data;
  }).then((data) => {
    console.log(data);
    $scope.Subjects = data;

    $scope.pageCount = Math.ceil($scope.Subjects.length / 8);

    var SubjectItem = document.getElementsByClassName("item-courses");
    console.log(SubjectItem);
    SubjectItem.foreach(function(subject){
      // subject.addEventListener("click",function(event){
      //   console.log(1);
      // })
      console.log(1);
    })
    
  }).catch((err) => {

  });

  $scope.begin = 0;


  $scope.first = function () {
    $scope.begin = 0;
  }

  $scope.prev = function () {
    if ($scope.begin > 0) {
      $scope.begin -= 8;
    }
  }

  $scope.next = function () {
    if ($scope.begin < ($scope.pageCount - 1) * 8) {
      $scope.begin += 8;
    }
  }

  $scope.last = function () {
    $scope.begin = ($scope.pageCount - 1) * 8
  }
  alert($routeParams.id)


})
app.controller("QuestionCtrl",function($scope, $http,$routeParams){
  alert($routeParams.id)
})



