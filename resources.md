---
title: Resources
layout: default
---

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
{%  for resource in site.data.programming %}
<h2>
  <a class="headerLink" href="https://education.molssi.org/{{ resource.link}}" target="_blank" >{{ resource.title }}</a>
</h2>
<p>
  <strong>Description: </strong> {{ resource.description  }}
</p>
<details>
  <summary>Workshop Topics</summary>
    {{resource.topics}}
</details>

[{% octicon book %} View Workshop Materials](https://education.molssi.org/{{ resource.link}}) |
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/{{ resource.link}})
{% endfor %}

</div>

<div id="software-development" class="tabcontent">
{%  for resource in site.data.software_development %}
<h2>
  <a class="headerLink" href="https://education.molssi.org/{{ resource.link }}" target="_blank" >{{ resource.title }}</a>
</h2>
<p>
  <strong>Description: </strong> {{ resource.description  }}
</p>
<details>
  <summary>Workshop Topics</summary>
    {{resource.topics}}
</details>

[{% octicon book %} View Workshop Materials](https://education.molssi.org/{{ resource.link}}) |
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/{{ resource.link}})
{% endfor %}

</div>

<div id="molecular-modeling" class="tabcontent">
{%  for resource in site.data.molecular_modeling %}
<h2>
  <a class="headerLink" href="https://education.molssi.org/{{ resource.link }}" target="_blank" >{{ resource.title }}</a>
</h2>
<p>
  <strong>Description: </strong> {{ resource.description  }}
</p>

[{% octicon book %} View Workshop Materials](https://education.molssi.org/{{ resource.link}}) |
[{% octicon mark-github} View GitHub Repository %} View GitHub Repository](https://github.com/MolSSI-Education/{{ resource.link}})
{% endfor %}

</div>

<div id='external-resources' class='tabcontent'>
Here are a number of educational resources that are external to the MolSSI, though many of these have been developed by MolSSI Software Scientists, MolSSI Associates, and other partners.
{%  for resource in site.data.external_resources %}
<h2>
  <a class="headerLink" href="{{ resource.link}}" target="_blank" >{{ resource.title }}</a>
</h2>
<p>
  <strong>Description: </strong> {{ resource.description  }}
</p>

[{% octicon book %} View Workshop Materials]({{ resource.link}})
{% endfor %}

</div>

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
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
</script>
