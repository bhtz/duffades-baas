Parse.Cloud.beforeSave("_User", function (request, response) {
    // check dirty keys / set properties / etc ...
    response.success();
});