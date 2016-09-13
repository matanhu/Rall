/**
 * Created by MatanHuja on 13.9.2016.
 */

app.directive('mhVideoModelDirective', function(){
   return{
       restrict: 'E',
       scope : {
           movieUrl: "@",
           movieImg: "@"
       },
       template:'<img class="w3-circle w3-hover-opacity" ng-src="{{movieImg | trusted}}" style="width:100%; cursor:pointer" ng-click="displayFunc()">'+
                '<div class="w3-modal" style="display: block;" ng-show="showMe">'+
                '<div class="w3-modal-content w3-black">'+
                '<header class="w3-container">'+
                '<span ng-click="displayFunc()" class="w3-closebtn">&times;</span>'+
                '</header>'+
                '<div class="w3-container" style="margin-bottom: 10px;">'+
                '<iframe width="640" height="360" ng-src="{{movieUrl | trusted}}" frameborder="0" allowfullscreen></iframe>'+
                '</div>'+
                '</div>'+
                '</div>',
       link: function(scope){
           scope.showMe = false;
           scope.displayFunc = function() {
                   scope.showMe = !scope.showMe;
           }
       }
   }
});

app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);