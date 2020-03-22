---
title: Visualizing COVID-19 cases with Plotly (confirmed cases)
date: 2020-03-21
---

# The Data

The Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE) maintain a [GitHub repository with daily updated information about the Corona Virus](https://github.com/CSSEGISandData/COVID-19). They also provide a dashboard to interact with the data.

However, even their dashboard doesn’t provide the information I would like to see: **The evolution over time of the number of cases/deaths/recovery patients per country**. Assuming that others are also interested on this information, I am sharing the plots I made with `plotly`.

You are more than welcome to modify the notebook to predict the number of cases and do other types of analysis. The notebook can be found in my **[GitHub repository](https://github.com/luizvbo/notebooks/blob/master/corona-plots-plotly.ipynb)**.

The data is split into three plots:

- [COVID-19 confirmed cases](coronavirus-cases)
- [COVID-19 deaths](../coronavirus-deaths)
- [COVID-19 recovered cases](coronavirus-recovered)

Bellow you can see the data for all the **confirmed cases** (total and per day).

<iframe id="igraph" scrolling="no" style="border:none;"
        seamless="seamless" src="plot_confirmed.html" height="600px" width="100%">
</iframe>'
