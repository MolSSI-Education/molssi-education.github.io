---
title: Resources
layout: default
---

# MolSSI Education Resources

MolSSI offers 1-2 day workshops as well as online tutorial materials. Most tutorials are hosted on GitHub in the MolSSI Education GitHub organization. Workshops and materials here may still be under development. Outside contribution is welcomed and encouraged!

<!-- Tab links -->
<div class="tab">
  <nav class="navbar navbar-expand-lg navbar-light bg-light tab resources">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse h-100 p-0" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item" onclick="openCategory(event, 'Programming')", id="defaultOpen">
        <button class="tablinks h-100">Programming</button>
      </li>
      <li class="nav-item" onclick="openCategory(event, 'software-development')">
        <button class="tablinks h-100">Software Development</button>
      </li>
      <li class="nav-item" onclick="openCategory(event, 'molecular-modeling')">
        <button class="tablinks h-100">Molecular Modeling</button>
      </li>
      <li class="nav-item" onclick="openCategory(event, 'external-resources')">
        <button class="tablinks h-100">External Resources</button>
      </li>
    </ul>
</nav>
</div>

<!-- Tab content -->
<div id="Programming" class="tabcontent">
{% for resource in site.data.programming %}
{%- include resource.html -%}
{% endfor %}
</div>

<div id="software-development" class="tabcontent">
{%  for resource in site.data.software_development %}
{%- include resource.html -%}
{% endfor %}
</div>

<div id="molecular-modeling" class="tabcontent">
{%  for resource in site.data.molecular_modeling %}
{%- include resource.html -%}
{% endfor %}
</div>

<div id="machine-learning" class="tabcontent">
{% for resource in site.data.machine_learning %}
{%- include resource.html -%}
{% endfor %}
</div>

<div id='external-resources' class='tabcontent'>
Here are a number of educational resources that are external to the MolSSI, though many of these have been developed by MolSSI Software Scientists, MolSSI Associates, and other partners.
{%  for resource in site.data.external_resources %}
{%- include resource.html -%}
{% endfor %}
</div>

<!-- Get the element with id="defaultOpen" and click on it after the whole page loaded-->
<script>
  document.getElementById('defaultOpen').click();
</script>
