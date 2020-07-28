---
layout: default
title: Home
---

# LEDCoyote Internet Place
Greetings from Charlie! Short thoughts, reactions, and noodling in the blog<!--, while more developed and longer pieces are under essays-->.

## Contents

### Latest Blog Posts [(all)](/blog)
<div class="home-blog-list">
{% for post in site.posts limit:1 %}
<a href="{{ post.url }}">
  {{ post.date | date: '%Y-%m-%d' }}: {{ post.title }}
</a>
<div class="home-excerpt">
  {{ post.excerpt }}
</div>
{% endfor %}
{% for post in site.posts offset:1 limit:4 %}
<p><a href="{{ post.url }}">
  {{ post.date | date: '%Y-%m-%d' }}: {{ post.title }}
</a></p>
{% endfor %}
</div>

<!--
### Essays
placeholder
-->