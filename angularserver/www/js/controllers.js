angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {



    $scope.zslesson = [

        {
            "videoId": 1,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.png",
            "Ispriority": "",
            "pro": "2/12"
        }, {
            "videoId": 12,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.png",
            "Ispriority": "",
            "pro": "2/12"
        }, {
            "videoId": 13,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.png",
            "Ispriority": "",
            "pro": "2/12"
        }, {
            "videoId": 14,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.png",
            "Ispriority": "",
            "pro": "2/12"
        }

    ];

    $scope.relesson = [{
        "videoId": 1,
        "videoName": "大鱼海棠全网首播",
        "videoPic": "images/banner1.jpg",
        "Ispriority": "",
        "pro": "2/12"
    }, {
        "videoId": 1,
        "videoName": "大鱼海棠全网首播",
        "videoPic": "images/banner1.jpg",
        "Ispriority": "",
        "pro": "2/12"
    }, {
        "videoId": 1,
        "videoName": "大鱼海棠全网首播",
        "videoPic": "images/banner1.jpg",
        "Ispriority": "",
        "pro": "2/12"
    }, {
        "videoId": 1,
        "videoName": "大鱼海棠全网首播",
        "videoPic": "images/banner1.jpg",
        "Ispriority": "",
        "pro": "2/12"
    }, ];

    $scope.sorts = [{
        "id": 1,
        "name": "全部",
        "pic": "images/cicle1.png"
    }, {
        "id": 2,
        "name": "语文",
        "pic": "images/cicle2.png"
    }, {
        "id": 3,
        "name": "数学",
        "pic": "images/cicle3.png"
    }, {
        "id": 4,
        "name": "映月",
        "pic": "images/cicle4.png"
    }, {
        "id": 5,
        "name": "映月",
        "pic": "images/cicle4.png"
    }, ];

    $scope.ads = [

        {
            "adId": 1,
            "adPic": "images/banner1.jpg"
        }, {
            "adId": 2,
            "adPic": "images/banner2.jpg"
        }, {
            "adId": 3,
            "adPic": "images/banner3.jpg"
        }, {
            "adId": 4,
            "adPic": "images/banner4.jpg"
        },
    ]

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

.controller('UsrCtrl', function($scope) {

})

.controller('SearchCtrl', function($scope, $stateParams) {

    $scope.video = [

        {
            "videoId": 1,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": "",
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233
        }, {
            "videoId": 2,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": "",
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233
        }, {
            "videoId": 3,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": "",
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233
        }, {
            "videoId": 4,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": "",
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233
        }, {
            "videoId": 5,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": "",
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233
        }, {
            "videoId": 6,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": "",
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233
        }, {
            "videoId": 7,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": "",
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233
        }, {
            "videoId": 8,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": "",
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233
        },
    ]

})

.controller('ContentCtrl', function($scope, $stateParams) {

    $scope.video = $stateParams;
    console.log($scope.video);
})
