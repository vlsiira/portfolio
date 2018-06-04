'use strict';

const app = app || {}; // 12

(function(module) {

    const repos = {}; // 12

    repos.requestRepos = function (callback) {
        $.ajax({
            url: `https://api.github.com/user/repos`,
            type: 'GET',
            headers: {'Authorization': `token ${githubToken}`}
        })
        .then(data => repos.all = data, err => console.error(err))
        .then(callback);
    }

    module.repos = repos;
})(app);

    // function Project(rawDataObj) {
    //     Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
    // }

    // Project.all = [];

    // Project.prototype.toHtml = function() {
    //     var templateFiller = Handlebars.compile($('#project-template').text());
    //     var filledTemplate = templateFiller(this);
    //     return filledTemplate;
    // };

    // Project.loadAll = sections => {
    //     Project.all = sections.map(ele => new Project(ele));
    // };

    // Project.fetchAll = callback => {
    //     $.get('/projects')
    //     .then(
    //         results => {
    //             Project.loadAll(results);
    //             callback();
    //         }
    //     )
    // };

//     module.Project = Project;
// })(window);

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