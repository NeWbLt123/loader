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
This library only works with Telerik's Kendo UI Mobile loading panel. Take the `loader.js` file and modify it to fit your needs.
