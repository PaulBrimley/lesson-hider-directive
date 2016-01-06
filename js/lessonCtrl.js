angular.module('directivePractice').controller('lessonCtrl', function($scope) {
	$scope.toggle = true;
	$scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo']

	$scope.announceDay = function(lesson, day) {
		if (day !== undefined) {
			alert(lesson + ' is active on ' + day);	
		} else {
			alert(lesson + ' is not scheduled');
		}
	}

	$scope.removeItem = function(lesson) {
		for (var i = 0; i < $scope.lessons.length; i++) {
			if ($scope.lessons[i] === lesson) {
				$scope.lessons.splice(i, 1);
			}
		}
	}

})