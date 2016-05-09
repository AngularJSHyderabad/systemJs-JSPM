var dataLayerService = require('./dataLayerService.js');
var teachersController = function ($scope, dataLayerService) {
    $scope.teachers = dataLayerService.getTeachers();
};
module.exports = ['$scope', 'dataLayerService', teachersController ];