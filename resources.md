---
title: Resources
layout: default
---

<style>
/* Style the tab */
.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
  }
  
  /* Style the buttons that are used to open the tab content */
  .tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 18px;
  }
  
  /* Change background color of buttons on hover */
  .tab button:hover {
    background-color: #ddd;
  }
  
  /* Create an active/current tablink class */
  .tab button.active {
    background-color: #ed1c24ff;
    color: white;
  }
  
  /* Style the tab content */
  .tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
    padding: 30px 20px;
  }

  .tabcontent {
  animation: fadeEffect 1s; /* Fading effect takes 1 second */
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
from {opacity: 0;}
to {opacity: 1;}

}

.tabcontent h2 a {
  color: black;
}

</style>

<script>

    function openCategory(evt, categoryName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}
</script>

# MolSSI Education Resources

MolSSI offers 1-2 day workshops as well as online tutorial materials. All tutorials are hosted on GitHub in the MolSSI Education GitHub organization. Workshops and materials here may still be under development. Outside contribution is welcomed and encouraged!

<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openCategory(event, 'Programming')", id="defaultOpen">Programming</button>
  <button class="tablinks" onclick="openCategory(event, 'software-development')">Software Development</button>
  <button class="tablinks" onclick="openCategory(event, 'molecular-modeling')">Computational Molecular Science</button>
  <button class="tablinks" onclick="openCategory(event, 'external-resources')">External Resources</button>
</div>


<!-- Tab content -->
<div id="Programming" class="tabcontent">

## <a class="headerLink" href="https://education.molssi.org/python_scripting_cms/" target="_blank" >Python Data and Scripting Workshop</a>
**Description**: The MolSSI Python Data and Scripting workshop is designed for students who are currently involved in, or planning to start computational chemistry research. This workshop is designed to help students develop practical programming skills that will benefit their undergraduate research, and will take students through introductory programming and scripting with Python to version control and sharing their code with others. NO prior programming experience is required.

<details>
    <summary>Workshop Topics</summary>
        <li> Basic Python syntax and control structures  
        <li> Reading and writing files  
        <li> File manipulation and parsing
        <li> Analyzing and graphing data
        <li> Writing functions
        <li> Creating command line programs from Python scripts
        <li> Basic testing using PyTest
        <li> Version control with git
        <li> Sharing code on GitHub

</details>
<br>

[{% octicon book %} View Workshop Materials](https://education.molssi.org/python_scripting_cms/) | 
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/python_scripting_cms)

## <a class="headerLink" href="https://education.molssi.org/python-data-analysis/" target="_blank">Data Analysis using Python</a>
**Description**: The Python Data Analysis Tutorials are short stand-alone tutorials, which build on and expand the Python Scripting Workshop. These lessons include introductions to specific libraries including NumPy and pandas.

<details>
    <summary>Workshop Topics</summary>
    <li> Features of NumPy Arrays
    <li> Introduction to Data Analysis using Pandas
</details>
<br>

[{% octicon book %} View Workshop Materials](https://education.molssi.org/python-data-analysis/) | 
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/molssi-education/python-data-analysis)

## <a href="https://education.molssi.org/parallel-programming/" target="_blank">Parallel Programming</a>
**Description**: These lessons introduce basic parallelization techniques and best practices.  There are several examples that cover the topic of distributed-memory parallelization using the Message Passing Interface (MPI) and shared-memory parallelization using OpenMP.  Examples are provided both in C++ and in Python using the mpi4py wrapper. Both the MPI and OpenMP tutorials begin with simple “Hello World!” codes and culminate in the parallelization of a simple molecular dynamics code.

[{% octicon book %} View Materials](https://education.molssi.org/parallel-programming/) | 
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/parallel-programming)


</div>

<div id="software-development" class="tabcontent">

