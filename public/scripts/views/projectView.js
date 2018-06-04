'use strict';

(function(module) {
    const projectView = {};

    projectView.initIndexPage = () => {
        Project.all.forEach(project => {
            $('#projects').append(project.toHtml('#project-template'));
        })
    }

    Project.fetchAll(projectView.initIndexPage);
    module.projectView = projectView;

})(window);