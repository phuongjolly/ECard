/**
 * Created by phuongjolly on 12/20/15.
 */


var application = angular.module("ECardApp", []);

application.controller("ECardController", function($scope) {
    $scope.stickers = [];
    for (var i = 0; i < 8; i++) {
        $scope.stickers.push({
            image: "Images/art" + i + ".png"
        });
    }

    $scope.selectBackground = function(background){
        $scope.message = "Selecting background";
        $scope.image = background.image;
    }

    $scope.newyearBGs = [];
    for(var i = 0; i < 17; i++) {
        $scope.newyearBGs.push({
            image: "Images/newyear" + i + ".jpg"
        });
    }
});