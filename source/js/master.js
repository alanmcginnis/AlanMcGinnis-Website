$(function () {

    Handlebars.registerHelper("debug", function(optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);

        if (optionalValue) {
          console.log("Value");
          console.log("====================");
          console.log(optionalValue);
        }
    });

    $.getJSON( "data/resume.json" )
    .done(function( json ) {
        generateCareerHTML(json.careerOverview);
        generateExperiencesHTML(json.experiencesSection);
        generateSkillsHTML(json.skillsSection);
    })
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });

    function generateCareerHTML(data){
        var theScriptHTML = $('#career-template').html();
        var theTemplate = Handlebars.compile(theScriptHTML);
        var compiledData = theTemplate(data);
        $('.career-profile').append(compiledData);
    }

    function generateExperiencesHTML(data){
        var theScriptHTML = $('#experiences-template').html();
        var theTemplate = Handlebars.compile(theScriptHTML);
        var compiledData = theTemplate(data);
        $('.experiences-section').append(compiledData);
    }

    function generateSkillsHTML(data){
        var theScriptHTML = $('#skills-template').html();
        var theTemplate = Handlebars.compile(theScriptHTML);
        var compiledData = theTemplate(data);
        $('.skills-section').append(compiledData);
    }

});