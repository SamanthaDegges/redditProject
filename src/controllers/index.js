'use strict';

angular.module('reddit') //referring to it, not making a new one hence no brackets.
.controller('IndexCtrl', function($scope){
  console.log("IndexCtrl works.");
});

var post = {
  title: 'Hello World.',
  author: 'Cade',
  subreddit: 'general',
  createdAt: Date.now(),
  score: 1,
  content: 'http://goo.gl/OTVOBa',
  comments: []
}

$scope.posts = [post, post, post];
});
