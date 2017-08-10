/**
 * A Job sample
 */
Parse.Cloud.job("sampleJob", function (request, status) {
    status.message("I just started");
    setTimeout(function(){
        console.log("I just finished");
        status.success("I just finished");
    }, 4000);
});