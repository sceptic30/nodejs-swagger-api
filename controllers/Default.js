'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
var { generateToken, verifyToken } = require('../utils/tokenUtils'); // Import token functions

module.exports = {
  people: {
    add: async function (req, res, next) {
      try {
        var person = req.swagger.params['person'].value;
        // Assuming user authentication is successful
        const user = { id: 123, username: 'exampleUser' }; // Replace with actual user data
        const token = generateToken(user);
        person.token = token; // Add token to the person object

        const response = await Default.people.add(person);
        utils.writeJson(res, response);
      } catch (errorResponse) {
        utils.writeJson(res, errorResponse);
      }
    },

    list: [verifyToken, async function (req, res, next) {
      try {
        const response = await Default.people.list();
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
        const response = await Default.person.delete(uuid);
        utils.writeJson(res, response);
      } catch (errorResponse) {
        utils.writeJson(res, errorResponse);
      }
    }],

    get: [verifyToken, async function (req, res, next) {
      try {
        var uuid = req.swagger.params['uuid'].value;
        const response = await Default.person.get(uuid);
        utils.writeJson(res, response);
      } catch (errorResponse) {
        utils.writeJson(res, errorResponse);
      }
    }],

    update: [verifyToken, async function (req, res, next) {
      try {
        var uuid = req.swagger.params['uuid'].value;
        var person = req.swagger.params['person'].value;
        const response = await Default.person.update(uuid, person);
        utils.writeJson(res, response);
      } catch (errorResponse) {
        utils.writeJson(res, errorResponse);
      }
    }]
  }
};