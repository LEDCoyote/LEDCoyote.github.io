---
layout: default
title: Blog
---

# Blog Posts

<div class="listing">
<ul>
  {% for post in site.posts %}
    <li>
      <h2>
        <a href="{{ post.url }}">
          {{ post.title }}
        </a>
      </h2>
      <div class="date">
        {{ post.date | date: '%Y-%m-%d' }}:
      </div>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
</div>