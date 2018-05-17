'use strict';

function Project (title, imgFilepath, description) {
    this.title = title;
    this.imgFilepath = imgFilepath;
    this.description = description;
}

Project.prototype.toHtml = function() {
    var $newArticle = $('article.template').clone();
}

$('#menu').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('icon-cross');
    if ($(this).hasClass ('icon-cross')) {
        $('ul').show();
    } else {
        $('ul').hide();
    }
})

// hideNav = function() {
//     $('#menu').on
// }