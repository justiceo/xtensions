---
permalink: /extensions
layout: page
title: Extensions
---


{%- if site.extensions.size > 0 -%}
  <ul class="post-list">
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    {%- for extension in site.extensions -%}    
    <li>
      <span class="post-meta">{{ extension.published_date | date: date_format }}</span>
      <h3>
        <a class="post-link" href="{{ extension.website }}" target="_blank">
          {{ extension.title | escape }} <span class="arrow">&#x2197;</span>
        </a>
      </h3>
      {%- if site.show_excerpts -%}
        {{ extension.excerpt }}
      {%- endif -%}
      <p><a class="download-link" href="https://chrome.google.com/webstore/detail/{{ extension.chrome_id }}?ref=essentialkit_archive" target="_blank">Add to Chrome</a></p>
    </li>
    {%- endfor -%}
  </ul>
{%- endif -%}
