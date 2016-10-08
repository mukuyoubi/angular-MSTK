angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,video,ad,sorts) {


    $scope.zspriority = video.getpriority("zslesson");
    $scope.repriority = video.getpriority("relesson");
    $scope.zslesson = video.getTYPE("zslesson");
    $scope.relesson = video.getTYPE("relesson");
    $scope.sorts = sorts.all();
    $scope.ads = ad.all();

    var Swiper1 = new Swiper('#swiper-container1', {
        direction: 'horizontal',
        loop: true,
        autoplay: 1000,
        pagination: '.swiper-pagination',
        observer: true
    })
    var Swiper2 = new Swiper('#swiper-container2', {
        slidesPerView: 4,
        freeMode:true,
        observer: true
    })
    Swiper1.params.control = Swiper1;
    Swiper2.params.control = Swiper2;

})

.controller('UsrCtrl', function($scope,userInfo) {

        $scope.userInfo=userInfo.getuser();
        console.log($scope.userInfo);
        $scope.mySign=userInfo.getSign_num();
        $scope.myBuy=userInfo.getBought_num();

})

.controller('SearchCtrl', function($scope, $stateParams,video) {

    $scope.video = video.all();

})

.controller('ContentCtrl', function($scope, $stateParams,video, videolist) {

    
    $scope.video = video.getVideo($stateParams.videoId);
    $scope.videolist = videolist.getlist($stateParams.videoId);
    console.log(video.getVideo($stateParams.videoId));
    console.log($scope.videolist);
})


.controller('viewController', function($scope) {

        var view = this,
        nameArray = ["list", "detail"],
        indexCurrent = 0;
        $scope.isOn = false;

        view.next = next;
        view.current = nameArray[indexCurrent];

        function next(){
            indexCurrent = (indexCurrent + 1) % nameArray.length;
            view.current = nameArray[indexCurrent];
            if(indexCurrent==1){
                $scope.isOn=true;
            }
            if(indexCurrent==0){
                $scope.isOn=false;
            }
        }
})