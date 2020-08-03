"use strict";

// GLOBAL STATE
var h = 700;
var w = 800;
var padding = 80;
var minRadius = 3;
var hoverColor = "royalblue"
var bb = true;

// Format Money Properly
var currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

var commaFormatter = new Intl.NumberFormat("en-US");

/* SHARED */

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

function selectDataScatterPlot(selectionId) {
  console.log("selectData: " + selectionId);

  var data_00 = [{key: 10, value: 10}, {key: 20, value: 20}, {key: 30, value: 30}, {key: 40, value: 40}, {key: 50, value: 50}, {key: 60, value: 60}, {key: 70, value: 70}, {key: 80, value: 80}, {key: 90, value: 90}, {key: 100, value: 100}];
  var data_01 = [{key: 110, value: 110}, {key: 120, value: 120}, {key: 130, value: 130}, {key: 140, value: 140}];
  var data_02 = [{key: 7, value: 7}, {key: 9, value: 9}, {key: 42, value: 42}];

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

function bodyLoadScatterPlot() {
  console.log("bodyLoadScatterPlot");

  var data = selectDataScatterPlot(0);
  initializeScatterPlot(data)
  updateScatterPlot(data);

  populateSelect();
}

function bodyLoadScatterPlotEarthquakeDamageMillionsDollars() {
  console.log("bodyLoadScatterPlotEarthquakeDamageMillionsDollars");
  initializeScatterPlot(earthquake_damage_millions_of_dollars, false, true)
  updateScatterPlot(earthquake_damage_millions_of_dollars, false, true, true, "Damage in Millions of Dollars by Magnitude", "Magnitude", "Damage in Millions of Dollars", true, annotateBarChartEarthquakeDamageMillionsDollars);
}

function annotateBarChartEarthquakeDamageMillionsDollars(isLog) {
  var myfigure = d3.select("#myfigure");

  d3.selectAll(".myannotation1").remove();

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 60)
    .attr("y", 55)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "firebrick")
    .text("Stronger earthquakes cause more damage, driven by a higher rate of occurrence.")
    ;

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 60)
    .attr("y", 70)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "firebrick")
    .text("Dot size corresponds to number of earthquakes at a given magnitude.")
    ;

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 30)
    .attr("y", 670)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "black")
    .text("Hover over for more information.")
    ;

  if(isLog) {
    d3.selectAll(".myannotation2").remove();

    myfigure.append("g")
      .attr("class", "myannotation2")
      .append("circle")
      .transition()
      .duration(2000)
      .attr("r", 105)
      .attr("cx", 610)
      .attr("cy", 115)
      .style("fill", "none")
      .style("stroke", "firebrick")
      ;
  } else {
    d3.selectAll(".myannotation2").remove();

    myfigure.append("g")
      .attr("class", "myannotation2")
      .append("circle")
      .transition()
      .duration(2000)
      .attr("r", 20)
      .attr("cx", 690)
      .attr("cy", 80)
      .style("fill", "none")
      .style("stroke", "firebrick")
      ;

    myfigure.append("g")
      .attr("class", "myannotation2")
      .append("circle")
      .transition()
      .duration(2000)
      .attr("r", 20)
      .attr("cx", 540)
      .attr("cy", 300)
      .style("fill", "none")
      .style("stroke", "firebrick")
      ;

    myfigure.append("g")
      .attr("class", "myannotation2")
      .append("circle")
      .transition()
      .duration(2000)
      .attr("r", 20)
      .attr("cx", 610)
      .attr("cy", 420)
      .style("fill", "none")
      .style("stroke", "firebrick")
      ;
  }
}

function bodyLoadScatterPlotEarthquakeDeaths() {
  console.log("bodyLoadScatterPlotEarthquakeDeaths");
  initializeScatterPlot(earthquake_deaths, false, true)
  updateScatterPlot(earthquake_deaths, false, true, true, "Number of Deaths by Magnitude", "Magnitude", "Number of Deaths", false, annotateBarChartEarthquakeDeaths);
}

