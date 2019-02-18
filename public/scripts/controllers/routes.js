'use strict';

page('/projects', projectsController.body);
page('/skills', skillsController.body);
page('/about', aboutController.body);

page();

// history object to allow for use of back and forward buttons
// TODO: prevent 404 - I think back button is somehow allowed beyond the # of times it should be (user hasn't clicked new links that much, and back button should be non-clickable)
$(function() {
    function loadContent(url) {
        // GET 404 errors for skills and about sections - only if use back button too many times
        // call page function for all parts of page; eliminates console errors, but 404 above
        if (url === "/projects") {
            page('/projects', projectsController.body);
        } else if (url === "/skills") {
            page('/skills', skillsController.body);
        } else if (url === "/about") {
            page('/about', aboutController.body);
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