## <a class="headerLink" href="https://education.molssi.org/python-package-best-practices/index.html" target="_blank">Best Practices Workshop</a>
**Description**: Our best practices workshops introduce and promote [MolSSI best practices](https://molssi.org/education/best-practices/) to workshop attendees. This workshop is designed for graduate students, post docs, or advanced undergraduate students. In this course, students create a Python package using best practices and the [MolSSI CookieCutter](https://github.com/MolSSI/cookiecutter-cms), and host this project on GitHub.

<details>
    <summary>Workshop Topics:</summary>
    <li> Conda and Python environments
    <li> Structuring a Python project using the MolSSI CookieCutter.
    <li> Version control using git
    <li> Python Coding Style
    <li> Online code repositories such as GitHub
    <li> GitHub collaboration
    <li> Unit testing and the PyTest testing framework
    <li> Code coverage
    <li> Continuous integration tools
    <li> Documentation for Python packages using Sphinx.
</details>
<br>

[{% octicon book %} View Workshop Materials](https://education.molssi.org/python-package-best-practices/index.html) | 
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/python-package-best-practices)


## <a class="headerLink" href="https://education.molssi.org/oop_and_design_patterns/index.html" target="_blank">Object Oriented Programming and Design Patterns</a>
**Description**:The Object Oriented Programming (OOP) and Design Patterns tutorials provide a brief introduction to good software design principles. These tutorials are designed for graduate students, post docs, or advanced undergraduate students. Students will develop python modules using OOP principles and software design patterns.

<details>
    <summary>Workshop Topics</summary>
    <li> Encapsulation
    <li> Data Abstraction
    <li> Inheritance
    <li> Polymorphism
    <li> Factory Design Pattern
    <li> Adapter Design Pattern
    <li> Facade Design Pattern
    <li> Observer Design Pattern
</details>
<br>

[{% octicon book %} View Workshop Materials](https://education.molssi.org/oop_and_design_patterns/index.html) | 
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/oop_and_design_patterns)

</div>

<div id="molecular-modeling" class="tabcontent">

## <a class="headerLink" href="https://education.molssi.org/getting-started-computational-chemistry/index.html" target="_blank">Getting Started in Computational Chemistry</a>
**Description**: A curated list of tutorials for common computational skills that students need to get started in copmutational chemistry research such as use of the terminal, text editors, and remote computing resources.

[{% octicon book %} View Materials](https://education.molssi.org/getting-started-computational-chemistry/index.html) | 
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/getting-started-computational-chemistry)

## <a class="headerLink" href="https://education.molssi.org/qm-tools/" target="_blank">Quantum Mechanics Tools</a>
**Description**: The qm-tools workshop introduces several types of quantum chemistry calculations a student might use, including geometry optimizations, inter- and intra-molecular potential energy scans, and energy calculations.  Some basic file parsing and data analysis is also discussed.

[{% octicon book %} View Materials](https://education.molssi.org/qm-tools/) | 
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/qm-tools/)

## <a class="headerLink" href="https://education.molssi.org/mm-tools/" target="_blank">Molecular Mechanics Tools</a>
**Description**: The mm-tools workshop introduces molecular dynamics simulations using the software OpenMM, and analysis of simulation results using MDTraj. The theoretical background of MD simulations are discussed, and students simulate and analyze alkane and a simple protein system. This workshop also covers putting code on GitHub and includes an exercise where students implement a new software feature and submit a pull request. 

[{% octicon book %} View Materials](https://education.molssi.org/mm-tools/) | 
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/mm-tools/)

</div>

<div id='external-resources' class='tabcontent'>

Here are a number of educational resources that are external to the MolSSI, though many of these have been developed by MolSSI Software Scientists, MolSSI Associates, and other partners. 

## [Q-Chem for Teaching](http://www.q-chem.com/InstructionalMatls.html)

Instructions how to use Q-Chem for teaching via the IQmol interface, as well as a selection of computational assignments that can be given to students as homework or in-class exercises. The list of labs includes 10 labs covering different types of quantum-chemical calculations. We hope that this list will continue to grow and would like to encourage the community  to submit new computational labs for sharing.

For low-volume users, we offer a free service: such users can submit short Q-Chem jobs (up to 5 min) to the  Q-Chem server without purchasing a license (IQmol is automatically configured for the submission to the Q-Chem server).

[{% octicon book %} View Materials](http://www.q-chem.com/InstructionalMatls.html) 

## [Psi4 Education](https://admiring-tesla-08529a.netlify.app/posts/psi4education/)

Computational Labs Using Free Software Computational chemistry is an increasingly important part of modern research, and yet it is often not part of the typical undergraduate or graduate curriculum. Fortunately, the availability of free software like PSI4 and WebMO lowers the barrier to introducing computational chemistry laboratory modules. The labs below were created using only free software and are available for use in your classes. 

[{% octicon book %} View Materials](https://admiring-tesla-08529a.netlify.app/posts/psi4education/) 
</div>

<script>
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>

