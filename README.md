ngAnime
=======

ngAnime is an angularjs library that creates animation with anime.js

<br/>

DEMO
-------
https://kimsunwook.github.io/ngAnime

(anime.js: https://github.com/juliangarnier/anime/)

<br/>

INSTALL
-------

```
bower install ngAnime --save
```

<br/>

Quick start
-------

Copy-paste the stylesheet ```<script>``` into your ```<body>```.

```
<script src=".bower_components/animejs/anime.js"></script>
<script src=".bower_components/ng-anime/ngAnime.js"></script>
```
or
```
<script src=".bower_components/animejs/anime.min.js"></script>
<script src=".bower_components/ng-anime/ngAnime.min.js"></script>
```
or
```
<script src=".bower_components/animejs/anime.js"></script>
<script src="https://cdn.rawgit.com/KimSunWook/ngAnime/v1.0.2/ngAnime.js"></script>
```
or
```
<script src=".bower_components/animejs/anime.min.js"></script>
<script src="https://cdn.rawgit.com/KimSunWook/ngAnime/v1.0.2/ngAnime.min.js"></script>
```

<br/>

USAGE
-----

Make sure you include the module 'ngAnime' in your application config

app.js

```
angular.module('myApp', [
  'ngAnime',
  ...
]);
```

view.html

```
<div ng-anime
  ng-anime-option="{
    autoplay: true // autoplay:boolean, default:true
    direction: 'alternate', // direction: 'normal','reverse','alternate', default:'normal'
    translateX: 100, // Add 'px' by default (from 0px to 100px)
    rotate: '1turn', // Use 'turn' as unit (from 0turn to 1turn)
    scale: '*=2', // Multiply the current scale value by 2 (from 1 to (1 * 2))
    backgroundColor: '#FFF', // Animate the background color to #FFF (from 'rgb(0,0,0)' to 'rgb(255,255,255)')
    loop: true, // loop: number, boolean, default: false
    duration:1500, // duration: number(ms), default: 1000
    delay: 0
    easing: 'easeInOutQuad' // easeing: https://github.com/juliangarnier/anime#easing-functions
  }">
</div>
```

<br/>

Of course you can use the animation timeline very easily!

ctrl.js

```
angular.module('app')
  .controller('Ctrl', function($scope) {

    $scope.timeline = anime.timeline({
      length: 5, // timeline starts when five animations are added.
      direction: 'alternate', // direction: 'normal','reverse','alternate', default:'normal'
      loop: true, // loop: number, boolean, default: false
      autoplay: true // autoplay: boolean, default: true
    });

  });
```

view.html

```
<div ng-anime="timeline" ng-anime-option="{
  order: x_index, // order:integer, define animation order of timeline, small value first start
  direction: 'alternate',
  translateY: [-150, 150]
}" ng-repeat="(x_index, x) in [1,2,3,4,5]"></div>
```

<br/>

Easy!
