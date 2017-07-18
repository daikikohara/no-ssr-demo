'use strict';

const whitelist = [
  'chrome',
  'crios', // chrome for ios
  'firefox',
  'fxios', // firefox for ios
  'googlebot', // since google bot can render javascript.
];

const isSupportedBrowser = (uas) => {
  if (uas && Array.isArray(uas) && uas.length > 0) {
    return uas.some(ua => whitelist.some(w => ua.value.toLowerCase().indexOf(w) !== -1));
  }
  return false;
};

exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const headers = request.headers;
  const ua = 'user-agent';

  if (!isSupportedBrowser(headers[ua])) {
    if (!request.uri || request.uri === '/' || request.uri.indexOf('index.html') !== -1) {
      request.uri = '/index.static.html';
    } else {
      request.uri += '.static.html';
    }
  }
  callback(null, request);
};
