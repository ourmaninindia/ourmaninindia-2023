# JavaScript

Javascripts can be found in the *assets/js* folder.

The file *layouts/partials/site-scripts* has the script to add any of the above scripts to the public *scripts.js* file.

## We use ES6! 
In a JavaScript server-side runtime environment, this “Cannot Use Import Statement Outside a Module” error usually results from the use of import syntax for modules written in ECMAScript (ES) when Node.js is expecting the require keyword used by CommonJS module system. This is the reason all ES6 scripts files have a mjs suffix instead of just js.


## DOMContentLoaded
In order to run a function after the DOM has been loaded, add this after the function where ready is the name of the function called (e.g. for scrolling a page).

```
document.addEventListener("DOMContentLoaded", ready);
```