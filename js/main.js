$(function  () {

    var theTemplateScript = $("#top-template").html(); 

    var theTemplate = Handlebars.compile (theTemplateScript); 
    $(".top-word").append (theTemplate(winner)); 
});

$(function  () {

    var tableTemplateScript = $("#table-template").html(); 

    var tableTemplate = Handlebars.compile (tableTemplateScript); 
    $(".table-word").append (tableTemplate(past)); 
});
