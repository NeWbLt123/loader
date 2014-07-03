Loader.js
=========

A small javascript library to show and hide a loading panel.



Usage
--------------
```javascript
<script src="loader.js"></script>

var ajaxCall = $.ajax({ ... });

loader.manageSelf(ajaxCall);
```

Note
---
As of right now, this library only works with Telerik's Kendo UI Mobile loading panel. I don't have time to make it generic to any loading panel right now, but I will, eventually.
