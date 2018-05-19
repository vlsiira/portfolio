'use strict';

let projects = [];

function Project (rawDataObj) {
    this.title = rawDataObj.title;
    this.imgFilepath = rawDataObj.imgFilepath;
    this.description = rawDataObj.description;
}

Project.prototype.toHtml = function() {
    const $newArticle = $('article.template').clone();
    $newArticle.removeClass('template');

    $newArticle.find('img').attr('src', this.imgFilepath);
    $newArticle.find('h3').text(this.title);
    $newArticle.find('h4').text(this.description);

    return $newArticle;
}

rawData.forEach(function(projectObject){
    projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
    $('#projects').append(project.toHtml());
});

$('#menu').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('icon-cross');
    if ($(this).hasClass ('icon-cross')) {
        $('#nav-ul').show();
    } else {
        $('#nav-ul').hide();
    }
})

// nav handler
$('#nav-ul a').on('click', function() {
    console.log(this);

    let whereToGo = $(this).data('tab');
    console.log('where:', whereToGo);
    $('.tab-content').hide();
    $('#' + whereToGo).show();
})