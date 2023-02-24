---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'Active WeaSuL: Improving Weak Supervision with Active Learning'
subtitle: ''
summary: ''
authors:
- Samantha Biegel
- Rafah El-Khatib
- Luiz Otavio V. B. Oliveira
- Max Baak
- Nanne Aben
tags: []
categories: []
date: '2021-01-01'
lastmod: 2021-05-04T20:35:45+02:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2021-05-04T19:20:54.871577Z'
publication_types:
- '1'
abstract: 'The availability of labelled data is one of the main limitations in machine
  learning. We can alleviate this using weak supervision: a framework that uses expert-defined
  rules λ to estimate probabilistic labels p(y|λ) for the entire data set. These rules,
  however, are dependent on what experts know about the problem, and hence may be
  inaccurate or may fail to capture important parts of the problem-space. To mitigate
  this, we propose Active WeaSuL: an approach that incorporates active learning into
  weak supervision. In Active WeaSuL, experts do not only define rules, but they also
  iteratively provide the true label for a small set of points where the weak supervision
  model is most likely to be mistaken, which are then used to better estimate the
  probabilistic labels. In this way, the weak labels provide a warm start, which active
  learning then improves upon. We make two contributions: 1) a modification of the
  weak supervision loss function, such that the expert-labelled data inform and improve
  the combination of weak labels; and 2) the maxKL divergence sampling strategy, which
  determines for which data points expert labelling is most beneficial. Our experiments
  show that when the budget for labelling data is limited (e.g. ≤60 data points),
  Active WeaSuL outperforms weak supervision, active learning, and competing strategies,
  with only a handful of labelled data points. This makes Active WeaSuL ideal for
  situations where obtaining labelled data is difficult.'
publication: '*ICLR 2021 Workshop on Weakly Supervised Learning*'
url_pdf: https://arxiv.org/abs/2104.14847
---
