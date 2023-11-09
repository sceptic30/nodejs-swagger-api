'use strict';

var utils = require('../utils/writer.js');
var DefaultService = require('../service/DefaultService');
var { generateToken, verifyToken } = require('../utils/tokenUtils'); // Import token functions

module.exports = {
  people: {
    add: async function (req, res, next) {
      try {
        var person = req.swagger.params['person'].value;
        
        // Generate a token directly (you might want to include additional data in the token)
        const token = generateToken();
        person.token = token; // Add token to the person object

        const response = await DefaultService.people.add(person);
        utils.writeJson(res, response);
      } catch (errorResponse) {
        utils.writeJson(res, errorResponse);
      }
    },

    list: [verifyToken, async function (req, res, next) {
      try {
        const response = await DefaultService.people.list();
        utils.writeJson(res, response);
      } catch (errorResponse) {
        utils.writeJson(res, errorResponse);
      }
    }]
  },

  person: {
    delete: [verifyToken, async function (req, res, next) {
      try {
        var uuid = req.swagger.params['uuid'].value;
        const response = await DefaultService.person.delete(uuid);
        utils.writeJson(res, response);
      } catch (errorResponse) {
        utils.writeJson(res, errorResponse);
      }
    }],

    get: [verifyToken, async function (req, res, next) {
      try {
        var uuid = req.swagger.params['uuid'].value;
        const response = await DefaultService.person.get(uuid);
        utils.writeJson(res, response);
      } catch (errorResponse) {
        utils.writeJson(res, errorResponse);
      }
    }],

    update: [verifyToken, async function (req, res, next) {
      try {
        var uuid = req.swagger.params['uuid'].value;
        var person = req.swagger.params['person'].value;
        const response = await DefaultService.person.update(uuid, person);
        utils.writeJson(res, response);
      } catch (errorResponse) {
        utils.writeJson(res, errorResponse);
      }
    }]
  }
};