---
layout: default
course_number: ECE260
title: "Lab01: Game of Life"
---

Getting Started
===============

Start by downloading [Lab01_Game_of_Life.zip](Lab01_Game_of_Life.zip), saving it in a **ECE260** directory within your home directory.

From the Windows Start Menu, start a **Cygwin Shell** and run the following commands:

    cd h:
    cd ECE260
    unzip Lab01_Game_of_Life.zip
    cd Lab01_Game_of_Life


The folder contains a Microsoft Word document named **Lab01_Game_of_Life.docx**
and a subfolder named **src**. 

Inside the **src** folder, open the file **game_of_life.cpp** with Notepad++.
  
Open the **Lab01_Game_of_Life.docx** with Microsoft Word.  Additional instructions for this lab assignment are 
included in the Word document.



Submitting
==========

To submit your lab assignment, make sure your files have all been saved.
Close your Microsoft Word document.

In a Cygwin window type the commands:

    cd h:
    cd ECE260
    cd Lab01_Game_of_Life
    make submit

Enter your Marmoset username and password (which you should have received by email.) 
Note that your password will not be echoed to the screen. 
Make sure that after you enter your username and password, you see a message indicating that the submission was successful.

Log into [Marmoset](https://cs.ycp.edu/marmoset/login) via the web to check the files you submitted to ensure they are correct.

**DO NOT MANUALLY ZIP YOUR PROJECT AND SUBMIT IT TO MARMOSET.  
YOU MUST USE THE ```make submit``` COMMAND**.