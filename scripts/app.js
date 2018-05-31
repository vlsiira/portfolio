'use strict';

$.getJSON('projects.json').then(runWhenDone, runWhenFails);

function runWhenDone (data) {
    appendToDOM(data);

    localStorage.setItem('projects', JSON.stringify(data));
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
    appendToDOM(JSON.parse(localStorage.projects));
}

function appendToDOM (data) {
    data.forEach(function () {
        $('#result').append('<p>' + data + '</p>');
        console.log('data', data);
    });
}

// let projects = [];

// function Project (rawDataObj) {
//     this.title = rawDataObj.title;
//     this.imgFilepath = rawDataObj.imgFilepath;
//     this.description = rawDataObj.description;
// }

// Project.prototype.toHtml = function() {
//     var templateFiller = Handlebars.compile($('#project-template').html());
    
//     var filledTemplate = templateFiller(this);

//     return filledTemplate;
// }

// rawData.forEach(function(projectObject){
//     projects.push(new Project(projectObject));
// });

// projects.forEach(function(project) {
//     $('#projects').append(project.toHtml());
// });

// nav handler- toggles menu/cross in mobile
$('#menu').on('click', function(event) {
    event.preventDefault();

    if ($(this).html() == 'menu') {
        $('#nav-ul').show();
        $(this).html('cross');
    } else if ($(this).html() == 'cross') {
        $('#nav-ul').hide();
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