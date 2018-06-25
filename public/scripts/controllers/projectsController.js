'use strict';

(function(module) {
    const projectsController = {};

    projectsController.body = function() {
        $('.tab-content').hide();
        $('#projects').show();
    }

    module.projectsController = projectsController;
})(window);
