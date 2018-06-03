'use strict';

let projects = [];

function Project (rawDataObj) {
    this.title = rawDataObj.title;
    this.imgFilepath = rawDataObj.imgFilepath;
    this.description = rawDataObj.description;
}

// imgFilepath showing in browser, instead of img- b/c .html? Tried .append, threw error
Project.prototype.toHtml = function() {
    var templateFiller = Handlebars.compile($('#project-template').html());
    
    var filledTemplate = templateFiller(this);

    return filledTemplate;
    // const $newArticle = $('article.template').clone();
    // $newArticle.removeClass('template');

    // $newArticle.find('img').attr('src', this.imgFilepath);
    // $newArticle.find('h3').text(this.title);
    // $newArticle.find('h4').text(this.description);

    // return $newArticle;
}

rawData.forEach(function(projectObject){
    projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
});

// nav handler- toggles menu/cross in mobile
$('#menu').on('click', function(event) {
    event.preventDefault();

    if ($(this).html() == 'menu') {
        $('#nav-ul').show();
        $('nav li').addClass('slide'); // I want it to trigger css transition when menu icon clicked, but doesn't work
        $(this).html('cross');
    } else if ($(this).html() == 'cross') {
        $('#nav-ul').hide();
        $('nav li').removeClass('slide');        
        $(this).html('menu');
    }
})

// nav handler- shows content when nav elements clicked
$('#nav-ul a').on('click', function() {
    let whereToGo = $(this).data('tab');

    $('.tab-content').hide();
    $('#' + whereToGo).show();
})

// hides content on load
$(document).ready(function() {
    $('.tab-content').hide();
})