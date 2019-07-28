var app = angular
            .module("myModule",[])
            .controller("myController",function($scope){
                var employees = [
                    {name:"Adam",age:"25"},
                    {name:"Robert",age:"20"}
                ];
                $scope.employees = employees;
            })
            .controller("register",function($scope,$http,$window){
                $scope.registerEmail = function(){
                    console.log($scope.email);
                    console.log($scope.password)
                    var data = {
                        email:$scope.email,
                        password:$scope.password
                    }
                    $http({
                        url:'http://localhost:3000/api/rxdawai/angu',
                        method:'POST',
                        data: data
                    }).then((res)=>{
                        console.log(res)
                        if(res.data.status==1){
                            localStorage.setItem("id",1)
                            $window.location.href="user.html"
                        }
                    })
                };

                $scope.registerCustomer = function(){
                    if($scope.password == $scope.confirmPassword){
                        var data = {
                            email:$scope.email,
                            password:$scope.password,
                            firstName: $scope.firstName,
                            lastName: $scope.lastName,
                            mobileNumber: $scope.mobileNumber
                        }
                        $scope.message = ''
                        $scope.responseMessage = ''
                        $http({
                            url:'http://localhost:3000/rxdawaiNew/customer/addNew',
                            method:'POST',
                            data: data
                        }).then((res)=>{
                            console.log(res)
                            if(res.data.status==1){
                                localStorage.setItem("name",res.data.firstName)
                                $scope.email='';
                                $scope.password='';
                                $scope.firstName='';
                                $scope.lastName='';
                                $scope.mobileNumber='';
                                $scope.confirmPassword='';
                                $scope.responseMessage = res.data.message
                            }else{
                                $scope.responseMessage = res.data.message
                            }
                        })
                    }else{
                        $scope.message = 'Password Mismatch'
                    }
                    
                };
            })
            .controller("getUser",function($scope,$http){
                $scope.sndphase=true;
                $http.get('http://localhost:3000/api/rxdawai/allPrescription').then((res)=>{
                    console.log(res)
                    $scope.customers = res.data.data
                    // console.log($scope)
                    console.log($scope.customers)
                });
                $scope.changeIt = function(){
                    $scope.sndphase=!$scope.sndphase;
                }
            })
            .controller("loginCustomer", function ($scope, $http) {
                $scope.loginCustomer = function () {
                    var data = {
                        email: $scope.email,
                        password: $scope.password,
                    }
                    $scope.responseMessage = ''
                    $http({
                        url: 'http://localhost:3000/rxdawaiNew/customer/login',
                        method: 'POST',
                        data: data
                    }).then((res) => {
                        console.log(res)
                        if (res.data.status == 1) {
                            localStorage.setItem("name", res.data.firstName)
                            $scope.email = '';
                            $scope.password = '';
                            $scope.responseMessage = res.data.message
                        } else {
                            $scope.responseMessage = res.data.message
                        }
                    })
                }
                $scope.forgotPassword = function (){
                    var data = {
                        email: $scope.email
                    }
                    $scope.responseMessage = ''
                    $http({
                        url: 'http://localhost:3000/rxdawaiNew/customer/login',
                        method: 'POST',
                        data: data
                    }).then((res) => {
                        console.log(res)
                        if (res.data.status == 1) {
                            localStorage.setItem("name", res.data.firstName)
                            $scope.email = '';
                            $scope.password = '';
                            $scope.responseMessage = res.data.message
                        } else {
                            $scope.responseMessage = res.data.message
                        }
                    })
                }
            })
        
            