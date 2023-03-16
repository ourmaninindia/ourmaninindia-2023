# Netlify

Set up all, or at least both, production and development as aan active branch on Netlify.


## Forms

Add *data-netlify="true"* to the <form> tag. Also add *action="/success/"* with success being the new content url. 


So create a new content folder called *success* with a file called *index.md*.


Add this immediately below the form tag:
```
<input type="hidden" name="form-name" value="contact" />
```

Set *canonifyURLs* to false in the Hugo configuration file.


### Honeypot
Add a *netlify-honeypot="bot-field"* attribute to the <form> tag and add the following to the form:
```
<p class="hidden">
  <label>
    Don’t fill this out if you’re human: <input name="bot-field" />
  </label>
</p>
```

### Captcha

There is also an option to add a captcha. Add a *data-netlify-recaptcha="true"* attribute to your <form> tag. In the place where in the form you’d like the CAPTCHA to appear, add an empty <div> element with the same *data-netlify-recaptcha="true"* attribute:

```
<div data-netlify-recaptcha="true"></div
```


## References
https://brianli.com/how-to-create-a-contact-form-in-hugo-with-netlify-forms/
https://docs.netlify.com/forms/spam-filters/