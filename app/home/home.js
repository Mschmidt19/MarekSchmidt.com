'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

}]);



 /*   var menu = $('.menuDiv');

    if (menu.length) {
        var contentMenu = menu.offset().top;

        $(window).scroll(function () {                  // assign scroll event listener

            var currentScroll = $(window).scrollTop(); // get current position

            if (currentScroll >= contentMenu) {           // apply position: fixed if you
                alert("top");
                $('.menuDiv').css({                      // scroll to that element or below it
                    position: 'fixed',
                    top: '0',
                });
            } else {                                   // apply position: static
                $('.menuDiv').css({                      // if you scroll above it
                    position: 'absolute'
                });
            }

        });
    }
*/

$(window).on('scroll', function () {
    if ($(window).scrollTop() >= $('.homeContainer').height()) {
        $('.menuDiv').addClass('fixed');
    } else {
        $('.menuDiv').removeClass('fixed');
    }
});