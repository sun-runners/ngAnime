(function(angular) {
  angular.module('ngAnime', ['ng'])
    .directive("ngAnime", function($rootScope) {
      return {
        link: function(scope, element, attrs) {

          // Set Function Section
          scope.setAnime = function() {
            if (!scope.option) return;
            scope.option.targets = element[0];
            var animeInstance = anime(scope.option);
            if (attrs.ngAnimeInstance) scope.instance = animeInstance;
          };

          // Initialize Function Section
          scope.initialize = function() {
            scope.setAnime();
          };

          scope.initialize();
        },
        scope: {
          option:"=ngAnimeOption",
          instance:"=ngAnimeInstance"
        },
        replace: true,
        restrict: "A"
      };
    });
})(angular);
