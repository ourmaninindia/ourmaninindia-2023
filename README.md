# Our Man in India

This is the repository for the website "ourmaninindia.com" using 

* Hugo theme Ananke - this is not always copied as it is a submodule 
* netlify.com for hosting
* for images I am now using Hugo's page bundles which makes the management of images quite easy


# Github

## Keys
For Github I use an *ed25519* key called *id_ed25519-ourman* so it is easy to spot for which Github account it is as a key can only be used for one account.

```
ssh-keygen -t ed25519 -C "alfred@ourmaninindia.com"
```
Copy the public key to Github under *Settings* and then *Deploy Keys*.

Then add the key to the ssh agent:

```
ssh-add ~/.ssh/id_ed25519-ourman
```

Multiple accounts should be configured in *\~/.ssh/config*

```
Host odyssey
  Hostname github.com
  User alfred-tuinman
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_rsa

Host ourman
  HostName github.com
  User ourmaninindia
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519-ourman
```

## Branch
We have created two branches: production an development. The latter has been set as a default to avoid the production site to get irroneous updates.

In case you need to change a branch name on Github then do the following locally

```
git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME
git fetch origin
git branch -u origin/NEW-BRANCH-NAME NEW-BRANCH-NAME
git remote set-head origin -a
```



## Clone
Clone the repo including the submodule to get a new copy from Github.

```
git clone git@github.com:ourmaninindia/ourmaninindia-2023.git
git submodule init
git submodule update
```

# Documentation
The software for this documentation is provided by *jsdoc, jsdocdash* and *jsdoc-to-markdown.*

The actual text comes from the *README.md* file in the project root.

To update this run

```
npm run docs
```

# Netlify

## Set the development branch to redeploy.
In addition to production, this makes life a lot easier.

## DNS settings

Name : ourmaninindia.com as well as www.ourmaninindia.com
TTL  : 3600 seconds
Type : NETLIFYv6
Value: ourmaninindia.netlify.app

Name : ourmaninindia.com as well as www.ourmaninindia.com
TTL  : 3600 seconds
Type : NETLIFY
Value: ourmaninindia.netlify.app


## Let's Encrypt

You can check the status of your site’s certificates in Site settings > Domain management > HTTPS.


