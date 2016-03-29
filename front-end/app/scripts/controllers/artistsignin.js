angular.module('fairMuseApp')
.controller('ArtistSigninCtrl', function(authenticationService, flash, $location) {
  var self = this
  var user, email, password, authenticationService, response, location;
  location = $location
  self.email = "";
  self.password = "";

  self.sendForm = function(email, password) {
    self.user = {email: self.email,
      password: self.password}
      var promise = authenticationService.artistLogin(self.user);
      promise.then(success, error);
    };

    var success = function(response){
      localStorage.setItem('auth_token', response.data.auth_token);
      location.path('/songs')
    };

    var error = function(response) {
      flash('Wrong Login Credentials!');
    };
  });
