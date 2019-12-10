(function(){
	'use strict';

	angular.module('UserValidationDemo',[])
	.controller('userRegistrationController',userRegistrationController);

	function userRegistrationController(){
		var $ctrl=this;
		$ctrl.user=[];
		$ctrl.user.username='';
		$ctrl.user.email='';
		$ctrl.user.phonenum='';
		$ctrl.completed=false;

		$ctrl.onSubmit=function(){
			// $ctrl.user.username=name;
			// $ctrl.user.email=email;
			// $ctrl.user.phonenum=pNum;
			$ctrl.completed=true;
		}

	}

})();