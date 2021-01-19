---
title: Education Events
layout: default
---

<div class="home">
  {%- if page.title -%}
    <h1 class="page-heading">{{ page.title }}</h1>
  {%- endif -%}

  <ul class="post-list">
  {% for event in site.events %}
  <li>
  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
  <span class="post-meta">{{ event.event_date | event_date: date_format }},</span>
  <span class="post-meta"><em>{{ event.location | escape }}</em></span>
  <h3>
    <a class="post-link" href="{{ event.url | relative_url }}">{{ event.title | escape }}</a>
  </h3>
  </li>
  {% endfor %}
  </ul>

</div>
