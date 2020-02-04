+++
# Experience widget.
widget = "experience"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 40  # Order that this section will appear.

title = "Experience"
subtitle = ""

# Date format for experience
#   Refer to https://sourcethemes.com/academic/docs/customization/#date-format
date_format = "Jan 2006"

# Experiences.
#   Add/remove as many `[[experience]]` blocks below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin/end multi-line descriptions with 3 quotes `"""`.
[[experience]]
  title = "Data Scientist"
  company = "ING WBAA"
  company_url = "http://ing.com"
  location = "Amsterdam, Netherlands"
  date_start = "2019-02-01"
  date_end = ""
  description = """
  - Name matching project: Fuzzy matching millions of names using multiple stages (cosine similarity + MLP on (py)Spark)
  - Name screening: Reducing false positives from name screening using Levenshtein distance, cos. similarity, Jaro-Winkler for feature extraction with LightGBM
  - "Fraud" detection: Anomaly detection (One-class SVM, Isolation Forest), address parsing (libpostal), database statistics monitor
  """

[[experience]]
  title = "Professor"
  company = "University X"
  company_url = ""
  location = "California"
  date_start = "2016-01-01"
  date_end = "2016-12-31"
  description = """
  I was involved in all the process of building predictive models for investment risk in startups. The process involves:
  - Retrieving data from different sources, including scrapping data from the web (using selenium with Beautiful Soup).
  - Analysing the data, using Jupyter notebooks, pandas, matplotlib, dash.
  - Building Machine Learning models using Random Forest, GRU, SVM to fit our prediction problems.
  - Feature selection/engineering.

  """

+++
