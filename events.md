---
title: Education Events
layout: default
---

<div class="home">
  <h1 class="page-heading">Education Events</h1>

  <ul class="post-list">
  {% for event in site.events %}
    {%- if event.repeated == true -%}
    <h3>
    <a class="post-link" href="{{ event.url | relative_url }}">{{ event.title | escape }},<em>{{ event.location | escape }}</em></a>
    </h3>
    <span class="post-meta">{{ event.event_date | event_date: date_format }}</span>
    {{ event.content | truncatewords: 50 }}
    <a href="{{ event.url | relative_url }}"><em>more</em></a>
    {%- endif -%}
  {% endfor %}
  </ul>
  {% assign sorted_events = (site.events | sort: 'expires') %}
  <ul class="post-list">
  {% for event in site.events %}
    {%- if event.repeated == false -%}
      {%- capture nowunix -%}{{'now' | date: '%s'}}{%- endcapture -%}
      {%- capture expires -%}{{event.expires | date: '%s'}}{%- endcapture -%}
      {%- if nowunix < expires -%}
      <h3>
      <a class="post-link" href="{{ event.url | relative_url }}">{{ event.title | escape }},<em>{{ event.location | escape }}</em></a>
      </h3>
      <span class="post-meta">{{ event.event_date | event_date: date_format }}</span>
      {{ event.content | truncatewords: 50 }}
      <a href="{{ event.url | relative_url }}"><em>more</em></a>
      {%- endif -%}
    {%- endif -%}
  {% endfor %}
  </ul>
<em>For past events, please see our <a href="{{site.baseurl}}/map">full list and map</a>, or see events which had a blog post <a href="{{site.baseurl}}/events-archive">here</a></em>
</div>