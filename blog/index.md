---
layout: default
title: Blog
---

<section class="container post-container">
    <div class="blog-header">
        <h1>Blog</h1>
        <p>
            Thoughts on machine learning, software engineering, and building scalable systems.
        </p>
    </div>

    <div class="blog-grid">
        {% for post in site.posts %}
        <article class="blog-card">
            <span class="blog-date">{{ post.date | date: "%B %-d, %Y" }}</span>
            <h2 class="blog-title">
                <a href="{{ post.url }}">{{ post.title }}</a>
            </h2>
            <p class="blog-excerpt">
                {{ post.excerpt | strip_html | truncatewords: 30 }}
            </p>
            <a href="{{ post.url }}" class="card-link">Read Article →</a>
        </article>
        {% endfor %}
    </div>
</section>