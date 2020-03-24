---
title: Visualizing the number of COVID-19 deaths with Plotly
date: 2020-03-21
---

I would like to see: **The evolution over time of the number of cases/deaths/recovery patients per country**. Assuming that others are also interested in this information, I am sharing the plots I made with `plotly`.

The Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE) maintain a [GitHub repository with daily updated information about the Corona Virus](https://github.com/CSSEGISandData/COVID-19). They also provide a dashboard to interact with the data (however, even their dashboard doesn’t provide the plot I was looking for).

You are more than welcome to modify the notebook to predict the number of cases and do other types of analysis. The notebook can be found in my **[GitHub repository](https://github.com/luizvbo/notebooks/blob/master/corona-plots-plotly.ipynb)**.

The data is split into three plots:

- [COVID-19 confirmed cases](../coronavirus-confirmed)
- [COVID-19 deaths](../coronavirus-death)
- [COVID-19 recovered cases](../coronavirus-recovered)

Bellow, you can see the data for the **deaths** caused by COVID-19 (total and per day).

You can select countries to compare the data. If you are having problems to visualise the plot, you can try the [clean html version from this link](../coronavirus-death/plot-death.html)

<iframe id="igraph" scrolling="no" style="border:none;"
        seamless="seamless" src="plot-death.html" height="1500px" width="100%">
</iframe>'
