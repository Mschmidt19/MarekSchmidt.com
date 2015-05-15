'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {


        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= $('.homeContainer').height()) {
                $('.menuDiv').addClass('fixed');
            } else {
                $('.menuDiv').removeClass('fixed');
            }
        });

        $("#warSelector").hover(function(){
            $('#warDescriptionDiv').toggleClass('hidden');
        });

        $("#gameShopSelector").hover(function(){
            $('#gameShopDescriptionDiv').toggleClass('hidden');
        });


        $("#menuHomeButton").click(function(e){
            $('html, body').animate({
                scrollTop: $('.homeContainer').offset().top
            }, 'slow');
        });

        $("#menuAboutButton").click(function(e){
            $('html, body').animate({
                scrollTop: $('.aboutContainer').offset().top + 1
            }, 'slow');
        });

        $("#menuPortfolioButton").click(function(e){
            $('html, body').animate({
                scrollTop: $('.portfolioContainer').offset().top - $('.menuDiv').height() + 1
            }, 'slow');
        });

        $("#menuContactButton").click(function(e){
            $('html, body').animate({
                scrollTop: $('.contactContainer').offset().top - $('.menuDiv').height() + 1
            }, 'slow');
        });




    }]);





