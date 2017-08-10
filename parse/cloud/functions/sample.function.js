/**
 * A Cloud function sample
 */
Parse.Cloud.define('hello', function (request, response) {
    request.log.info('Cloud function Hello was called');
    response.success('Hi');
});
