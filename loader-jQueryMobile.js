(function (global) {
    // Window's loader object
    var loader = global.loader = global.loader || {};

    // Minimum amount of time the panel should show for (to avoid flickering).
    var PANEL_MINIMUM_SHOW_TIME = 500;

    loader.manageSelf = function (dfrd) {
        // Create a deferred that will be resolved after PANEL_MINIMUM_SHOW_TIME time.
        var timeoutDfrd = $.Deferred();

        // Show the loading panel.
        $.mobile.loading("show", {
            
        });

        // Set a timeout and resolve the timeout deferred.
        setTimeout(function () {
            timeoutDfrd.resolve();
        }, PANEL_MINIMUM_SHOW_TIME)

        // When both deferreds are resolved or rejected, hide the panel.
        $.when(timeoutDfrd, dfrd).always(function () {
            $.mobile.loading("hide");
        });
    }
})(window);
