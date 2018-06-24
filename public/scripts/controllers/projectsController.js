'use strict';

(function(module) {
    const projectsController = {};

    projectsController.body = function() {
        Project.fetchAll();
    }

    module.projectsController = projectsController;
})(window);
