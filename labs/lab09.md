---
layout: default
course_number: ECE260
title: "Lab09: Introduction to ARM Assembly"
---

Getting Started
===============

Start by downloading [Lab09_Introduction_to_ARM_Assembly.zip](Lab09_Introduction_to_ARM_Assembly.zip), saving it in a **ECE260** directory within your home directory.

From the Windows Start Menu, start a **Cygwin Shell** and run the following commands:

    cd h:
    cd ECE260
    unzip Lab09_Introduction_to_ARM_Assembly.zip
    cd Lab09_Introduction_to_ARM_Assembly


The folder contains a Microsoft Word document named **Lab09_Introduction_to_ARM_Assembly.docx**,
a project folder named **Lab09_Sample_Project**,
a **Documents** folder, and some other miscellaneous files.

The **Lab09_Sample_Project** directory contains a Kiel uVision project that you'll be using throughout this lab assignment.  

The **Documents** directory contains some documentation for ARM-based microprocessors and instruction sets.
  
Open the **Lab09_Introduction_to_ARM_Assembly.docx** with Microsoft Word.  Additional instructions for this lab assignment are 
included in the Word document.



Submitting
==========

To submit your lab assignment, make sure your files have all been saved.
Close your Microsoft Word document.

In a Cygwin window type the commands:

    cd h:
    cd ECE260
    cd Lab09_Introduction_to_ARM_Assembly
    make submit

Enter your Marmoset username and password (which you should have received by email.) 
Note that your password will not be echoed to the screen. 
Make sure that after you enter your username and password, you see a message indicating that the submission was successful.

Log into [Marmoset](https://cs.ycp.edu/marmoset/login) via the web to check the files you submitted to ensure they are correct.

**DO NOT MANUALLY ZIP YOUR PROJECT AND SUBMIT IT TO MARMOSET.  
YOU MUST USE THE ```make submit``` COMMAND**.