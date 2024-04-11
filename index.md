---
layout: base
---

# My Blog
Welcome to my blog!

Here are my latest posts:

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
{% endfor %}