$(document).ready(function() {
    // Thibault start

    $(".btnFlexFlow").click(function() {
        var outils = $(this).attr("id");
        console.log(outils);
        if (outils === "containercolrev") {
            $("#TestFlexFlow").css('flex-direction', '');
        } else if (outils === "containercol") {
            $("#TestFlexFlow").css('flex-direction', 'column');
        } else if (outils === "row") {
            $("#TestFlexFlow").css('flex-direction', 'row');
        } else if (outils === "row-reverse") {
            $("#TestFlexFlow").css('flex-direction', 'row-reverse');
        } else if (outils === "wrap") {
            if (!($("#activeFF").is(':checked'))) {
                $("#TestFlexFlow").css('flex-direction', '');
            }
            $("#TestFlexFlow").css('flex-wrap', 'wrap');
        } else if (outils === "wraprev") {
            $("#TestFlexFlow").css('flex-wrap', 'wrap-reverse');
        } else if (outils === "nowrap") {
            $("#TestFlexFlow").css('flex-wrap', 'nowrap');
            // } else if(outils === "dirwrap"){
            //     $("#TestFlexFlow").css('flex-flow', 'column-reverse wrap');
        }
    });
});


// Thibault end
// Cyril début,

// Cyril Fin.


//