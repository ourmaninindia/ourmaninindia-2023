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

To clone though you may still need to specify the host 

```
git clone git@ourman:ourmaninindia/ourmaninindia-23.git
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



## Let's Encrypt

You can check the status of your site’s certificates in Site settings > Domain management > HTTPS.


## How to Check SSH Fingerprint of a Key

```
cd .ssh
ssh-keygen -l -f <key.pub>
```
where key.pub is the public key you are looking at e.g. id_ed25519-ourman.pub

The result is something like 
```
256 SHA256:UcBaqE0TSIEW9r2P0FfT2sCO1hGmQ/SmjWYSPu/IQ5U alfred@ourmaninindia.com (ED25519)
```


Next, to diagnose the issue, you want to run ssh from the command line:

ssh -T git@github.com

Hi alfred-tuinman You've successfully authenticated, but but GitHub does not provide shell access.

git remote set-url origin ssh://ourman/ourmaninindia/ourmaninindia-23.git


## LFS Large File System

To install lfs on your local pc run

```
sudo apt-get install git-lfs
git lfs install
```

To download all images to your local pc, rather than maintaining references, run

```
git lfs pull
```

To test that no references are there to commit you can run this

```
git add .
git status 
git lfs fsck
```

