'use strict';

function Project (title, imgFilepath, description) {
    this.title = title;
    this.imgFilepath = imgFilepath;
    this.description = description;
}

Project.prototype.toHtml = function() {
    var $newArticle = $('article.template').clone();
}

$('#menu').on('click', function() {
    $(this).toggleClass('icon-cross')
})
