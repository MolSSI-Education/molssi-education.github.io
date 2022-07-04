---
title: Publications
layout: default
---

# MolSSI Education Publications  
<br>

{% assign sorted_pubs = (site.data.publications.papers | sort: 'publication_date' | reverse) %}

### Books

<ol>

{%- for item in site.data.publications.books -%}
    <li> <a href="{{item.link}}">{{ item.title }}</a>;  
    {{ item.publisher }}  
    <blockquote>
        {{ item.description }} 
    </blockquote>
    </li>
{%- endfor %}
</ol>

### Journal Articles
<ol>
{%- for item in sorted_pubs -%}
    <li> <a href="{{item.link}}">{{ item.title }}</a>;   
    <i>{{ item.journal }}</i>,
    {{ item.authors }},
    {{ item.publication_date }},
    {{ item.doi }} 
    </li>
{%- endfor %}
</ul>