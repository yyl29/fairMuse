'use strict';

fairMuse.controller('AccountCtrl', ['Upload', '$timeout', '$location', function (Upload, $timeout, $location) {
  var $location = $location
  this.uploadSong = function(file) {
    file.upload = Upload.upload({
      url: 'http://localhost:3000/tracks',
      data: {
        track: {
          name: this.trackName, genre: this.genre, file: file
        }
      }
    });

    file.upload.then(function (response) {
      $timeout(function() {
        file.result = response.data;
        $location.path('/songs')
      });
    }, function(response) {
      if(response.status > 0)
        this.errorMsg = response.status + ': ' + response.data;
    }, function(evt) {
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total)); 
    });
  };
}]);