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

function renderProjects(){
    projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
    });
};

function runWhenDone (data) {
    data.forEach(item => projects.push(new Project(item)));
    if(!localStorage.projects) {
        localStorage.setItem('projects', JSON.stringify(data));
    }
    renderProjects();
}

function runWhenFails (err) {
    console.error('error', err);
}

// check if data needs to be fetched
if (!localStorage.projects) {
    $.ajax({
        type: 'GET',
        url: 'projects.json',
        success: runWhenDone,
        error: runWhenFails
    })
} else {
    var parsedData = JSON.parse(localStorage.projects);
    runWhenDone(parsedData);
}

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