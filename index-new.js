var accSuccess = document.getElementById("AccountGroup");
var accNotYet = document.getElementById("loginGroup");
var tenDangNhap = document.getElementById("tenDangNhap");
var matKhau = document.getElementById("matKhau");
var btnDangNhap = document.getElementById("DangNhap");
var btnDangKy = document.getElementById("DangKy")
var btnDangXuat = document.getElementById("dangXuat");
var btnDoiMatKhau = document.getElementById("btn-doiMatKhau");
var btnTimMatKhau = document.getElementById("btn-timMatKhau");
var closeDgLogin = document.getElementById("ModalLogin");
var AvataImg = document.getElementById("Avata-img");
var nameAccMain = document.getElementById("dropdownUser1");
var nameAccSub = document.getElementById("NameAcc");
var SubjcetSite01 = document.getElementById("subject01");
console.log(SubjcetSite01)
accSuccess.style.display = "none";
// var myRootRef = new Firebase('https://examtest-web-default-rtdb.firebaseio.com/Students');
nameAccMain.innerHTML = "";
console.log()
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/monthi", {
        templateUrl: "pages/Subjects.html",
        controller: "SubjectCtrl"
    }).when("/cauhoi/:id/:name", {
        templateUrl: "pages/exam.html",
        controller: "QuestionCtrl"
    }).when("/trangchu", {
        templateUrl: "pages/aboutUs.html",
        controller: "AboutUsCtrl"
    }).when("/lienhe", {
        templateUrl: "pages/contact.html",
        controller: "ContactCtrl"
    }).otherwise({
        templateUrl: "pages/aboutUs.html",
    });
});
app.controller("CtrlMain", function ($scope, $http, $routeParams) {
    $http.get("https://examtest-web-default-rtdb.firebaseio.com/Students.json")
        .then((result) => {
            return Object.keys(result.data);
        }).then((keyData) => {
            console.log(keyData)
            // chức năng đăng nhập
            btnDangNhap.onclick = function () {
                keyData.forEach(element => {
                    $http.get("https://examtest-web-default-rtdb.firebaseio.com/Students/" + element + ".json").then((result) => {
                        var student = result.data;
                        var varTest = false;
                        if (student.Username == tenDangNhap.value && student.Password == matKhau.value) {
                            accNotYet.style.display = "none";
                            accSuccess.style.display = "flex";
                            nameAccMain.innerHTML = student.Fullname;
                            nameAccSub.innerHTML = student.Fullname;
                            SubjcetSite01.style.display = "block"
                            $scope.avata = student.Avata;
                            $scope.newFullname = student.Fullname;
                            $scope.newUsername = student.Username;
                            $scope.newgioiTinh = student.Gender;
                            $scope.newAvata = student.Avata;
                            $scope.newBirthday = student.Brithday;
                            alert("Đăng nhập thành công");
                            matKhau.value = null;
                            varTest = true;
                            return;
                        }
                    }).catch((err) => {
                        alert("đăng nhập thất bại");
                    });
                });
            }
            // chức năng đổi mật khẩu
            btnDoiMatKhau.onclick = function () {
                keyData.forEach(element => {
                    $http.get("https://examtest-web-default-rtdb.firebaseio.com/Students/" + element + ".json").then((result) => {
                        var student = result.data;
                        if (student.Username == $scope.nameLogin && student.Password == $scope.passwordOld) {
                            $http.put("https://examtest-web-default-rtdb.firebaseio.com/Students/" + element + "/Password" + ".json", $scope.passwordNew).then((result) => {
                                console.log(result)
                                alert("Đổi mật khẩu thành công")
                                $scope.nameLogin = null;
                                $scope.passwordOld = null;
                                $scope.passwordNew = null;
                            }).catch((err) => {
                                console.log(err)
                            });
                        }

                    }).catch((err) => {
                        console.log(err)
                    });
                });
            }
            // chức năng dăng xuất
            btnDangXuat.onclick = function () {
                accNotYet.style.display = "flex";
                accSuccess.style.display = "none";
                SubjcetSite01.style.display = "none"
                nameAccMain.innerHTML = "";
            }

            $scope.CapnhatInfo = async function () {
                keyData.forEach(element => {
                    $http.get("https://examtest-web-default-rtdb.firebaseio.com/Students/" + element + ".json").then(async (result) => {
                        var student = result.data;
                        if (student.Username == tenDangNhap.value) {
                            await $http.put("https://examtest-web-default-rtdb.firebaseio.com/Students/" + element + "/Fullname" + ".json", $scope.newFullname).then((result) => {
                                alert("cập nhật họ tên thành công");
                            }).catch((err) => {
                                console.log(err)
                            });
                            await $http.put("https://examtest-web-default-rtdb.firebaseio.com/Students/" + element + "//Username" + ".json", $scope.newUsername).then((result) => {
                                alert("cập nhật tên đăng nhập thành công");
                            }).catch((err) => {

                            });

                            await $http.put("https://examtest-web-default-rtdb.firebaseio.com/Students/" + element + "/Gender" + ".json", $scope.newgioiTinh).then((result) => {
                                alert("cập nhật giới tính thành công");
                            }).catch((err) => {

                            });

                            await $http.put("https://examtest-web-default-rtdb.firebaseio.com/Students/" + element + "/Brithday" + ".json", $scope.newBirthday).then((result) => {
                                alert("cập nhật ngày sinh thành công");
                            }).catch((err) => {


                            });

                            await $http.put("https://examtest-web-default-rtdb.firebaseio.com/Students/" + element + "/Avata" + ".json", $scope.newAvata).then((result) => {
                                alert("cập nhật ảnh đại điện thành công");
                            }).catch((err) => {

                            });

                        }
                    }).catch((err) => {
                        console.log(err)
                    });
                });
            }

        }).catch((err) => {
            console.log(err);
        });

    // $http.post("https://examtest-web-default-rtdb.firebaseio.com/Students/Students/2/",$scope.StudentSignIn).then(function(){
    //     alert("đăng ký thành công");
    // },function(err){
    //     console.log(err);
    // })

    // /Students/2/


})
app.controller("ContactCtrl", function ($scope) {

})
app.controller("SubjectCtrl", async function ($scope, $http, $routeParams) {
    await $http.get("https://examtest-web-default-rtdb.firebaseio.com/Subjects.json").then((result) => {
        return result.data;
    }).then((data) => {
        console.log(data);
        $scope.Subjects = data;
        $scope.pageCount = Math.ceil($scope.Subjects.length / 8);
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



})
app.controller("QuestionCtrl", async function ($scope, $http, $routeParams) {
    $scope.nameSubject = $routeParams.name;
    await $http.get("https://examtest-web-default-rtdb.firebaseio.com/Quiz/" + $routeParams.id + ".json").then((result) => {
        return result.data;
    }).then((data) => {
        $scope.Questions = data;
        $scope.RamdomQuizs = [];
        for (let index = 0; index < 10; index++) {
            $scope.Question = $scope.Questions[Math.floor(Math.random() * $scope.Questions.length)];
            $scope.RamdomQuizs.push($scope.Question);
        }

        return $scope.RamdomQuizs;
    }).then((question) => {
        $scope.nopBai = function () {
            var InputsAnswer = [];
            var diem = 0;
            var inputs = document.getElementsByClassName("form-check-input");
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].checked == true) {
                    InputsAnswer.push(inputs[i]);
                }
            }
            question.forEach(element => {
                for (let i = 0; i < InputsAnswer.length; i++) {
                    if (element.AnswerId == InputsAnswer[i].value) {
                        diem++;
                    }
                }
            });
            alert("điêm của bạn là : " + diem);
        }
    }).catch((err) => {
        console.log(err)
    });
    var time = document.getElementById("time-min");
    var minutes, seconds;
    minutes = 10;
    seconds = 1;
    setInterval(function () {
        if (minutes != 0) {
            seconds--;
            if (seconds == 0) {
                minutes--;
                seconds = 59;
            }
        } else {
            alert("Hết giờ làm bài")
        }
        time.innerHTML = minutes + ": " + seconds + " min";
    }, 1000);
    D
})
app.controller("AboutUsCtrl", function ($scope) {
    var btnPlay = document.getElementById("play");
    console.log(btnPlay)
    //Lấy phần tử video
    var video = document.getElementById("video");

    // lấy phần tử nút
    var nut = document.getElementById("myBtn");

    // thiết lập trạng thái video và nội dung hiển thị cho nút
    $scope.play = function () {
        if (video.paused) {
            video.play();
            btnPlay.innerHTML = '<i class="bi bi-play-fill"></i>';
        } else {
            video.pause();
            btnPlay.innerHTML = '<i class="bi bi-pause-fill"></i>';
        }
    }
})









