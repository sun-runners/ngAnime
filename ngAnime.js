(function(angular) {
  angular.module('ngAnime', ['ng'])
    .directive("ngAnime", function($rootScope, $timeout) {
      return {
        link: function(scope, element, attrs) {

          // Set Function Section
          scope.setAnime = function() {
            if (!scope.option) return;
            scope.option.targets = element[0];
            if (scope.ngAnime){

              // Total timeline length exist
              if(scope.ngAnime.length){

                if(!Array.isArray(scope.ngAnime.animes)) scope.ngAnime.animes = [];
                scope.ngAnime.animes.push( scope.option );
                scope.ngAnime.animes.sort(function(a, b){
                  return a.order-b.order;
                });

                if(scope.ngAnime.animes.length==scope.ngAnime.length){
                  for( var i=0; i<scope.ngAnime.animes.length; i++ ){
                    scope.ngAnime.add( scope.ngAnime.animes[i] );
                  }
                }
              }
              // Total timeline length non-exist
              else{
                scope.ngAnime.add( scope.option );
              }
            }
            else{
              var animeInstance = anime(scope.option);
              if (attrs.ngAnimeInstance) scope.instance = animeInstance;
            }
          };

          // Initialize Function Section
          scope.initialize = function() {
            scope.setAnime();
          };

          scope.initialize();
        },
        scope: {
          ngAnime:"=ngAnime",
          option:"=ngAnimeOption",
          instance:"=ngAnimeInstance"
        },
        replace: true,
        restrict: "A"
      };
    });
})(angular);