function annotateBarChartEarthquakeDeaths(isLog) {
  var myfigure = d3.select("#myfigure");

  d3.selectAll(".myannotation1").remove();

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 20)
    .attr("y", 55)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "firebrick")
    .text("7 to 9 magnitude earthquakes had the most deaths, driven by a higher rate of occurrence.")
    ;

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 20)
    .attr("y", 70)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "firebrick")
    .text("Dot size corresponds to number of earthquakes at a given magnitude.")
    ;

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 30)
    .attr("y", 670)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "black")
    .text("Hover over for more information.")
    ;

  if(isLog) {
    d3.selectAll(".myannotation2").remove();

    myfigure.append("g")
      .attr("class", "myannotation2")
      .append("circle")
      .transition()
      .duration(2000)
      .attr("r", 105)
      .attr("cx", 610)
      .attr("cy", 115)
      .style("fill", "none")
      .style("stroke", "firebrick")
      ;
  } else {
    d3.selectAll(".myannotation2").remove();

    myfigure.append("g")
      .attr("class", "myannotation2")
      .append("rect")
      .transition()
      .duration(2000)
      .attr("x", 530)
      .attr("y", 60)
      .attr("height", 420)
      .attr("width", 180)
      .style("fill", "none")
      .style("stroke", "firebrick")
      ;
  }
}

function initializeScatterPlot(data, logScaleX, logScaleY) {
  console.log("initializeScatterPlot");

  // Define the SVG canvas size.
  var myfigure = d3.select("#myfigure")
    .attr("width", w)
    .attr("height", h)
    ;

  // Define scales.
  var xScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.key; })])
    .range([padding, w - padding])
    ;

  if(logScaleX) {
    xScale = d3.scaleSymlog()
      .domain([0, d3.max(data, function(d) { return d.key; })])
      .range([padding, w - padding])
      ;
  }

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.value; })])
    .range([h - padding, padding])
    ;

  if(logScaleY) {
    yScale = d3.scaleSymlog()
      .domain([0, d3.max(data, function(d) { return d.value; })])
      .range([h - padding, padding])
      ;
  }

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

function updateScatterPlot(data, logScaleX, logScaleY, useGroupForRadius, plotTitle, xLabel, yLabel, showMoney, annotationFunction) {
  console.log("updateScatterPlot");

  // Figure for updating
  var myfigure = d3.select("#myfigure");

  // Update scales.
  var xScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.key; })])
    .range([padding, w - padding])
    ;

  if(logScaleX) {
    xScale = d3.scaleSymlog()
      .domain([0, d3.max(data, function(d) { return d.key; })])
      .range([padding, w - padding])
      ;
  }

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.value; })])
    .range([h - padding, padding])
    ;

  if(logScaleY) {
    yScale = d3.scaleSymlog()
      .domain([0, d3.max(data, function(d) { return d.value; })])
      .range([h - padding, padding])
      ;
  }

  var aScale = d3.scaleSqrt()
    .domain([0, d3.max(data, function(d) { return d.value; })])
    .range([0, 10]);

  // General Update Pattern
  var dots = myfigure.selectAll("circle").data(data);

  dots.enter()
    .append("circle")
    .merge(dots)
    .append("title")
    .text(function(d) {
      var damageString = showMoney ? currencyFormatter.format(d.value) + " in damage." : commaFormatter.format(d.value) + " deaths.";
      return d.group + " total " + d.key + " magnitude earthquakes generated a cumulative " + damageString;
    })
    ;

  dots.exit().remove();

  // Apply transition on figure load. Done here to avoid delays in tool tip pop ups.
  dots = myfigure.selectAll("circle");

  dots.transition()
    .duration(2000)
    .attr("r", function(d) {
      // Do not return a miniscule small radius.
      var radius = useGroupForRadius ? aScale(d.value) : minRadius;
      return radius < minRadius  ? minRadius : radius; }
    )
    .attr("cx", function(d, i) { return xScale(d.key); })
    .attr("cy", function(d, i) { return yScale(d.value); })
    .attr("fill", "firebrick")
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
      barChartMouseOverOriginalColor = d3.select(this).attr("fill");
      d3.select(this).attr("fill", hoverColor);
    })
    .on("mouseout", function(d) {
      d3.select(this).attr("fill", barChartMouseOverOriginalColor);
    })
    ;

  // Update pop up text. This works because 'title' elements were created in the GUP above for each circle.
  dots
    .select("title")
    .text(function(d) {
      var damageString = showMoney ? currencyFormatter.format(d.value) + " in damage." : commaFormatter.format(d.value) + " deaths.";
      return d.group + " total " + d.key + " magnitude earthquakes generated a cumulative " + damageString;
    })
    ;

  // Add Title and Labels
  d3.selectAll(".mytitle").remove();

  myfigure.append("text")
    .attr("class", "mytitle")
    .attr("x", (w / 2))
    .attr("y", (padding / 3))
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("text-decoration", "underline")
    .text(plotTitle);

  d3.select(".myxlabel").remove();

  myfigure.append("text")
    .attr("class", "myxlabel")
    .attr("x", (w / 2))
    .attr("y", h - (padding / 3))
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text(xLabel);

  d3.select(".myylabel").remove();

  myfigure.append("text")
    .attr("class", "myylabel")
    //.attr("x", (padding / 3))
    //.attr("y", (h / 2))
    .attr("x", 0)
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + (padding / 3) + "," + (h / 2) +") rotate(-90)")
    .style("font-size", "12px")
    .text(yLabel);

  // Annotation
  annotationFunction(logScaleY);
}

