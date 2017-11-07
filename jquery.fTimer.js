(function( $ ){
  $.fn.fTimer = function (options) {

    // Set this element
    var element = this;

    // Сount should be int
    options.count = parseInt(options.count);
    // If count int
    if (!isNaN(options.count) && options.count > 0) {

      // Element contain count
      element.text(options.count);
      // Start interval
      var sI = setInterval(function () {
        // Count reduce by one
        options.count--;
        // Element contain new count
        element.text(options.count);

        // If the timer is over
        if (options.count <= 0) {
          // Delete interval
          clearInterval(sI);

          // If callback is function
          if (isFunction(options.callback)) {
            // Call custom function
            options.callback();
          }
        }

      }, 1000);

    } else {
      console.error('jQuery.Timer: count is not number or count <= 0.');
    }

    // Function for check type of functions
    function isFunction(func) {
      // If variable exist
      if (func) {
        // If variable type is function
        if (typeof func() === 'function') {
          return true;
        } else {
          return false;
        }
      }
    }

  };
})( jQuery );
