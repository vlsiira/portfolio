'use strict';

page('/projects', projectsController.body);
page('/skills', skillsController.body);
page('/about', aboutController.body);

page();

// history object to allow for use of back and forward buttons
// try w/o page function first - add #content to html
   // need to call page(projects) if it is that section, otherwise, back and forward not working for projects tab
$(function() {
    function loadContent(url) {
        if (href === "/projects") {
            page('/projects', projectsController.body);
        } else {
            $('#content').load(url + ' #tab-content');
        }
    }

    $('nava a').on('click', function(element) {
        element.preventDefault();
        let href = this.href;
        let $this = $(this);
        $('a').removeClass('tab-content');
        $this.addClass('tab-content');
        loadContent(href);
        history.pushState('', $this.text, href);
    })

    window.onpopstate = function() {
        let path = location.pathname;
        loadContent(path);
        let page = path.substring(location.pathname.lastIndexOf('/') + 1);
        $('a').removeClass('tab-content');
        $('[href="' + page + '"]').addClass('tab-content');
    };
});
