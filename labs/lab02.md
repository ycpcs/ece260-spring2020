---
layout: default
course_number: ECE260
title: "Lab02: Computer Architecture"
---

Getting Started
===============

Start by downloading [Lab02_Computer_Architecture.zip](Lab02_Computer_Architecture.zip), saving it in a **ECE260** directory within your home directory.

From the Windows Start Menu, start a **Cygwin Shell** and run the following commands:

    cd h:
    cd ECE260
    unzip Lab02_Computer_Architecture.zip
    cd Lab02_Computer_Architecture

The folder contains a Microsoft Word document named **Lab02_Computer_Architecture.docx**
and a subfolder named **src**. 

Inside the **src** folder, open the file **main.cpp** with Notepad++.  
You should also open **functions.h** and **functions.cpp**.
  
Open the **Lab02_Computer_Architecture.docx** with Microsoft Word.  Additional instructions for this lab assignment are 
included in the Word document.



Submitting
==========

To submit your lab assignment, make sure your files have all been saved.
Close your Microsoft Word document.

In a Cygwin window type the commands:

    cd h:
    cd ECE260
    cd Lab02_Computer_Architecture
    make submit

Enter your Marmoset username and password (which you should have received by email.) 
Note that your password will not be echoed to the screen. 
Make sure that after you enter your username and password, you see a message indicating that the submission was successful.

Log into [Marmoset](https://cs.ycp.edu/marmoset/login) via the web to check the files you submitted to ensure they are correct.

**DO NOT MANUALLY ZIP YOUR PROJECT AND SUBMIT IT TO MARMOSET.  
YOU MUST USE THE ```make submit``` COMMAND**.