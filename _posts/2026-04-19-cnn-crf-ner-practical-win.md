---
layout: post
title: "A Practical CNN + CRF NER Model That Beat BERT"
date: 2026-04-19
authors:
  - Pratik Pranav
  - Siddharth Jain
tags: [Machine Learning, NLP, NER, Production Systems]
excerpt: "How a lightweight CNN + CRF architecture outperformed a BERT baseline on our NER task with a major speedup."
---

When people talk about Named Entity Recognition today, the first answer is usually BERT or some transformer model. That makes sense because these models are strong and have done well across many language tasks. But in real applied machine learning work, the biggest or most popular model is not always the right one.

The better question is much simpler: what works well on your data, what gives stable results, and what can run fast enough to be useful in a real system? That is the direction we took while building our NER model, and interestingly, the answer for us was not a heavy transformer setup.

Our approach was built around a fairly simple idea. Instead of depending fully on a large language architecture for everything, we started with a pretrained embedding model to get strong language representations, then used a CNN to learn local text patterns, and finally used a CRF layer to make the final tag sequence cleaner and more consistent.

At a high level, that is the architecture:

- **Pretrained embeddings** for strong initial language understanding
- **CNN layers** to capture local context and phrase-level signals
- **CRF decoding** to enforce cleaner and more valid output tag sequences

What I like about this setup is that each part has a clear responsibility. The embeddings bring language understanding. The CNN brings efficiency and local pattern learning. The CRF brings structure to final predictions. There is no unnecessary complexity, and that is exactly why it worked well for us.

In many practical NER problems, you do not always need a very large model reasoning across everything in a deep way. A lot of value comes from understanding local context properly and predicting entity spans consistently. If the representation is already good and the data has repeatable patterns, a lighter architecture can perform very strongly.

On our data, this model performed better than our BERT-based baseline. The BERT-based model was around **61%**, while this model reached around **67%**. On top of that, it was roughly **10× faster**.

That is the kind of outcome that gets your attention quickly because people often assume a simpler model may gain speed but lose quality. In our case, that did not happen. We saw a meaningful lift in performance while also getting a major speed improvement. That made the model not just better on metrics, but far more practical for real usage.

I think this is an important reminder for anyone working on applied ML systems. There is often too much focus on whether a model is state of the art in a general benchmark sense, and not enough focus on whether it is the right fit for the specific task.

In production settings, speed matters. Serving cost matters. Simplicity matters. Ease of iteration matters. If a model is fashionable but slower, harder to tune, and not better on your data, that is not much of a win. In contrast, if a model gives better accuracy and is 10 times faster, it changes the whole deployment discussion.

For us, this was not about avoiding transformers for the sake of it. It was about being honest about the task and choosing an architecture that matched it well. A pretrained embedding model gave us strong starting features. A CNN captured the local signals that matter in NER. A CRF cleaned up the final sequence predictions.

Together, they gave us a model that was simpler, faster, and better on our dataset than the BERT baseline. In the end, that is what matters most: not whether the architecture sounds impressive, but whether it solves the problem well.
