---
title: Li Dingxin's Blog
layout: default
---
<link rel="stylesheet" href="{{ '/assets/css/blog.css' | relative_url }}">

<!-- 添加blog.html，使其在任何界面都可以访问 -->
{% include blog.html %}
{% for post in site.posts %}
  <div class="post-excerpt">
      <a href="{{ post.url }}" class="no-underline">
      <h2>{{ post.title }}</h2>
      {{ post.excerpt }}
    </a>
  </div>
{% endfor %}
