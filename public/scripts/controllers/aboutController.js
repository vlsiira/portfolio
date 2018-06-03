'use strict';

(function(module) {
    const aboutController = {};

    aboutController.body = function() {
        $('.tab-content').hide();
        $('#about').show();
    }

    module.aboutController = aboutController;
})(window);