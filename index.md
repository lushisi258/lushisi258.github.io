---
layout: default
---

<div class="intro">
  <h1>欢迎来到我的博客</h1>
  <p>这里是网站简介...</p>
</div>

{% for post in site.posts %}
  <div class="post">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  </div>
{% endfor %}