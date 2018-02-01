ngAnime
=======

ngAnime is an angularjs library that creates countdown and countup with flipclock.js

<br/>

DEMO
-------
https://kimsunwook.github.io/ngAnime

(flipclock.js: https://github.com/objectivehtml/FlipClock)

<br/>

INSTALL
-------

```
bower install ngAnime --save
```

<br/>

Quick start
-------

Copy-paste the stylesheet <script> into your <body>.

```
<script src=".bower_components/ng-anime/ngAnime.js"></script>
```
or
```
<script src=".bower_components/ng-anime/ngAnime.min.js"></script>
```
or
```
<script src="https://raw.githubusercontent.com/KimSunWook/ngAnime/master/ngAnime.js"></script>
```
or
```
<script src="https://raw.githubusercontent.com/KimSunWook/ngAnime/master/ngAnime.min.js"></script>
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

Easy!