function onSelectChangeScatterPlot() {
  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectChangeScatterPlot: " + newSelection);
  updateScatterPlot(selectDataScatterPlot(newSelection));
}

function onSelectToggleScaleScatterPlotEarthquakeDeaths(data) {
  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectToggleScaleScatterPlotEarthquakeDeaths: " + newSelection);
  var useLogScale = parseInt(newSelection) === 2 ? true : false;
  updateScatterPlot(earthquake_deaths, false, useLogScale, true, "Number of Deaths by Magnitude", "Magnitude", "Number of Deaths", false, annotateBarChartEarthquakeDeaths);
}

function onSelectToggleScaleScatterPlotEarthquakeDamageMillionsDollars() {
  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectToggleScaleScatterPlotEarthquakeDamageMillionsDollars: " + newSelection);
  var useLogScale = parseInt(newSelection) === 2 ? true : false;
  updateScatterPlot(earthquake_damage_millions_of_dollars, false, useLogScale, true, "Damage in Millions of Dollars by Magnitude", "Magnitude", "Damage in Millions of Dollars", true, annotateBarChartEarthquakeDamageMillionsDollars);
}

/* BAR CHART FUNCTIONS */

function selectDataBarChart(selectionId) {
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

function bodyLoadBarChartEarthquakeCountByCountry() {
  console.log("bodyLoadBarChartEarthquakeCountByCountry");
  initializeBarChart(earthquake_count_by_country, false);
  updateBarChart(earthquake_count_by_country, false, false, "Earthquake Count by Country", "Country", "Total Number of Earthquakes", false, annotateBarChartEarthquakeCountByCountry);
}

function annotateBarChartEarthquakeCountByCountry() {
  var myfigure = d3.select("#myfigure");

  d3.select(".g.myannotation1").remove();

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 240)
    .attr("y", (h / 4))
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "firebrick")
    .text("Majority of earthquakes happen in a small subset of countries: China, Indonesia, Japan, and Iran.")
    ;

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 30)
    .attr("y", 670)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "black")
    .text("Hover over for more information.")
    ;

  d3.select(".g.myannotation2").remove();

  myfigure.append("g")
    .attr("class", "myannotation2")
    .append("circle")
    .transition()
    .duration(2000)
    .attr("r", 100)
    .attr("cx", 130)
    .attr("cy", 180)
    .style("fill", "none")
    .style("stroke", "firebrick")
    ;
}

function bodyLoadBarChartEarthquakeCountByRegion() {
  console.log("bodyLoadBarChartEarthquakeCountByRegion");
  initializeBarChart(earthquake_count_by_region, false);
  updateBarChart(earthquake_count_by_region, false, false, "Earthquake Count by Region", "Region", "Total Number of Earthquakes", false, annotateBarChartEarthquakeCountByRegion);
}

