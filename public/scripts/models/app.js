'use strict';

(function(module) {
    function Project(rawDataObj) {
        Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
    }

    Project.all = [];

    Project.prototype.toHtml = function() {
        var templateFiller = Handlebars.compile($('#project-template').text());
        var filledTemplate = templateFiller(this);
        return filledTemplate;
    };

    Project.loadAll = sections => {
        Project.all = sections.map(ele => new Project(ele));
    };

    Project.fetchAll = callback => {
        $.get('/projects')
        .then(
            results => {
                Project.loadAll(results);
                callback();
            }
        )
    };

    module.Project = Project;
})(window);

// I think I don't need the code below anymore:
// let projects = [];

// function Project (rawDataObj) {
//     this.title = rawDataObj.title;
//     this.imgFilepath = rawDataObj.imgFilepath;
//     this.description = rawDataObj.description;
// }


// function renderProjects(){
//     projects.forEach(function(project) {
//     $('#projects').append(project.toHtml());
//     });
// };

// function runWhenDone (data) {
//     data.forEach(item => projects.push(new Project(item)));
//     if(!localStorage.projects) {
//         localStorage.setItem('projects', JSON.stringify(data));
//     }
//     renderProjects();
// }

// function runWhenFails (err) {
//     console.error('error', err);
// }

// check if data needs to be fetched
// if (!localStorage.projects) {
//     $.ajax({
//         type: 'GET',
//         url: 'projects.json',
//         success: runWhenDone,
//         error: runWhenFails
//     })
// } else {
//     var parsedData = JSON.parse(localStorage.projects);
//     runWhenDone(parsedData);
// }

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