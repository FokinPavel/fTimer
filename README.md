# fTimer 0.1.0 - plugin for Jquery.

How to use it:

$(object).Timer( { count: <number>, callback: <function> } )
  
Example:

$('.counter').ready(function () {
  $('.advantages__item-name').fTimer({
    count: 59,
    callback: function () {
      console.log('done');
    },
  });
})
