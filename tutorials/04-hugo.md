# Hugo

## Scripts
The scripts should be starting with an onload event to ensure the DOM is loaded before starting the scripts. Otherwise you would get an error that the id called *navbar* in the header tag can not be found.

```
onDOMContentLoaded = (event) => {
```


## Images
Fot the images of the posts it will use the layout *summary-with-text*. In that there is a function *GetCoverImage.html* that we created to first look for a resource image with the word *cover* and, if that is not found, it will look for the *.Params.featured_image*.

So you don't need a param for the cover (as long as the file name contains the word *cover*). 

All jpg files have been restructured to webp using the following terminal command.

```
for file in *.jpg ; do cwebp -q 50 "$file" -o "${file%.jpg}.webp"; done
```

## Copyright
The copy rights are specified in the footer, in our case under Creative Commons.


## Forms
Contract and subscribe forms are proceesed for Formspree (50 submisions per month for free), The url is specified in the config.toml file.


## TOC
If a param called *toc* in frontmatter is set to true Hugo ctreates a TOC to be displayed in the *single* page. Condition is that the content must have multiple lines starting with ##  See e.g. my Portugal trip
