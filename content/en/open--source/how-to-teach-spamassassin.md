+++
categories = ["open-source"]
date = 2012-10-12T18:40:03Z
description = ""
draft = false
slug = "how-to-teach-spamassassin"
tags = ["open-source"]
title = "how to teach spamassassin"

+++


Apply sa-learn to all email boxes called Junk in a cron job

    /usr/bin/sa-learn --spam /var/vmail/*/*/.Junk/*/* /bin/rm -rf /var/vmail/*/*/.Junk/cur/*

