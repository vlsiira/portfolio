'use strict';

const app = app || {}; // 12

(function(module) {
    const projectView = {
        init: function () {
            
        }
    };

    projectView.initIndexPage = () => {
        Project.all.forEach(project => {
            $('#projects').append(project.toHtml('#project-template'));
        })
    }

    Project.fetchAll(projectView.initIndexPage);
    module.projectView = projectView;

})(window);