'use strict';

app.controller('formUser', function ($scope) {
    let easterEgg = document.getElementById("easter-egg");

    $scope.sendForm = function () {
        console.log("$scope.userInfo: ", $scope.userInfo);
        easterEgg.classList.add("show");
    };
});