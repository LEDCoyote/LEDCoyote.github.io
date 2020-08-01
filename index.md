---
layout: default
title: Home
---

# LEDCoyote Internet Place
> Because I'm addicted to bad ideas and all the beauty in this world.
>
> _World / Inferno Friendship Society_

## Contents

### Latest [(all)](/updates)
<div class="home-blog-list">
{% for post in site.posts limit:1 %}
<a class="home-post-link" href="{{ post.url }}">
  {{ post.date | date: '%Y-%m-%d' }}: {{ post.title }}
</a>
<div class="home-excerpt">
  {{ post.excerpt }}
</div>
{% endfor %}
{% for post in site.posts offset:1 limit:4 %}
<a class="home-post-link" href="{{ post.url }}">
  {{ post.date | date: '%Y-%m-%d' }}: {{ post.title }}
</a>
{% endfor %}
</div>

<!--
### Essays
-->

<!--
### Stories & Poems
-->