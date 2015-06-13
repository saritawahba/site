myApp.controller("Firebase_cntrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
  	var entriesURL = new Firebase("https://vendedy.firebaseio.com/entries"),
  		travlersURL = new Firebase("https://vendedy.firebaseio.com/travelers"),
  		vendorsURL = new Firebase("https://vendedy.firebaseio.com/vendors");

    $scope.entries = $firebaseArray(entriesURL);
    $scope.travelers = $firebaseArray(travlersURL);
    
    $scope.addEntry = function() {
        $scope.entries.$add({
          text: "bob"
        });
    };
    // create a JSON Object
    $scope.addTraveler = function(user) {
    	console.log(user);
        $scope.travelers.$add(user);
    };

  }
]);