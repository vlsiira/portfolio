'use strict';

page('/projects', projectsController.body);
page('/skills', skillsController.body);
page('/about', aboutController.body);

page();

// history object to allow for use of back and forward buttons
// TODO: refactor to remove console errors (lines 15 & 36)
$(function() {
    function loadContent(url) {
        // need to call page function for projects, b/c data loaded from JSON
           // console error: Uncaught ReferenceError href not defined here
        if (href === "/projects") {
            page('/projects', projectsController.body);
        // otherwise, can use load function, b/c data from html
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
        // console error: Uncaught ReferenceError href not defined here
        loadContent(path);
        let page = path.substring(location.pathname.lastIndexOf('/') + 1);
        $('a').removeClass('tab-content');
        $('[href="' + page + '"]').addClass('tab-content');
    };
});
