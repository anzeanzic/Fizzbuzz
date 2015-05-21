angular.module('Fizzbuzz', []);

angular.module('Fizzbuzz').controller('FizzbuzzController', function($scope) {

	$scope.fizzbuzz = function(number) {
		$scope.result = "";
		number = parseInt(number);

		if (number && number > 0) {
			for (var i = 1; i <= number; i++) {
				if ((i % 3 === 0) && (i % 5 === 0)) {
					$scope.result += " FizzBuzz";
				}
				else if (i % 3 === 0) {
					$scope.result += " Fizz";
				}
				else if (i % 5 === 0) {
					$scope.result += " Buzz";
				}
				else {
					$scope.result += " "+i;
				}
			}
		}
		else {
			$scope.result = "Enter a number ...";
		}
	}

});