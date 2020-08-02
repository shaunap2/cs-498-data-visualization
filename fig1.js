"use strict";

// GLOBAL STATE
var h = 600
var w = 800
var padding = 50
var bb = true;

/* SHARED */

function selectData(selectionId) {
  console.log("selectData: " + selectionId);

  var data_00 = [{key: "a", value: 10}, {key: "b", value: 20}, {key: "c", value: 30}, {key: "d", value: 40}, {key: "e", value: 50}, {key: "f", value: 60}, {key: "g", value: 70}, {key: "h", value: 80}, {key: "i", value: 90}, {key: "j", value: 100}];
  var data_01 = [{key: "m", value: 110}, {key: "n", value: 120}, {key: "o", value: 130}, {key: "p", value: 140}];
  var data_02 = [{key: "x", value: 7}, {key: "y", value: 9}, {key: "z", value: 42}];

  if(selectionId % 2 === 0) {
    console.log(0);
    return data_00;
  } else if(selectionId % 3 === 0) {
    console.log(1);
    return data_01;
  } else {
    console.log(2);
    return data_02;
  }
}

function populateSelect() {
  var data = [[1, 'foobarbaz'], [2, 'abc'], [3, 'def'], [4, 'ghi'], [5, 'jkl'], [6, 'mno']];

  d3.select("#myselect")
    .selectAll("option")
    .data(data)
    .enter()
    .append("option")
    .attr("value", function(d) { return d[0]; })
    .property("selected", function(d) { return d[0] === 3; })
    .text(function(d) { return d[1]; })
    ;
}

/* SCATTER PLOT FUNCTIONS */

function bodyLoadScatterPlot() {
  console.log("bodyLoadScatterPlot");

  var data = selectData(0);
  initializeScatterPlot(data)
  updateScatterPlot(data);

  populateSelect();
}

function initializeScatterPlot(data) {
  console.log("initializeScatterPlot");

  // Define the SVG canvas size.
  var myfigure = d3.select("#myfigure")
    .attr("width", w)
    .attr("height", h)
    ;

  // Define scales.
  var xScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d; })])
    .range([padding, w - padding * 2])
    ;

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d; })])
    .range([h - padding, padding])
    ;

  // Define axes.
  var xAxis = d3.axisBottom()
    .scale(xScale)
    ;

  var yAxis = d3.axisLeft()
    .scale(yScale)
    ;

  myfigure
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis)
    ;

  myfigure
    .append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis)
    ;
}

function updateScatterPlot(data) {
  console.log("updateScatterPlot");

  // Figure for updating
  var myfigure = d3.select("#myfigure");

  // Update scales.
  var xScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d; })])
    .range([padding, w - padding * 2])
    ;

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d; })])
    .range([h - padding, padding])
    ;

  var aScale = d3.scaleSqrt()
    .domain([0, d3.max(data, function(d) { return d; })])
    .range([0, 10]);

  // General Update Pattern
  var dots = myfigure.selectAll("circle").data(data);

  dots.enter()
    .append("circle")
    .merge(dots)
    .append("title")
    .text(function(d) {
      return "The current value is " + d;
    })
    ;

  dots.exit().remove();

  // Apply transition on figure load. Done here to avoid delays in tool tip pop ups.
  dots = myfigure.selectAll("circle");

  dots.transition()
    .duration(2000)
    .attr("r", function(d) { return aScale(d); })
    .attr("cx", function(d, i) { return xScale(d); })
    .attr("cy", function(d, i) { return yScale(d); })
    .attr("fill", "purple")
    ;

  // Update axes.
  var xAxis = d3.axisBottom()
    .scale(xScale)
    ;

  var yAxis = d3.axisLeft()
    .scale(yScale)
    ;

  myfigure
    .select("g.x.axis")
    .call(xAxis)
    ;

  myfigure
    .select("g.y.axis")
    .call(yAxis)
    ;

  // Add mouseover events.
  dots
    .on("mouseover", function(d) {
      d3.select(this).attr("fill", bb ? "orange" : "red");
    })
    .on("mouseout", function(d) {
      d3.select(this).attr("fill", "black");
    })
    ;

  // Update pop up text. This works because 'title' elements were created in the GUP above for each circle.
  dots
    .select("title")
    .text(function(d) {
      return "The current value is " + d;
    })
    ;

  // Toggle mouseover color for grins.
  bb = !bb;
}

