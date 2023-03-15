# JavaScript

Javascripts can be found in the *assets/js* folder.

The file *layouts/partials/site-scripts* has the script to add any of the above scripts to the public *scripts.js* file.

## DOMContentLoaded
In order to run a function after the DOM has been loaded, add this after the function where ready is the name of the function called (e.g. for scrolling a page).

```
document.addEventListener("DOMContentLoaded", ready);
```