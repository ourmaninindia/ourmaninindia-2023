---
author : "Alfred"
categories : []
date : 2020-07-09T22:00:00Z
lastmod: ["lastmod", ":git", "date", "publishDate"]
description : "Always use npm without sudo but how to achieve that if you get a message that access to certain root files are required?"
tags : ["npm"]
title : "npm install -g without sudo"

---
Missing write access to /usr/local/lib/node_modules is not write permission, npm official solution is to create a new folder with permissions, install npm package in this new folder. This method does not apply to Microsoft Windows system.  
 Create a folder in the user's root directory (the name does not have to be .npm-global, you can do it yourself):

    mkdir ~/.npm-global

Set the installation path of the npm global package:

    npm config set prefix '~/.npm-global'

Check if there is a .profile file in the user's root directory. If it is not created, open it with a text editor and add the following line to save:

    export PATH:~/.npm-global/bin:$PATH

Go back to the terminal and run the following command to make the configuration take effect:

    source ~/.profile

Then install the npm package globally.

courtesy [https://www.programmersought.com/article/92021206299/](https://www.programmersought.com/article/92021206299/ "https://www.programmersought.com/article/92021206299/")