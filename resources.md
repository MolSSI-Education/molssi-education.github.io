---
title: Resources
layout: default
---

# MolSSI Education Resources

MolSSI offers 1-2 day workshops as well as online tutorial materials. Most tutorials are hosted on GitHub in the MolSSI Education GitHub organization. Workshops and materials here may still be under development. Outside contribution is welcomed and encouraged!

<!-- Tab links -->
<div id="resources-nav" class="tab">
  <nav class="navbar navbar-expand-lg navbar-light bg-light tab resources">
    <div class="collapse navbar-collapse h-100 p-0 " id="navbarNav">
      <ul class="navbar-nav">
        <li>
          <button id="tab-programming" class="tablinks h-100 nav-item">Programming</button>
        </li>
        <li>
          <button id="tab-software-development" class="tablinks h-100 nav-item">Software Development</button>
        </li>
        <li>
          <button id="tab-machine-learning" class="tablinks h-100 nav-item">Machine Learning</button>
        </li>
        <li>
          <button id="tab-high-performance-computing" class="tablinks h-100 nav-item">High Performance Computing</button>
        </li>
        <li>
          <button id="tab-molecular-modeling" class="tablinks h-100 nav-item">Molecular Modeling</button>
        </li>
        <li>
          <button id="tab-external-resources" class="tablinks h-100 nav-item">External Resources</button>
        </li>
      </ul>
    </div>
  </nav>
</div>

<!-- Tab content -->
<div id="programming" class="tabcontent">
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

<div id="high-performance-computing" class="tabcontent">
{% for resource in site.data.high_performance_computing %}
{%- include resource.html -%}
{% endfor %}
</div>

<div id="external-resources" class="tabcontent">
Here are a number of educational resources that are external to the MolSSI, though many of these have been developed by MolSSI Software Scientists, MolSSI Associates, and other partners.
{%  for resource in site.data.external_resources %}
{%- include resource.html -%}
{% endfor %}
</div>