function annotateBarChartEarthquakeCountByRegion() {
  var myfigure = d3.select("#myfigure");

  d3.select(".g.myannotation1").remove();

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 240)
    .attr("y", (h / 4))
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "firebrick")
    .text("Majority of earthquakes happen in Central and South Pacific as well as East Asia.")
    ;

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 30)
    .attr("y", 670)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "black")
    .text("Hover over for more information.")
    ;

  d3.select(".g.myannotation2").remove();

  myfigure.append("g")
    .attr("class", "myannotation2")
    .append("circle")
    .transition()
    .duration(2000)
    .attr("r", 100)
    .attr("cx", 130)
    .attr("cy", 170)
    .style("fill", "none")
    .style("stroke", "firebrick")
    ;
}

function bodyLoadBarChartEarthquakeCountByYear() {
  console.log("bodyLoadBarChartEarthquakeCountByYear");
  initializeBarChart(earthquake_count_by_year_natural_order, false);
  updateBarChart(earthquake_count_by_year_natural_order, false, false, "Earthquake Count by Year", "Year", "Total Number of Earthquakes", false, annotateBarChartEarthquakeCountByYear);
}

function annotateBarChartEarthquakeCountByYear() {
  var myfigure = d3.select("#myfigure");

  d3.select(".g.myannotation1").remove();

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 140)
    .attr("y", (h / 4))
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "firebrick")
    .text("Number of earthquakes per year has been increasing since 2000.")
    ;

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 30)
    .attr("y", 670)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "black")
    .text("Hover over for more information.")
    ;

  d3.select(".g.myannotation2").remove();

  myfigure.append("g")
    .attr("class", "myannotation2")
    .append("circle")
    .transition()
    .duration(2000)
    .attr("r", 140)
    .attr("cx", 650)
    .attr("cy", 180)
    .style("fill", "none")
    .style("stroke", "firebrick")
    ;
}

function bodyLoadBarChartEarthquakeCountByMonth() {
  console.log("bodyLoadBarChartEarthquakeCountByMonth");
  initializeBarChart(earthquake_count_by_month, true);
  updateBarChart(earthquake_count_by_month, true, true, "Earthquake Count by Month", "Month", "Total Number of Earthquakes", true, annotateBarChartEarthquakeCountByMonth);
}

function annotateBarChartEarthquakeCountByMonth() {
  var myfigure = d3.select("#myfigure");

  d3.select(".g.myannotation1").remove();

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", w / 2)
    .attr("y", 60)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "firebrick")
    .text("All months appear equally likely of experiencing an earthquake.")
    ;

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 30)
    .attr("y", 670)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "black")
    .text("Hover over for more information.")
    ;
}

function bodyLoadBarChartEarthquakeCountByMagnitude() {
  console.log("bodyLoadBarChartEarthquakeCountByMagnitude");
  initializeBarChart(earthquake_count_by_magnitude, false);
  updateBarChart(earthquake_count_by_magnitude, false, false, "Earthquake Count by Magnitude", "Magnitude", "Total Number of Earthquakes", false, annotateBarChartEarthquakeCountByMagnitude);
}

function annotateBarChartEarthquakeCountByMagnitude() {
  var myfigure = d3.select("#myfigure");

  d3.select(".g.myannotation1").remove();

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 140)
    .attr("y", 80)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "firebrick")
    .text("Since 1900 the most common earthquake magnitude is 7.5.")
    ;

  myfigure.append("g")
    .attr("class", "myannotation1")
    .append("text")
    .transition()
    .duration(2000)
    .attr("x", 30)
    .attr("y", 670)
    .attr("text-anchor", "left")
    .style("font-size", "12px")
    .style("fill", "black")
    .text("Hover over for more information.")
    ;

  d3.select(".g.myannotation2").remove();

  myfigure.append("g")
    .attr("class", "myannotation2")
    .append("circle")
    .transition()
    .duration(2000)
    .attr("r", 50)
    .attr("cx", 550)
    .attr("cy", 100)
    .style("fill", "none")
    .style("stroke", "firebrick")
    ;
}

