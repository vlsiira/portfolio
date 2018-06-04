'use strict';

(function(module) {
    const skillsController = {};

    skillsController.body = function() {
        $('.tab-content').hide();
        $('#skills').show();
    }

    module.skillsController = skillsController;
})(window);