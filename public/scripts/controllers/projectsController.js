'use strict';

const app = app || {}; // 12

(function(module) {
    const projectsController = {};

    // projectsController.body = function() {
    projectsController.init = function() {
    
        Project.fetchAll();
        $('.tab-content').hide();
        $('#projects').show();
    }

    module.projectsController = projectsController;
// })(window);
})(app);