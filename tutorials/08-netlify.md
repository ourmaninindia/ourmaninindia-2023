# Netlify

Set up all, or at least both, production and development as aan active branch on Netlify.


## Forms

Add *data-netlify="true"* in the form tag. Also add *action="/success/"* with success being the new content url. 


So create a new content folder called *success* with a file called *index.md*.


Add this immediately below the form tag:
```
<input type="hidden" name="form-name" value="contact" />
```

Set *canonifyURLs* to false in the Hugo configuration file.



## References
https://brianli.com/how-to-create-a-contact-form-in-hugo-with-netlify-forms/