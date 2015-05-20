$(document).ready(function(){
    setBindings();
    $(".vibrate").click(function(e){
        //this sets a pattern for vibration
//        navigator.vibrate([1000, 1000, 5000, 1000]);
        navigator.vibrate(3000);
    });
    $(".motion").click(function(e){
        function onSuccess(acceleration) {
            var info = 'Acceleration X: ' + acceleration.x + '\n' +
                'Acceleration Y: ' + acceleration.y + '\n' +
                'Acceleration Z: ' + acceleration.z + '\n' +
                'Timestamp: '      + acceleration.timestamp + '\n';
            $(".feedback").html(info);
        }

        function onError() {
            $('.feedback').html("It didn't work");
        }
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    })

});
function setBindings(){
    var currentView = "homeView";
    var nextView;
    $("i").click(function(event){
        nextView = event.currentTarget.id + "View";
        console.log(nextView);
        if (currentView != nextView){
            $("#" + nextView).css("z-index", "2");
            $("#" + currentView).css("z-index", "1");

            $("#" + currentView).animate({
                left: "100%"
            }, 1000, function() {
                currentView = nextView;
            });
            $( "#" + nextView).animate({
                left: "0"
            }, 1000, function() {
                // Animation complete.
            });
        }
    })
}