---
layout: default
title: Home
---

# LEDCoyote Internet Place
> Though I have grown older and graver,
> The great heart of the world remains ever young.
> I wasn't always a monster, I was a prince.
> Now, so broken, so.
>
> _Addicted to Bad Ideas_
> _World / Inferno Friendship Society_

## Contents

### Latest Blog Posts [(all)](/blog)
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
placeholder
-->

<!--
### Stories & Poems
-->