---
categories : ["open-source"]
date : 2012-08-08T13:43:26Z
lastmod: ["lastmod", ":git", "date", "publishDate"]
description : ""
tags : ["open-source"]
title : "MP3"

---


You have to add the repository to be able to get plugins for mp3

    yum localinstall --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-stable.noarch.rpm

Then ad the actual plugin

    yum install gstreamer-plugins-ugly gstreamer-plugins-bad-nonfree

