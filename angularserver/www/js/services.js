angular.module('starter.services', [])

.factory('video', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var video = [

        {
            videoId: 1,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.png",
            "Ispriority": 1,
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233,
            type: "zslesson"
        }, {
            videoId: 12,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.png",
            "Ispriority": 0,
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233,
            type: "zslesson"
        }, {
            videoId: 13,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.png",
            "Ispriority": 0,
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233,
            type: "zslesson"
        }, {
            videoId: 14,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.png",
            "Ispriority": 0,
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233,
            type: "zslesson"
        }, {
            videoId: 14,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": 0,
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233,
            type: "relesson"
        }, {
            videoId: 14,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": 0,
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233,
            type: "relesson"
        }, {
            videoId: 14,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": 0,
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233,
            type: "relesson"
        }, {
            videoId: 14,
            "videoName": "大鱼海棠全网首播",
            "videoPic": "images/banner1.jpg",
            "Ispriority": 0,
            "pro": "2/12",
            "price": 0,
            "ctime": "2016-07-02",
            "status": 1,
            "sign": 233,
            type: "relesson"
        }

    ];

    return {
        all: function() {
            return video;
        },
        getVideo: function(videoId) {
            for (var i = 0; i < video.length; i++) {
                if (video[i].videoId === parseInt(videoId)) {
                    return video[i];
                }
            }
            return null;
        },
        getTYPE: function(type) {

            var newVideo = [];
            for (var i = 0; i < video.length; i++) {
                if (video[i].type === type) {
                    newVideo.push(video[i]);
                }
            }
            return newVideo;

        },

        getpriority: function(type) {

            var priority = null;
            for (var i = 0; i < video.length; i++) {
                if (video[i].type === type&&video[i].Ispriority==1) {

                    return video[i];

                }
            }

            return null;

        }

    };
})


.factory('ad', function() {

    var ad = [

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
    ];
    return {
        all: function() {
            return ad;
        },
        getAd: function(adId) {
            for (var i = 0; i < ad.length; i++) {
                if (ad[i].adId === parseInt(adId)) {
                    return ad[i];
                }
            }
            return null;
        },
    };
})


.factory('sorts', function() {

    var sorts = [{
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
    return {
        all: function() {
            return sorts;
        },
        getsorts: function(adId) {
            for (var i = 0; i < sorts.length; i++) {
                if (sorts[i].id === parseInt(id)) {
                    return sorts[i];
                }
            }
            return null;
        },
    };
});
