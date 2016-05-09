import globalFunction from './global.js';
import teachersController from './teachersController.js';
import studentsController from './studentsController.js';
import dataLayerService from './dataLayerService.js';
import angular from 'angular';
import 'angular-ui-grid';
import 'mystyles/base.css!';
import 'bootstrap/css/bootstrap.css!';
import 'angular-ui-grid/ui-grid.min.css!';
import './styles/font.less!';
import 'underscore';
console.log(globalFunction());
var app = angular.module('college.dashboard', ['ui.grid']);
app.controller('studentsController', studentsController)
   .controller('teachersController', teachersController)
   .service('dataLayerService', dataLayerService);