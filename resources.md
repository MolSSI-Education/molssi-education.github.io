---
title: Resources
layout: default
---

# MolSSI Education Resources

MolSSI offers 1-2 day workshops as well as online tutorial materials. Most tutorials are hosted on GitHub in the MolSSI Education GitHub organization. Workshops and materials here may still be under development. Outside contribution is welcomed and encouraged!

<!-- Tab links -->
<div class="tab">
  <button class="tablinks" onclick="openCategory(event, 'Programming')", id="defaultOpen">Programming</button>
  <button class="tablinks" onclick="openCategory(event, 'software-development')">Software Development</button>
  <button class="tablinks" onclick="openCategory(event, 'molecular-modeling')">Computational Molecular Science</button>
  <button class="tablinks" onclick="openCategory(event, 'machine-learning')">Machine Learning</button>
  <button class="tablinks" onclick="openCategory(event, 'external-resources')">External Resources</button>
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
