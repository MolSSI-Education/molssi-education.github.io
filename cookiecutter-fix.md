---
title: 2020 MolSSI CookieCutter Fix
layout: default
---

# April 2020 CookieCutter Fix

There has been a change recently in the URL for Miniconda which will cause all builds using the MolSSI CookieCutter to fail. You can see more discussion of this on the [GitHub issue](https://github.com/MolSSI/cookiecutter-cms/issues/103).

## The Problem

If you are running Travis tests on a project which was created with the MolSSI CookieCutter before April 17, 2020, you will receive the error

~~~
-- Installing latest Miniconda
-- Miniconda latest version NOT FOUND in cache
Miniconda MD5 mismatch
~~~

The script `before_install.sh` downloads and installs Miniconda for your Travis build. As part of this download and install, a `curl` command is used to get information about the Miniconda file. An [md5sum](https://en.wikipedia.org/wiki/Md5sum) check is performed to verify that the correct file was downloaded before Miniconda is installed. Miniconda's location has changed, and the `curl` command does not follow redirects. This causes the `curl` command to return empty. The MD5 check fails, causing your build to fail.


## The Fix

To fix this problem and get your builds working again, open the file `devtools/travis-ci/before_install.sh`, change lines `18` and `19` from

~~~
MINICONDA_MD5=$(curl -s https://repo.continuum.io/miniconda/ | grep -A3 $MINICONDA | sed -n '4p' | sed -n 's/ *<td>\(.*\)<\/td> */\1/p')		 
wget -q https://repo.continuum.io/miniconda/$MINICONDA
~~~

to

~~~
MINICONDA_MD5=$(wget -qO- https://repo.anaconda.com/miniconda/ | grep -A3 $MINICONDA | sed -n '4p' | sed -n 's/ *<td>\(.*\)<\/td> */\1/p')
wget -q https://repo.anaconda.com/miniconda/$MINICONDA
~~~

This changes the command `curl` to `wget`, and updates the location of Miniconda.
