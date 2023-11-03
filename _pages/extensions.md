---
permalink: /extensions
layout: page
title: Extensions
---


{%- if site.extensions.size > 0 -%}
  <ul class="post-list">
    {%- for extension in site.extensions -%}
    <li>
      <h3>
        <a class="post-link" href="{{ extension.url }}">
          <img src="{{ extension.logo_128 }}" />
          {{ extension.title | escape }}
        </a>
      </h3>
      {%- if site.show_excerpts -%}
        {{ extension.excerpt }}
      {%- endif -%}
      <p><a class="download-link" href="https://chrome.google.com/webstore/detail/{{ extension.chrome_id }}?ref=essentialkit_featured" target="_blank">Add to Chrome</a>
      </p>
    </li>
    {%- endfor -%}
  </ul>
{%- endif -%}
