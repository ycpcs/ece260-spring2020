---
layout: default
course_number: ECE260
title: "Lab07: Introduction to Floating Point Operations"
---

Getting Started
===============

Start by downloading [Lab07_Introduction_to_Floating_Point_Operations.zip](Lab07_Introduction_to_Floating_Point_Operations.zip), saving it in a **ECE260** directory within your home directory.

From the Windows Start Menu, start a **Cygwin Shell** and run the following commands:

    cd h:
    cd ECE260
    unzip Lab07_Introduction_to_Floating_Point_Operations.zip
    cd Lab07_Introduction_to_Floating_Point_Operations


The folder contains a Microsoft Word document named **Lab07_Introduction_to_Floating_Point_Operations.docx**
and multiple subfolders named **src**, **test**, and **util**.

The **src** directory contains the (mostly empty) assembly files that you will use throughout this lab assignment.
Do NOT delete any of the code that was distributed with the assignment.
However, you CAN delete some of the unnecessary comments if you like.

The **test** directory contains a set of unit tests for each part of the lab assignment. 
You should not change any of these files.

The **util** directory contains a couple of scripts that are required to identify and locate the Java compiler required 
to run the tests (just in case the JDK is not in the System PATH). You should not change these files.
  
Open the **Lab07_Introduction_to_Floating_Point_Operations.docx** with Microsoft Word.  Additional instructions for this lab assignment are 
included in the Word document.



Submitting
==========

To submit your lab assignment, make sure your files have all been saved.
Close your Microsoft Word document.

In a Cygwin window type the commands:

    cd h:
    cd ECE260
    cd Lab07_Introduction_to_Floating_Point_Operations
    make submit

Enter your Marmoset username and password (which you should have received by email.) 
Note that your password will not be echoed to the screen. 
Make sure that after you enter your username and password, you see a message indicating that the submission was successful.

Log into [Marmoset](https://cs.ycp.edu/marmoset/login) via the web to check the files you submitted to ensure they are correct.

**DO NOT MANUALLY ZIP YOUR PROJECT AND SUBMIT IT TO MARMOSET.  
YOU MUST USE THE ```make submit``` COMMAND**.