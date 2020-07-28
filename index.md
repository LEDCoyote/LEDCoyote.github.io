---
layout: default
title: Home
---

# LEDCoyote Internet Place
Greetings from Charlie! Short thoughts, reactions, and noodling in the blog<!--, while more developed and longer pieces are under essays-->.

## Contents

### Latest Blog Posts [(all)](/blog)
{% for post in site.posts limit:1 %}
<a href="{{ post.url }}">
  {{ post.date | date: '%Y-%m-%d' }}: {{ post.title }}
</a>
{{ post.excerpt }}
{% endfor %}
{% for post in site.posts offset:1 limit:4 %}
<a href="{{ post.url }}">
  {{ post.date | date: '%Y-%m-%d' }}: {{ post.title }}
</a>
{% endfor %}

<!--
### Essays
placeholder
-->