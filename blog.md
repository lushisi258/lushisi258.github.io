---
title: Li Dingxin's Blog
layout: default
---
<link rel="stylesheet" href="{{ '/assets/css/blog.css' | relative_url }}">


{% for post in site.posts %}
  <div class="post-excerpt">
      <a href="{{ post.url }}" class="no-underline">
      <h2>{{ post.title }}</h2>
      {{ post.excerpt }}
    </a>
  </div>
{% endfor %}
