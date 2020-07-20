# coffeeSalesChartVisualization
In this assignment you will create two bar charts on the same web page. The bar charts show the total coffee sales for a chain of coffee shops. Your submission should create a web page containing a visualization that looks like this:

The first bar chart shows the total sales per region (i.e. Central, West, East, South). The second bar chart shows the total sales per product category (i.e. Coffee, Tea, Espresso, Herbal Tea).

Dataset: You will use the dataset coffee_data.csv (on Canvas, in the Datasets folder) to create both of these charts.

Notice, that this dataset is not in the form that you will need. You will need to aggregate the data for the region and category data attributes and then compute the total sales. For this assignment, you are required to accomplish this with JavaScript code (the d3-nest function is a great place to start). Do not use Excel, Python, etc. to create the aggregated dataset.

Reminder that this is an individual assignment. The code you turn in should be your own creation. You are certainly welcome to seek assistance from the TAs as you work on the assignment, however.

Starter code
The started code for this assignment can be found on Canvas in the “Starter Code” folder under the Files section. You are required to use the starter code for this programming assignment. Note that since this is rendering static SVG, there is no need to run a local server to host this code. In the later assignments, you will need to host the folder to see what you’re building.

What to turn in
You will submit your code via Canvas. Compress your code into a zip file, and remember to name it LastName_FirstName.zip (e.g., Endert_Alex.zip). Upload and submit this zip file to Canvas by the deadline.

Grading
Your assignment will be graded along the following requirements:

Creates 2 bar charts that show the required data from the instructions (1 chart for regional sales, 1 chart for sales by product category) – we will check to make sure the bar charts are data accurate.
Your code processes the raw data (all of the sales data rows) to create a data structure for the 2 charts – d3.nest() is a good place to look – you will lose points if your JavaScript code does not process the data and you instead used another tool such as Excel to create an aggregated dataset file.
You are required to add labels and axes for both charts.
We will unzip your .zip file and host the directory using a python webserver. Your folder and file structure (and naming) will need to allow this to work.
You will not be graded on any of the following:

The styling of the charts, axes or labels (you still have to have them)
The colors you decide to use
The spacing or width of the bars
Conventions or legible D3 code
