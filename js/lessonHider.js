angular.module('directivePractice').directive('lessonHider', function() {
	
	return {
		templateUrl: '/js/lessonHider.html',
		restrict: 'E',
		scope: {
			lesson: '=',
			dayAlert: '&',
			removeItem: '&',
		},
		link: function(scope, elem, attrs) {
			scope.elem = elem;
			scope.toggleStrike = function() {
				if (elem.css('text-decoration') === 'none' || elem.css('text-decoration') === '') {
					elem.css('text-decoration', 'line-through');
				} else {
					elem.css('text-decoration', 'none');
				}
			}

			scope.getSchedule.then(function(resp) {
				scope.schedule = resp.data;
				scope.schedule.forEach(function(scheduleDay) {
					if(scheduleDay.lesson === scope.lesson) {
						elem.css('text-decoration', 'line-through');
						scope.lessonDay = scheduleDay.weekday;
						return;
					}
				})
			})

		},
		controller: function($scope, lessonService) {

			$scope.getSchedule = lessonService.getSchedule();

		}	
	}

})