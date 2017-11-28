'use strict';

var Groups = require('./Groups');
var Projects = require('./Projects');
var Issues = require('./Issues');
var Users = require('./Users');
var Labels = require('./Labels');
var Runners = require('./Runners');

module.exports = { Groups: Groups, Projects: Projects, Runners: Runners, Issues: Issues, Users: Users, Labels: Labels };