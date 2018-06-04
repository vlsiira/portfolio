'use strict';

(function(module) {
    const projectsController = {};

    projectsController.body = function() {
        Project.fetchAll();
        $('.tab-content').hide();
        $('#projects').show();
    }

    module.projectsController = projectsController;
})(window);