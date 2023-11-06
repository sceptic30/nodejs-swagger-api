'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports = {
  people: {
    add: function(req, res, next) {
      var person = req.swagger.params['person'].value;
      Default.people.add(person)
        .then(function(response) {
          utils.writeJson(res, response);
        })
        .catch(function(errorResponse) {
          utils.writeJson(res, errorResponse);
        });
    },

    list: function(req, res, next) {
      Default.people.list()
        .then(function(response) {
          utils.writeJson(res, response);
        })
        .catch(function(response) {
          utils.writeJson(res, response);
        });
    }
  },

  person: {
    delete: function(req, res, next) {
      var uuid = req.swagger.params['uuid'].value;
      Default.person.delete(uuid)
        .then(function(response) {
          utils.writeJson(res, response);
        })
        .catch(function(response) {
          utils.writeJson(res, response);
        });
    },

    get: function(req, res, next) {
      var uuid = req.swagger.params['uuid'].value;
      Default.person.get(uuid)
        .then(function(response) {
          utils.writeJson(res, response);
        })
        .catch(function(response) {
          utils.writeJson(res, response);
        });
    },

    update: function(req, res, next) {
      var uuid = req.swagger.params['uuid'].value;
      var person = req.swagger.params['person'].value;
      Default.person.update(uuid, person)
        .then(function(response) {
          utils.writeJson(res, response);
        })
        .catch(function(response) {
          utils.writeJson(res, response);
        });
    }
  }
};