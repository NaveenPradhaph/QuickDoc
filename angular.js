var angular = angular.module('doctorApp', []);

angular.controller('MainController', function($scope) {
  $scope.doctors = [
    { name: 'Dr. Smith', specialization: 'Cardiologist' },
    { name: 'Dr. Johnson', specialization: 'Dermatologist' },
    { name: 'Dr. Lee', specialization: 'Neurologist' }
  ];

  $scope.loginData = {};
  $scope.signupData = {};
  $scope.users = [];
  $scope.isLoggedIn = false;

  $scope.login = function() {
    const user = $scope.users.find(u => u.username === $scope.loginData.username && u.password === $scope.loginData.password);
    if (user) {
      $scope.isLoggedIn = true;
    } else {
      alert("Invalid credentials");
    }
  };

  $scope.signup = function() {
    $scope.users.push({
      username: $scope.signupData.username,
      password: $scope.signupData.password
    });
    alert("Signup successful! You can now log in.");
    $scope.signupData = {};
  };

  $scope.logout = function() {
    $scope.isLoggedIn = false;
    $scope.loginData = {};
  };

  $scope.appointment = {};
  $scope.confirmation = null;

  $scope.bookAppointment = function() {
    if ($scope.appointmentForm && $scope.appointmentForm.$valid) {
      $scope.confirmation = angular.copy($scope.appointment);
      $scope.appointment = {};
      $scope.appointmentForm.$setPristine();
      $scope.appointmentForm.$setUntouched();
    } else {
      alert("Please complete the form correctly.");
    }
  };
});