function onSelectChangeScatterPlot() {
  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectChangeScatterPlot: " + newSelection);
  updateScatterPlot(selectData(newSelection));
}

/* BAR CHART FUNCTIONS */

function bodyLoadBarChartEarthquakeCountByCountry() {
  console.log("bodyLoadBarChartEarthquakeCountByCountry");

  initializeBarChart(earthquake_count_by_country);
  updateBarChart(earthquake_count_by_country, false, false);
}

function bodyLoadBarChartEarthquakeCountByRegion() {
  console.log("bodyLoadBarChartEarthquakeCountByRegion");

  initializeBarChart(earthquake_count_by_region);
  updateBarChart(earthquake_count_by_region, false, false);
}

function bodyLoadBarChart() {
  console.log("bodyLoadBarChart");

  var data = selectData(0);
  initializeBarChart(data, true)
  updateBarChart(data, true, false);

  populateSelect();
}

function initializeBarChart(data, showXaxis) {
  console.log("initializeBarChart");

  // Define the SVG canvas size.
  var myfigure = d3.select("#myfigure")
    .attr("width", w)
    .attr("height", h)
    ;

  // Define scales.
  var xScale = d3.scaleBand()
    .domain(data.map(function(d) { return d.key; }))
    .rangeRound([padding, w - padding * 2])
    .paddingInner(0.05)
    ;

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.value; })])
    .range([h - padding, padding])
    ;

  // Define axes.
  if(showXaxis) {
    var xAxis = d3.axisBottom()
      .scale(xScale)
      ;

    myfigure
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis)
      ;
  }

  var yAxis = d3.axisLeft()
    .scale(yScale)
    ;

  myfigure
    .append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis)
    ;
}

var barChartMouseOverOriginalColor = "blue";

function updateBarChart(data, showXaxis, useScaleOrdinal) {
  console.log("updateBarChart");

  // Figure for updating
  var myfigure = d3.select("#myfigure");

  // Update scales.
  var xScale = d3.scaleBand()
    .domain(data.map(function(d) { return d.key; }))
    .rangeRound([padding, w - padding * 2])
    .paddingInner(0.05)
    ;

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.value; })])
    .range([h - padding, padding])
    ;

  var colorScale = d3.scaleSequential(d3.interpolateReds)
    .domain([0, d3.max(data, function(d) { return d.value; })])
    ;

  if(useScaleOrdinal) {
    colorScale = d3.scaleOrdinal().domain(data.map(function(d) { return d.group; }))
    .range(d3.schemeSet3)
    ;
  }

  // General Update Pattern
  var rects = myfigure.selectAll("rect").data(data);

  rects.enter()
    .append("rect")
    .merge(rects)
    .append("title")
    .text(function(d) {
      return d.key + " = " + d.value;
    })
    ;

  rects.exit().remove();

  // Apply transition on figure load. Done here to avoid delays in tool tip pop ups.
  rects = myfigure.selectAll("rect");

  rects.transition()
    .duration(2000)
    .attr("x", function(d) { return xScale(d.key); })
    .attr("y", function(d) { return yScale(d.value); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return h - padding - yScale(d.value); })
    .attr("fill", function(d) { return colorScale(useScaleOrdinal ? d.group : d.value); } )
    .attr("stroke", "grey")
    ;

  // Update axes.
  if(showXaxis) {
    var xAxis = d3.axisBottom()
      .scale(xScale)
      ;

    myfigure
      .select("g.x.axis")
      .call(xAxis)
      ;
  }

  var yAxis = d3.axisLeft()
    .scale(yScale)
    ;

  myfigure
    .select("g.y.axis")
    .call(yAxis)
    ;

  // Add mouseover events.
  rects
    .on("mouseover", function(d) {
      barChartMouseOverOriginalColor = d3.select(this).attr("fill");
      d3.select(this).attr("fill", "red");
    })
    .on("mouseout", function(d) {
      d3.select(this).attr("fill", barChartMouseOverOriginalColor);
    })
    ;

  // Update pop up text. This works because 'title' elements were created in the GUP above for each circle.
  rects
    .select("title")
    .text(function(d) {
      return d.key + " = " + d.value;
    })
    ;
}

function onSelectChangeBarChart() {
  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectChangeBarChart: " + newSelection);
  updateBarChart(selectData(newSelection), true, false);
}

/* LINE CHART FUNCTIONS */

