'use strict';

let projects = [];

function Project (rawDataObj) {
    this.title = rawDataObj.title;
    this.imgFilepath = rawDataObj.imgFilepath;
    this.description = rawDataObj.description;
}

Project.prototype.toHtml = function() {
    var templateFiller = Handlebars.compile($('#project-template').html());
    
    var filledTemplate = templateFiller(this);

    return filledTemplate;
}

rawData.forEach(function(projectObject){
    projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
});

// nav handler- toggles menu/cross in mobile & calls css .slide transition
$('#menu').on('click', function(event) {
    event.preventDefault();

    if ($(this).html() == 'menu') {
        $('#nav-ul').addClass('slide');
        $(this).html('cross');
    } else if ($(this).html() == 'cross') {
        $('#nav-ul').removeClass('slide');        
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