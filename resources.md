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
        {%- for tab in site.data.resources_tabs -%}
        <li>
            <button id="tab-{{ tab.title | slugify }}" class="tablinks h-100 nav-item">{{ tab.title }}</button>
        </li>
        {%- endfor -%}
      </ul>
    </div>
  </nav>
</div>

<!-- Tab content -->
{%- for item in site.data.resources_tabs %}
  <div id="{{ item.title | slugify }}" class="tabcontent">
    {%- assign tab_name = item.title | downcase | replace: " ", "_" %}
    {%- if item.description -%}{{ item.description }}{%- endif -%}
    {%- for resource in site.data.resources[tab_name] %}
    {%- include resource.html -%}
    {%- endfor %}
  </div>
{%-  endfor %}