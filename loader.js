$(document).ready(function() {
    $.getScript("app.js", function() {
        console.log("App loaded!");

        $('#myApp').load("calc.html", function() {
            console.log("Calculator loaded!");
            initApp();
        });
    });
});
