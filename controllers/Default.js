'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.people.add = function people.add(req, res, next) {
  var person = req.swagger.params['person'].value;
  Default.people.add(person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (errorResponse) {
      utils.writeJson(res, errorResponse);
    });
};




module.exports.people.list = function people.list(req, res, next); {
  Default.people.list()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.person.delete = function person.delete(req, res, next); {
  var uuid = req.swagger.params['uuid'].value;
  Default.person.delete(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.person.get = function person.get(req, res, next); {
  var uuid = req.swagger.params['uuid'].value;
  Default.person.get(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.person.update = function person.update (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  var person = req.swagger.params['person'].value;
  Default.person.update(uuid,person)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
