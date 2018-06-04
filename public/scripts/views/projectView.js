'use strict';

const app = app || {}; // 12

(function(module) {
    const projectView = {
        init: function () {
            $('main').removeAttr('class').addClass('repos');

            app.repos.all.forEach(repo => {
                $('#projects ul').append(`<li>${repo.name} IS ONLINE AT ${repo.url}</li>`);
            })
        }
    };

    // projectView.initIndexPage = () => {
    //     Project.all.forEach(project => {
    //         $('#projects').append(project.toHtml('#project-template'));
    //     })
    // }

    // Project.fetchAll(projectView.initIndexPage);
    module.projectView = projectView;

})(app);
// })(window);