{%- if site.extensions.size > 0 -%}
  <h2 class="post-list-heading">{{ page.list_title | default: "Extensions" }}</h2>
  <ul class="post-list">
    {%- for extension in site.extensions -%}
    {%- if extension.featured -%}
    <li>
      <h3>
        <a class="post-link" href="{{ extension.website }}" target="_blank">
          {{ extension.title | escape }} <span class="arrow">&#x2197;</span>
        </a>
      </h3>
      {%- if site.show_excerpts -%}
        {{ extension.excerpt }}
      {%- endif -%}
      <p><a class="download-link" href="https://chrome.google.com/webstore/detail/{{ extension.chrome_id }}?ref=essentialkit_featured" target="_blank">Add to Chrome</a></p>
    </li>
    {%- endif -%}
    {%- endfor -%}
  </ul>
{%- endif -%}

[View all]({{ site.base_url }}{% link _pages/extensions.md %})