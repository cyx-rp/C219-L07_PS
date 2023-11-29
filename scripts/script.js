$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();

    // $("#profile").css( {
    //     "outline": "3px solid greenyellow",
    //     "outline-offset": "2px"});

    $('#profile').attr('stroke', 'greenyellow'); // Border color
    $('#profile').attr('stroke-width', '2'); // Border width
    $('#profile').attr('stroke-opacity', '1'); // Border opacity

    $("#profile").click(function() {
        $(this).css("border", "3px solid grey");
    });
});