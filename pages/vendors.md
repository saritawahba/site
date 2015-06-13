---
layout: page
show_meta: false
title: "Sell your craft"
subheadline: "Layouts of Feeling Responsive"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/vendors/"
---
<ul>
    {% for post in site.categories.design %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>