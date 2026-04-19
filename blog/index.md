---
layout: default
title: Blog
---

<section class="container post-container blog-page">
  <div class="blog-hero">
    <p class="blog-kicker">Insights & Engineering Notes</p>
    <h1>Blog</h1>
    <p class="blog-subtitle">
      Practical writing on machine learning, NLP systems, and software engineering decisions that ship.
    </p>
  </div>

  <div class="blog-list">
    {% for post in site.posts %}
    <article class="blog-card">
      <div class="blog-card-meta">
        <span class="blog-date">{{ post.date | date: "%B %-d, %Y" }}</span>
        {% if post.authors %}
          <span class="blog-divider">•</span>
          <span class="blog-authors">{{ post.authors | join: ", " }}</span>
        {% elsif post.author %}
          <span class="blog-divider">•</span>
          <span class="blog-authors">{{ post.author }}</span>
        {% endif %}
      </div>

      <h2 class="blog-title">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h2>

      <p class="blog-excerpt">
        {{ post.excerpt | strip_html | truncatewords: 34 }}
      </p>

      <a href="{{ post.url }}" class="card-link">Read article →</a>
    </article>
    {% endfor %}
  </div>
</section>
