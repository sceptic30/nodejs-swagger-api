'use strict';
const pool = require('../utils/database');
var DefaultService = {};

/**
 * Add a person to the database
 *
 * person PersonData 
 * returns Person
 **/
DefaultService.people = {};
DefaultService.people.add = function (person) {
  return new Promise(async function (resolve, reject) {
    try {
      const result = await pool.query(
        'INSERT INTO people (name, age) VALUES ($1, $2) RETURNING *',
        [person.name, person.age]
      );

      resolve(result.rows[0]);
    } catch (error) {
      reject({ error: 'Database error' });
    }
  });
};

/**
 * Get a list of all people
 *
 * returns People
 **/
DefaultService.people.list = function () {
  return new Promise(async function (resolve, reject) {
    try {
      const result = await pool.query('SELECT * FROM people');
      resolve(result.rows);
    } catch (error) {
      reject({ error: 'Database error' });
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
DefaultService.person.delete = function (uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      const result = await pool.query('DELETE FROM people WHERE uuid = $1', [uuid]);
      resolve({ message: 'Person deleted successfully' });
    } catch (error) {
      reject({ error: 'Database error' });
    }
  });
};

/**
 * Get information about one person
 *
 * uuid UUID 
 * returns Person
 **/
DefaultService.person.get = function (uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      const result = await pool.query('SELECT * FROM people WHERE uuid = $1', [uuid]);
      resolve(result.rows[0]);
    } catch (error) {
      reject({ error: 'Database error' });
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
DefaultService.person.update = function (uuid, person) {
  return new Promise(async function (resolve, reject) {
    try {
      const result = await pool.query(
        'UPDATE people SET name = $1, age = $2 WHERE uuid = $3 RETURNING *',
        [person.name, person.age, uuid]
      );

      resolve(result.rows[0]);
    } catch (error) {
      reject({ error: 'Database error' });
    }
  });
};

module.exports = DefaultService;