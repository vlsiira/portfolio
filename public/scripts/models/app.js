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

    // TODO - what is .loadAll?  .load is a jQ method, but I can't find .loadAll
    Project.loadAll = sections => {
        Project.all = sections.map(ele => new Project(ele));
    };

    // TODO - what is .fetchAll?  .fetch is an API method, but I'm not using an API here
    Project.fetchAll = callback => {
        $.get('/projects')
        .then(
            results => {
                Project.loadAll(results);
                // TODO - fix warning
                callback(); // warning TypeError: callback is not a function
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