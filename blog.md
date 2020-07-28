---
layout: default
title: Blog
---

# Blog Posts

<div class="listing">
<ul>
  {% for post in site.posts %}
    <li>
      <div class="date">
        {{ post.date | date: '%Y-%m-%d' }}:
      </div>
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