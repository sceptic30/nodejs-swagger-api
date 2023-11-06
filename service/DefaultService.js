'use strict';

var DefaultService = {};

/**
 * Add a person to the database
 *
 * person PersonData 
 * returns Person
 **/
DefaultService.people = {};
DefaultService.people.add = function(person) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "blank": true,
      "bytes": [],
      "empty": true
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Get a list of all people
 *
 * returns People
 **/
DefaultService.people.list = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "blank": true,
      "bytes": [],
      "empty": true
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Delete this person
 *
 * uuid UUID 
 * no response value expected for this operation
 **/
DefaultService.person = {};
DefaultService.person.delete = function(uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Get information about one person
 *
 * uuid UUID 
 * returns Person
 **/
DefaultService.person.get = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "blank": true,
      "bytes": [],
      "empty": true
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Update information about one person
 *
 * uuid UUID 
 * person PersonData 
 * returns Person
 **/
DefaultService.person.update = function(uuid, person) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "blank": true,
      "bytes": [],
      "empty": true
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

module.exports = DefaultService;