function bodyLoadBarChart() {
  console.log("bodyLoadBarChart");

  var data = selectDataBarChart(0);
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
    .rangeRound([padding, w - padding])
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

    /*
    if(!showXaxis) {
      xAxis = xAxis.ticks(5);
    }
    */

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

function updateBarChart(data, showXaxis, useScaleOrdinal, plotTitle, xLabel, yLabel, useGroups, annotationFunction) {
  console.log("updateBarChart");

  // Figure for updating
  var myfigure = d3.select("#myfigure");

  // Update scales.
  var xScale = d3.scaleBand()
    .domain(data.map(function(d) { return d.key; }))
    .rangeRound([padding, w - padding])
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
    //.range(d3.schemeSet3)
    .range(d3.schemeTableau10)
    ;
  }

  // General Update Pattern
  var rects = myfigure.selectAll("rect").data(data);

  rects.enter()
    .append("rect")
    .merge(rects)
    .append("title")
    .text(function(d) {
      var token = useGroups ? d.group : d.key;
      return token + " had a total of " + d.value + " earthquakes.";
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

    /*
    if(!showXaxis) {
      xAxis = xAxis.ticks(5);
    }
    */

    myfigure
      .select("g.x.axis")
      .call(xAxis)
      //.selectAll("text")
      //.attr("transform", "rotate(-90) translate(-20, -10)");
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
      d3.select(this).attr("fill", hoverColor);
    })
    .on("mouseout", function(d) {
      d3.select(this).attr("fill", barChartMouseOverOriginalColor);
    })
    ;

  // Update pop up text. This works because 'title' elements were created in the GUP above for each circle.
  rects
    .select("title")
    .text(function(d) {
      var token = useGroups ? d.group : d.key;
      return token + " had a total of " + d.value + " earthquakes.";
    })
    ;

  // Add Title and Labels
  d3.select(".mytitle").remove();

  myfigure.append("text")
    .attr("class", "mytitle")
    .attr("x", (w / 2))
    .attr("y", (padding / 3))
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("text-decoration", "underline")
    .text(plotTitle);

  d3.select(".myxlabel").remove();

  myfigure.append("text")
    .attr("class", "myxlabel")
    .attr("x", (w / 2))
    .attr("y", h - (padding / 3))
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text(xLabel);

  d3.select(".myylabel").remove();

  myfigure.append("text")
    .attr("class", "myylabel")
    //.attr("x", (padding / 3))
    //.attr("y", (h / 2))
    .attr("x", 0)
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + (padding / 3) + "," + (h / 2) +") rotate(-90)")
    .style("font-size", "12px")
    .text(yLabel);

  // Annotation
  annotationFunction();
}

