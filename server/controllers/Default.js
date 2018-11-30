'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.todosGET = function todosGET (req, res, next) {
  var filter = req.swagger.params['filter'].value;
  Default.todosGET(filter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todosIdDELETE = function todosIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.todosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todosIdGET = function todosIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.todosIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todosIdPUT = function todosIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var todo = req.swagger.params['todo'].value;
  Default.todosIdPUT(id,todo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todosPOST = function todosPOST (req, res, next) {
  var todo = req.swagger.params['todo'].value;
  Default.todosPOST(todo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
