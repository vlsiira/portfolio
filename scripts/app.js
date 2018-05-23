'use strict';

let projects = [];

function Project (rawDataObj) {
    this.title = rawDataObj.title;
    this.imgFilepath = rawDataObj.imgFilepath;
    this.description = rawDataObj.description;
}

// imgFilepath showing in browser, instead of img- b/c .html?
Project.prototype.toHtml = function() {
    console.log('handlebars:', $('#project-template').html());
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
    $(this).toggleClass('icon-cross');
    if ($(this).hasClass ('icon-cross')) {
        $('#nav-ul').show();
    } else {
        $('#nav-ul').hide();
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