var ResponsePayload = function (code, payload) {
  this.code = code;
  this.payload = payload;
};

exports.respondWithCode = function (code, payload) {
  return new ResponsePayload(code, payload);
};

var writeJson = exports.writeJson = function (response, arg1, arg2) {
  var code = 200; // Default status code.
  var payload = {};

  if (arg1) {
    if (arg1 instanceof ResponsePayload) {
      code = arg1.code;
      payload = arg1.payload;
    } else if (Number.isInteger(arg1)) {
      code = arg1;
    } else if (typeof arg1 === 'object') {
      payload = arg1;
    }
  }

  if (arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }

  // Ensuring the responce code is a valid HTTP status code.
  if (code < 100 || code >= 600) {
    code = 500; // Internal Server Error as a fallback.
  }

  // Ensure the payload is indeed an object.
  if (typeof payload !== 'object') {
    payload = {
      message: 'Invalid Response Payload',
    };
  }

  payload = JSON.stringify(payload, null, 2);
  response.writeHead(code, { 'Content-Type': 'application/json' });
  response.end(payload);
};