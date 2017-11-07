# fTimer 0.1.0 - plugin of counter for jQuery.

### What is this:

Display counter in DOM element.

### How to use it:

```javascript
$(object).fTimer( { count: <number>, callback: <function> } );
```
  
### Example:

```javascript
$( document ).ready(function () {
  $('.counter').fTimer({
    count: 59,
    callback: function () {
      console.log('done');
    },
  });
});
```
