# fTimer 0.1.0 - plugin for Jquery.

### How to use it:

```javascript
$(object).Timer( { count: <number>, callback: <function> } );
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
