---
layout: project_summary
excerpt: "Lists of our grants, funding and projects."
search_omit: false
---

<h1 class="entry-title">Active Projects</h1>
<ul class="post-list">
{% assign projects = site.posts | where: 'categories', 'active_project' %}
{% for post in projects %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>

<h1 class="entry-title">Research Grants</h1>
<ul class="post-list">
{% assign grants = site.posts | where: 'categories', 'grant' %}
{% for post in grants %}
  <li><article><a href="">{{ post.title }} <span class="entry-date"><time datetime="{{ post.fromDate | date_to_xmlschema }}">{{ post.fromDate | date: "%B %d, %Y" }}</time>~<time datetime="{{ post.toDate | date_to_xmlschema }}">{{ post.toDate | date: "%B %d, %Y" }}</time></span>{% if post.number %} <span class="excerpt">({{ post.number | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }})</span>{% endif %}</a></article></li>
{% endfor %}
</ul>

<h1 class="entry-title">Awards</h1>
<ul class="post-list">
{% assign awards = site.posts | where: 'categories', 'award' %}
{% for post in awards %}
  <li><article><a href="">{{ post.title }} <span class="entry-date"><time datetime="{{ post.fromDate | date_to_xmlschema }}">{{ post.fromDate | date: "%B %d, %Y" }}</time>~<time datetime="{{ post.toDate | date_to_xmlschema }}">{{ post.toDate | date: "%B %d, %Y" }}</time></span>{% if post.number %} <span class="excerpt">({{ post.number | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }})</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
