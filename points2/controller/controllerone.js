app.controller("Ctr",function($scope,$http){
	$scope.swi= new Swiper(".swiper-container",{
		autoplay:1000,
		loop:true
	})
	$http({
		method:"get",
		url:"http://127.0.0.1:9888"
	}).success(function (res) {
        $scope.data = res.arr
        $scope.two = res.two_as
    })
	
})

