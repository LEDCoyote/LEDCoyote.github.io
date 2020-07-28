---
layout: default
title: Blog
---

# Blog Posts

<ul>
  {% for post in site.posts %}
    <li>
      <h2>
        {{ page.date | date: '%Y-%m-%d' }}:
        <a href="{{ post.url }}">
          {{ post.title }}
        </a>
      </h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>