var btnDangKy = document.getElementById("DangKy")
var myRootRef = new Firebase('https://examtest-web-default-rtdb.firebaseio.com/Students');
console.log(myRootRef)




var app = angular.module("myApp", []);
app.controller("signInCtrl", function ($scope, $http) {
    var data = new Date();
    $scope.confirm;
    $scope.signIn = {
        Fullname : "",
        Username : "",
        Email : "",
        Gender : true,
        Password : "",
        Birthday : data,
        Avata : "default_avatar.png",
        schoolfee : "1500000",
        Mark : "10"
    }

   
    function checkForm() {
        if ($scope.signIn.Username === "" || $scope.signIn.Fullname === "") {
            console.log("1")
            return false;
        } else if ($scope.signIn.Email === "" || $scope.signIn.Password === "") {
            console.log("2")
            return false;
        } else if ($scope.signIn.Password != $scope.confirm) {
            console.log("3")
            return false;
        }else if($scope.signIn.Birthday  > data){
            console.log("4")
            return false;
        }
        return true;
    }

    btnDangKy.onclick = function () {
        if (checkForm()) {
            var newStudent = myRootRef.push($scope.signIn);
            alert("Đăng Ký thành công");
            $scope.signIn = null;
        } else {
            alert("Đăng ký thất bại");
            $scope.signIn = null;
        }
    }

})