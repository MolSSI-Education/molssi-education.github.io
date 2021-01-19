---
layout: post
title: 'June Python Scripting Webinar'
location: 'Online'
expires: 2020-06-02
event_date: 'June, 2020'
repeated: false
---

This page contains video recordings and homework assignments from our June 2020 webinar series. If you would like to follow along with the videos, be sure to follow the [set-up instructions](https://education.molssi.org/python_scripting_cms/setup.html) for this series. You can find the online material [here](https://education.molssi.org/python_scripting_cms/), and each topic is linked below the relevant video as well. These workshops were interactive, with students following along as the instructor taught. If you are completing the workshop from the videos, also try to follow along!

## Session 1

#### Video

<iframe src="https://drive.google.com/file/d/1Pv-yXPQ1J5kCu66MiZT_PfF-VaeK-oct/preview" width="640" height="480" allow="fullscreen"></iframe>

You can also see the online lessons for the topics we covered:

- [Introduction](https://education.molssi.org/python_scripting_cms/01-introduction/index.html)
- [File Parsing](https://education.molssi.org/python_scripting_cms/02-file_parsing/index.html)
- [Processing Multiple Files and Writing Files](https://education.molssi.org/python_scripting_cms/03-multiple_files/index.html)

#### Homework Assignment

You can read this homework assignment on the Processing Multiple Files and Writing Files assignment under "File parsing homework". The homework assignment is given below as well.
In the lesson materials, there is a file called 03_Prod.mdout. This is a file output by the Amber molecular dynamics simulation program.

If you open the file and look at it, you will see sections which look like this:

```
 NSTEP =      100   TIME(PS) =      20.200  TEMP(K) =   296.43  PRESS =  -300.8
 Etot   =     -4585.1049  EKtot   =      1129.2368  EPtot      =     -5714.3417
 BOND   =         1.5160  ANGLE   =         6.9846  DIHED      =        11.7108
 1-4 NB =         4.3175  1-4 EEL =        49.9911  VDWAALS    =       882.6741
 EELEC  =     -6671.5358  EHBOND  =         0.0000  RESTRAINT  =         0.0000
 EKCMT  =       583.7810  VIRIAL  =       786.8823  VOLUME     =     31270.0410
                                                    Density    =         0.6104
 Ewald error estimate:   0.3214E-03
 ------------------------------------------------------------------------------
```

Your assignment is to parse this file, and write a new file containing a list of the > total energies. Name your file Etot.txt. When you open it, it should look like this:

```
-4585.1049
-4573.5326
-4548.1223
-4525.341
-4542.8995
-4550.9376
-4543.8652
-4570.4109
-4550.4225
-4585.2078
...
```

... indicates that you will have many more rows. We’ve only shown the first 10 here.

## Session 2

### Video

<iframe src="https://drive.google.com/file/d/1ub0D3sJm79SfvNOxWmkxfb1LnuTeNoQf/preview" width="640" height="480" allow="fullscreen"></iframe>

You can see the written materials in our online lessons for each topic:

- [Tabular data](https://education.molssi.org/python_scripting_cms/04-tabular_data/index.html)
- [Plotting](https://education.molssi.org/python_scripting_cms/05-plotting/index.html)

The plotting lesson has additional information on plot customization and using subplots.

#### Homework Assignment

You can also see the homework assignment on the Tabular Data lesson under "Geometry Analysis Project". Note that there are several project extensions for you to try if you finish the first assignment.
Assignment: In the lesson materials, there is a file in the data folder called “water.xyz”. This is a very simple, standard file format that is often used to distribute molecular coordinates. The first line of the file is the number of atoms in the molecule, the second line is a title line (or may be blank), and the coordinates begin on the third line. The format of the coordinates is

`Atom_Label XCoor YCoor ZCoor`

and the default units (which are used in this example) are angstroms.
Write a code to read in the information from the xyz file and determine the bond lengths between all the atoms. There is a numpy function to take the square root, numpy.sqrt(). To raise a number to a power, use `**`, as in `3**2 = 9`. Your code output should look something like this.

```
O to O : 0.0
O to H1 : 0.969
O to H2 : 0.969
H1 to O : 0.969
H1 to H1 : 0.0
H1 to H2 : 1.527
H2 to O : 0.969
H2 to H1 : 1.527
H2 to H2 : 0.0
```

Hint: You will need a double for loop to measure the distance between all the atoms. If you aren’t sure how to get started, print the variables inside your for loop.

## Session 3

### Video

<iframe src="https://drive.google.com/file/d/188iEOtvoa1q57U518svWq78lkY10OFWg/preview" width="640" height="480" allow="fullscreen"></iframe>

You can see the written materials in our online lessons for each topic:

- [Writing functions](https://education.molssi.org/python_scripting_cms/06-functions/index.html)
- [Running scripts from the command line](https://education.molssi.org/python_scripting_cms/07-command_line/index.html)

#### Homework

You can also see the homework assignment on the command line lesson under "Project Assignment". It is also repeated below. Note there are a few extension on the assignment page if you finish the main assignment and would like to try more.
For this homework assignment, you will return to your first project where you processed the file 03_Prod.mdout.
Create a command line script using argparse which can take in an mdout file from Amber, pull out total energy for each time step, and write a new file containing these values. The script should take a file name (03_Prod.mdout) and output a file with the names filename_Etot.txt. Modify your week 1 homework to do this.

In the session 1 homework, the file we wrote had two values at the end which we did not want for the total energy. The last two values were some statistics associated with the md simulation and were not total energies. Excluded these two values from the file you write this time.
You can download a directory containing more mdout files [here](https://education.molssi.org/python_scripting_cms/data/mdout.zip).

Call your script analyze_mdout.py. You should be able to call the script in the following way:

```
$ python analyze_mdout.py 03_Prod.mdout
```

When you call help, you should get the following output:

```
$ python analyze_mdout.py --help
usage: This script parses amber mdout files to extract the total energy. You can also use it to create plots.
      [-h] [--make_plots] path
positional arguments:
 path          The filepath to the file to be analyzed.
optional arguments:
 -h, --help    show this help message and exit
```

## Session 4

 <iframe src=" https://drive.google.com/file/d/1UXjTLodllffXO-hMMUaEdA5PyQWUNJv7/preview" width="640" height="480" allow="fullscreen"></iframe>

You can see the written materials in our online lessons for each topic:

- [Data analysis with pandas](https://education.molssi.org/python-data-analysis/02-pandas/index.html)
- [Version control with git](https://education.molssi.org/python_scripting_cms/09-version-control/index.html)
- [Sharing code on GitHub](https://education.molssi.org/python_scripting_cms/10-github/index.html)

All of the lessons have additional material we did not have time to cover in the webinar.
