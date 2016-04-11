'use strict';

angular.module('fairMuseApp')
  .controller('SignupCtrl', function(signupService, flash, $location) {
    var self = this;
    var location;
    location = $location;

    self.sendForm = function() {
      self.userInfo = {email: self.email,
                       password: self.password,
                       password_confirmation: self.password_confirmation,
                       name: self.username
                     };
      if(self.user){var promise = signupService.signup(self.userInfo);
      promise.then(success, error);
      location.path('/subscribe');
    }else{
      var promise = signupService.artistSignup(self.userInfo);
     promise.then(success, error);
     location.path('/artistaccount');
    }

    };
    var success = function(response){
    localStorage.setItem('auth_token', response.data.auth_token);
    localStorage.setItem('artist_id', response.data.artist_id);
    localStorage.setItem('user_id', response.data.user_id);
    localStorage.setItem('is_artist', response.data.is_artist);
    localStorage.setItem('is_user', response.data.is_user);
    localStorage.setItem('name', response.data.name);
    localStorage.setItem('bannana', response.data.bannana)
    };

      var error = function(response) {
        flash(response.data.messages);
     };

});
