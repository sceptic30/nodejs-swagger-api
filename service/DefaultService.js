'use strict';


/**
 * Add a person to the database
 *
 * person PersonData 
 * returns Person
 **/
exports.people.add = function(person) {
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
}


/**
 * Get a list of all people
 *
 * returns People
 **/
exports.people.list = function() {
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
}


/**
 * Delete this person
 *
 * uuid UUID 
 * no response value expected for this operation
 **/
exports.person.delete = function(uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get information about one person
 *
 * uuid UUID 
 * returns Person
 **/
exports.person.get = function(uuid) {
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
}


/**
 * Update information about one person
 *
 * uuid UUID 
 * person PersonData 
 * returns Person
 **/
exports.person.update = function(uuid,person) {
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
}

