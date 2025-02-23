{%- if site.extensions.size > 0 -%}

  <h2 class="post-list-heading">Featured Extensions</h2>
  <ul class="post-list">
    {%- for extension in site.extensions -%}
    {%- if extension.show_on_homepage -%}
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
      <p><a class="download-link" href="https://chrome.google.com/webstore/detail/{{ extension.chrome_id }}?ref=xtensions.net" target="_blank">Add to Chrome</a>
      </p>
    </li>
    {%- endif -%}
    {%- endfor -%}
  </ul>
{%- endif -%}

[View all]({{ site.base_url }}{% link _pages/extensions.md %})
