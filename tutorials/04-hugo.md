# Hugo

## Minify
Minification of css and javascript happens by the script. The complete html you can also minify by running the hugo command with --minify 

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


## Date modified
Hugo has an interesting way to access the date modified in the front matter: it uses git to get the date.

```
lastmod: ["lastmod", ":git", "date", "publishDate"]
```

This is assuming the following is in the configuration file
```
enableGitInfo = true
```

## Syntax highlighting
Hugo uses Chroma based on Go.

Add this to the configuration file. You can add the style option in the configuration file, e.g. style = monokai 

```
[markup.highlight]
      codeFences = true
      guessSyntax = true
      hl_Lines = ""
      lineNoStart = 1
      lineNos = true
      lineNumbersInTable = true
      tabWidth = 4
      noClasses = false
      style = "monokai"
```

If you run with *markup.highlight.noClasses=false* in your site config, you need a style sheet. You can generate one based on the existing *monokai* style.

```
hugo gen chromastyles --style=monokai > highlight.css
```

You’ll need to set two more settings. These two should be top level like baseurl or title in your configuration file, do not place under *markup.highlight*.

Use CSS classes instead of embed styling in HTML
```
pygmentsUseClasses = true

```

Highlighting for code fences isn’t enabled by default. So, you need to add this line too in your config file.

```
pygmentsCodefences = true
```

By the way, we are still using Chroma, not Pygments. Don’t let those 2 lines confuse you. 