function onSelectChangeBarChart() {
  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectChangeBarChart: " + newSelection);
  updateBarChart(selectDataBarChart(newSelection), true, false);
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

function bodyLoadKeyIndicatorsLineChart() {
  console.log("bodyLoadKeyIndicatorsLineChart");
  initializeLineChart(key_indicators_by_country['China'], true);
  updateLineChart('China', key_indicators_by_country['China'], true);
  populateKeyIndicatorsSelect();
}

function populateKeyIndicatorsSelect() {
  d3.select("#myselect")
    .selectAll("option")
    .data(country_select_mapping)
    .enter()
    .append("option")
    .attr("value", function(d) { return d[0]; })
    .property("selected", function(d) { return d[0] === 'China'; })
    .text(function(d) { return d[1]; })
    ;
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

/* Find mine value in 2 deep nested arrays. */
function findmin(data, level) {
  var min = 0;
  for(var i = 0; i < data.length; i++) {
    for(var j = 0; j < data[i].length; j++) {
      var temp = data[i][j][level]
      if(temp < min) {
        min = temp;
      }
    }
  }
  return min;
}

function initializeLineChart(newData, logScaleY) {
  console.log("initializeLineChart");

  var data = []

  //for (var key in newData) {
    data.push(newData['deaths']);
    data.push(newData['damage']);
    data.push(newData['homes']);
  //}

  //console.log(data);
  //console.log("Xmax: " + findmax(data, 0));
  //console.log("Ymax: " + findmax(data, 1));

  // Define the SVG canvas size.
  var myfigure = d3.select("#myfigure")
    .attr("width", w)
    .attr("height", h)
    ;

  // Define scales.
  var xScale = d3.scaleLinear()
    .domain([1900, findmax(data, 0)])
    .range([padding, w - padding])
    ;

  var yScale = d3.scaleLinear()
    .domain([0, findmax(data, 1)])
    .range([h - padding, padding])
    ;

  if(logScaleY) {
    yScale = d3.scaleSymlog()
      .domain([0, findmax(data, 1)])
      .range([h - padding, padding])
      ;
  }

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

var lineChartFirstLoad = true;

function updateLineChart(country, newData, logScaleY) {
  console.log("updateLineChart");

  var data = []

  //for (var key in newData) {
    data.push(newData['deaths']);
    data.push(newData['damage']);
    data.push(newData['homes']);
  //}

  // Figure for updating
  var myfigure = d3.select("#myfigure");

  // Update scales.
  var xScale = d3.scaleLinear()
    .domain([1900, findmax(data, 0)])
    .range([padding, w - padding])
    ;

  var yScale = d3.scaleLinear()
    .domain([0, findmax(data, 1)])
    .range([h - padding, padding])
    ;

  if(logScaleY) {
    yScale = d3.scaleSymlog()
      .domain([0, findmax(data, 1)])
      .range([h - padding, padding])
      ;
  }

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
    .attr("stroke", function(d, i) { return ["firebrick", "olivedrab", "royalblue"][i]})
    .attr("fill", "none")
    .attr("stroke-width", 2)
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

  // Add Title and Labels
  d3.select(".mytitle").remove();

  myfigure.append("text")
    .attr("class", "mytitle")
    .attr("x", (w / 2))
    .attr("y", (padding / 3))
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("text-decoration", "underline")
    .text("Key Indicators by Year: " + country);

  d3.select(".myxlabel").remove();

  myfigure.append("text")
    .attr("class", "myxlabel")
    .attr("x", (w / 2))
    .attr("y", h - (padding / 3))
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .text("Year");

  d3.select(".myylabel").remove();

  myfigure.append("text")
    .attr("class", "myylabel")
    .attr("x", 0)
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + (padding / 6) + "," + (h / 2) +") rotate(-90)")
    .style("font-size", "12px")
    .text("Total Of Deaths, Damage in Millions of Dollars, or Homes Destroyed");

  // Add Legend
  if(lineChartFirstLoad) {
    var xoffset = w - 210;
    var xoffset1 = xoffset + 10;
    var myoffset = padding / 6;
    var mydelta = 15;
    var myfontsize = "12px";

    myfigure.append("circle")
      .attr("cx", xoffset)
      .attr("cy", myoffset)
      .attr("r", 6)
      .style("fill", "firebrick")
      ;

    myfigure.append("circle")
      .attr("cx", xoffset)
      .attr("cy", myoffset + mydelta)
      .attr("r", 6)
      .style("fill", "olivedrab")
      ;

    myfigure.append("circle")
      .attr("cx", xoffset)
      .attr("cy", myoffset + (2 * mydelta))
      .attr("r", 6)
      .style("fill", "royalblue")
      ;

    myfigure.append("text")
      .attr("x", xoffset1)
      .attr("y", myoffset)
      .text("Total Deaths")
      .style("font-size", myfontsize)
      .attr("alignment-baseline","middle")
      ;

    myfigure.append("text")
      .attr("x", xoffset1)
      .attr("y", myoffset + mydelta)
      .text("Total Damage in Millions of Dollars")
      .style("font-size", myfontsize)
      .attr("alignment-baseline","middle")
      ;

    myfigure.append("text")
      .attr("x", xoffset1)
      .attr("y", myoffset + (2 * mydelta))
      .text("Total Homes Destroyed")
      .style("font-size", myfontsize)
      .attr("alignment-baseline","middle")
      ;

    lineChartFirstLoad = false;
  }
}

function onSelectChangeLineChart() {
  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectChangeLineChart: " + newSelection);
  updateLineChart(selectDataLineChart(newSelection));
}

function onSelectChangeKeyIndicatorsLineChart() {
  const newSelection1 = d3.select("#myselect1 option:checked").node().value;
  var useLogScale = parseInt(newSelection1) === 2 ? true : false;

  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectChangeKeyIndicatorsLineChart: " + newSelection1 + " " + newSelection);

  updateLineChart(newSelection, key_indicators_by_country[newSelection], useLogScale);
}

function onSelectToggleScaleLineChart() {
  const newSelection1 = d3.select("#myselect1 option:checked").node().value;
  var useLogScale = parseInt(newSelection1) === 2 ? true : false;

  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectToggleScaleLineChart: " + newSelection1 + " " + newSelection);

  updateLineChart(newSelection, key_indicators_by_country[newSelection], useLogScale);
}
