'use strict';

angular.module('app')
  .controller('DemoCtrl', function($scope, $rootScope, $timeout) {

    // Move Function Section
    $scope.movePrev = function() {
      $.fn.fullpage.moveSlideLeft();
    };

    $scope.moveNext = function() {
      $.fn.fullpage.moveSlideRight();
    };

    $scope.timeline = anime.timeline({
      direction: 'alternate',
      loop: true,
      autoplay: true
    })

  });