function selectDataLineChart(selectionId) {
  console.log("selectData: " + selectionId);

  var data_00 = [
    [[10, 20], [30, 40], [50, 60], [70, 80], [90, 100]],
    [[110, 120], [130, 140], [180, 10]],
    [[7, 9], [42, 44], [250, 180], [300,4]]
  ];


  var data_01 = [
    [[30, 50], [70, 80], [90, 10], [110, 44], [150, 200]],
    [[5, 120], [20, 140], [80, 10]],
    [[7, 99], [142, 44], [189, 180], [200,45]]
  ];

  if(selectionId % 2 === 0) {
    console.log(0);
    return data_00;
  } else {
    console.log(1);
    return data_01;
  }
}

function bodyLoadLineChart() {
  console.log("bodyLoadLineChart");

  var data = selectDataLineChart(0);
  initializeLineChart(data)
  updateLineChart(data);

  populateSelect();
}

/* Find max value in 2 deep nested arrays. */
function findmax(data, level) {
  var max = 0;
  for(var i = 0; i < data.length; i++) {
    for(var j = 0; j < data[i].length; j++) {
      var temp = data[i][j][level]
      if(temp > max) {
        max = temp;
      }
    }
  }
  return max;
}

function initializeLineChart(data) {
  console.log("initializeLineChart");
  console.log(data);
  console.log("Xmax: " + findmax(data, 0));
  console.log("Ymax: " + findmax(data, 1));

  // Define the SVG canvas size.
  var myfigure = d3.select("#myfigure")
    .attr("width", w)
    .attr("height", h)
    ;

  // Define scales.
  var xScale = d3.scaleLinear()
    .domain([0, findmax(data, 0)])
    .range([padding, w - padding * 2])
    ;

  var yScale = d3.scaleLinear()
    .domain([0, findmax(data, 1)])
    .range([h - padding, padding])
    ;

  // Define axes.
  var xAxis = d3.axisBottom()
    .scale(xScale)
    ;

  var yAxis = d3.axisLeft()
    .scale(yScale)
    ;

  myfigure
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis)
    ;

  myfigure
    .append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis)
    ;
}

function updateLineChart(data) {
  console.log("updateLineChart");

  // Figure for updating
  var myfigure = d3.select("#myfigure");

  // Update scales.
  var xScale = d3.scaleLinear()
    .domain([0, findmax(data, 0)])
    .range([padding, w - padding * 2])
    ;

  var yScale = d3.scaleLinear()
    .domain([0, findmax(data, 1)])
    .range([h - padding, padding])
    ;

  // Helper for line drawing.
  var lineHelper = d3.line()
    .curve(d3.curveLinear)
    //.curve(d3.curveMonotoneX)
    .x(function(d){ return xScale(d[0]); })
    .y(function(d){ return yScale(d[1]); })
    ;

  // General Update Pattern
  var lines = myfigure.selectAll(".line").data(data);

  lines.enter()
    .append("path")
    .attr("class", "line")
    .merge(lines)
    ;

  lines.exit().remove();

  // Apply transition on figure load. Done here to avoid delays in tool tip pop ups.
  lines = myfigure.selectAll(".line");

  lines.transition()
    .duration(2000)
    .attr("d", lineHelper)
    .attr("stroke", function(d, i) { return ["red", "purple", "green"][i]})
    .attr("fill", "none")
    .attr("stroke-width", 3)
    ;

  // Update axes.
  var xAxis = d3.axisBottom()
    .scale(xScale)
    ;

  var yAxis = d3.axisLeft()
    .scale(yScale)
    ;

  myfigure
    .select("g.x.axis")
    .call(xAxis)
    ;

  myfigure
    .select("g.y.axis")
    .call(yAxis)
    ;

  // Add mouseover events.
  /*
  rects
    .on("mouseover", function(d) {
      d3.select(this).attr("fill", bb ? "orange" : "red");
    })
    .on("mouseout", function(d) {
      d3.select(this).attr("fill", "black");
    })
    ;

  // Update pop up text. This works because 'title' elements were created in the GUP above for each circle.
  rects
    .select("title")
    .text(function(d) {
      return "The current value is " + d;
    })
    ;

  // Toggle mouseover color for grins.
  bb = !bb;
  */
}

function onSelectChangeLineChart() {
  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectChangeLineChart: " + newSelection);
  updateLineChart(selectDataLineChart(newSelection));
}
