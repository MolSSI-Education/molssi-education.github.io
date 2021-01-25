---
title: Past Events
layout: default
---

<div class="home">
  <h1 class="page-heading">Past Events</h1>

{% assign sorted_events = (site.events | sort: 'expires') %}

  <ul class="post-list">
  {% for event in sorted_events %}
    {%- if event.repeated == false -%}
      {%- capture nowunix -%}{{'now' | date: '%s'}}{%- endcapture -%}
      {%- capture expires -%}{{event.expires | date: '%s'}}{%- endcapture -%}
      {%- if nowunix > expires -%}
      <span class="post-meta">{{ event.event_date | event_date: date_format }}</span>
      <span class="post-meta"><em>{{ event.location | escape }}</em></span>
      <h3>
      <a class="post-link" href="{{ event.url | relative_url }}">{{ event.title | escape }}</a>
      </h3>
      {%- endif -%}
    {%- endif -%}
  {% endfor %}
  </ul>
<em>For upcoming event, please visit <a href="{{site.baseurl}}/events">here</a></em>
</div>
