---
layout: default
title: Home
---

<h1 class="page-title">LEDCoyote Internet Place</h1>
> Because I'm addicted to bad ideas and all the beauty in this world.
>
> _World / Inferno Friendship Society_

## Contents

### Latest Update
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
[_...view all_](/updates)

<!--
### Essays
-->

<!--
### Stories & Poems
-->