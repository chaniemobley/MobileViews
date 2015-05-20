$(document).ready(function(){
    setBindings();
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