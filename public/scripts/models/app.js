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
        console.log('fetchAll called', callback);
        $.get('/projects')
        .then(
            results => {
                console.log('results:', results);
                Project.loadAll(results);
                callback();
            }
        )
    };

    module.Project = Project;
})(window);

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

// hides content on load
$(document).ready(function() {
    $('.tab-content').hide();
})