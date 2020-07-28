---
layout: default
title: Blog
---

# Blog Posts

<div class="listing">
<ul>
  {% for post in site.posts %}
    <li>
      {{ post.date | date: '%Y-%m-%d' }}:
      <h2>
        <a href="{{ post.url }}">
          {{ post.title }}
        </a>
      </h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
</div>