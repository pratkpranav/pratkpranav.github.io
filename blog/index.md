---
layout: default
title: Blog
---

<section class="container post-container">
    <div class="blog-header">
        <h1 class="gradient-text" style="font-size: 3.5rem; margin-bottom: 1rem;">Blog</h1>
        <p style="color: var(--text-secondary); font-size: 1.2rem; max-width: 600px; margin: 0 auto;">
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