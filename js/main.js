// **** Your JavaScript code goes here ****
//NOTE: this is the D3 v4 loading syntax. For more details, see https://piazza.com/class/jnzgy0ktwi34lk?cid=75.

// Set the margins
var margin = {top: 60, right: 100, bottom: 50, left: 80},
  width = 850 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

// Parse the date variable
var parseDate = d3.timeParse("%m/%d/%y");
var formatDate = d3.timeFormat("%m/%d/%y");

// Set the ranges
var x = d3.scaleBand().rangeRound([0, width / 2 - 50]).padding(0.1)
var y = d3.scaleLinear().range([height, 0]);

var a = d3.scaleBand().rangeRound([width / 2 + 50, width]).padding(0.1)
var b = d3.scaleLinear().range([height, 0]);

// Create the svg canvas in the "graph" div
var svg = d3.select("#graph")
        .append("svg")
        .style("width", width + margin.left + margin.right + "px")
        .style("height", height + margin.top + margin.bottom + "px")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")")
        .attr("class", "svg");

d3.csv("./data/coffee_data.csv", function(data){
  // Format the data
  data.forEach(function(d) {
      d.date = parseDate(d.date);
      d.sales = +d.sales;
      d.category = d.category;
      d.region = d.region;
  });
  var nest = d3.nest()
	  .key(function(d){
	    return d.region;
	  })
	  .sortKeys(d3.ascending)
	  .rollup(function(leaves){
	 		return d3.sum(leaves, function(d) {return (d.sales)});
		})
	  .entries(data)

    console.log(nest)

  x.domain(nest.map(function(d) { return d.key; }));
  y.domain([0, d3.max(nest, function(d) { return d.value; })]);

  a.domain(nest.map(function(d) { return d.key; }));
  b.domain([0, 1000 + d3.max(nest, function(d) { return d.value; })]);


  var xaxis = svg.append("g")
       .attr("transform", "translate(0," + height + ")")
       .attr("class", "x axis")
       .call(d3.axisBottom(x)
          .tickSize(0, 0)
          .tickSizeInner(0)
          .tickPadding(10));

   var yaxis = svg.append("g")
       .attr("class", "y axis")
       .call(d3.axisLeft(y)
          .ticks(5)
          .tickSizeInner(0)
          .tickPadding(6)
          .tickSize(0, 0));

  // Add a label to the y axis
  svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -70)
        .attr("x", -(height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Coffee Sales(USD)")
        .attr("class", "y axis label");

  // add a label to the x axis
  svg.append("text")
        .attr("y", height + 20)
        .attr("x", width / 4 - 25)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Region")
        .attr("class", "x axis label");

  // add a label to the chart
  svg.append("text")
        .attr("y", -50)
        .attr("x", width / 4 - 25)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Coffee Sales by Region(USD)")
        .attr("class", "chart1 label");


  // Draw the bars
  svg.selectAll(".rect")
      .data(nest)
      .enter()
      .append("rect")
      	.attr("class", "bar")
	      .attr("x", function(d) { return x(d.key); })
	      .attr("y", function(d) { return y(d.value); })
	      .attr("width", x.bandwidth()) //width of the bar
	      .attr("height", function(d) { return height - y(d.value); });

//second graph
  var nest = d3.nest()
          .key(function(d){
            return d.category;
          })
          .sortKeys(d3.alphabetical)
          .rollup(function(leaves){
            return d3.sum(leaves, function(d) {return (d.sales)});
          })
          .entries(data)

          console.log(nest)

        a.domain(nest.map(function(d) { return d.key; }));
        b.domain([0, d3.max(nest, function(d) { return d.value; })]);

        var aaxis = svg.append("g")
             .attr("transform", "translate(0," + height + ")")
             .attr("class", "a axis")
             .call(d3.axisBottom(a)
                .tickSize(0, 0)
                .tickSizeInner(0)
                .tickPadding(10));

         var baxis = svg.append("g")
             .attr("transform", "translate(" +  (width / 2 + 50) + ", 0)")
             .attr("class", "b axis")
             .call(d3.axisLeft(b)
                .ticks(5)
                .tickSizeInner(0)
                .tickPadding(6)
                .tickSize(0, 0));

        // Add a label to the a axis
        svg.append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", width / 2 - 25)
              .attr("x", -height / 2)
              .attr("dy", "1em")
              .style("text-anchor", "middle")
              .text("Coffee Sales(USD)")
              .attr("class", "b axis label");

        // add a label to the a axis
        svg.append("text")
              .attr("y", height + 20)
              .attr("x", width * 3 / 4 + 25)
              .attr("dy", "1em")
              .style("text-anchor", "middle")
              .text("Product")
              .attr("class", "a axis label");

        // add a label to the chart2
        svg.append("text")
              .attr("y", -50)
              .attr("x", width * 3 / 4 + 25)
              .attr("dy", "1em")
              .style("text-anchor", "middle")
              .text("Coffee Sales by Product(USD)")
              .attr("class", "chart2 label");


        // Draw the bars
        svg.selectAll(".rect")
            .data(nest)
            .enter()
            .append("rect")
                .attr("class", "bar")
              .attr("x", function(d) { return a(d.key); })
              .attr("y", function(d) { return b(d.value); })
              .attr("width", a.bandwidth()) //width of the bar
              .attr("height", function(d) { return height - b(d.value); });


});
