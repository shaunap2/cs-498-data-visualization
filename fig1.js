// GLOBAL STATE
var bb = true;

function bodyLoad() {
  "use strict";
  console.log("bodyLoad");

  generateFigure(selectData(0));

  populateSelect();
}

function generateFigure(data) {
  console.log("generateFigure");

  var w = 600
  var h = 600
  var padding = 50

  // Define scales.
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

  // Define axes.
  var xAxis = d3.axisBottom()
    .scale(xScale)
    //.ticks(5)
    ;

  var yAxis = d3.axisLeft()
    .scale(yScale)
    //.ticks(5)
    ;

  // Define the SVG size.
  var fig1 = d3.select("#fig1")
    .attr("width", w)
    .attr("height", h)
    ;

  var dots = fig1.selectAll("circle").data(data);

  // General Update Pattern
  dots.enter()
    .append("circle")
    .merge(dots)
    .transition()
    .duration(2000)
    .attr("r", function(d) { return aScale(d); })
    .attr("cx", function(d, i) { return xScale(d); })
    .attr("cy", function(d, i) { return yScale(d); })
    .attr("fill", "purple")
    .selection()
    .append("title")
    .text(function(d) {
      return "The current value is " + d;
    })
    ;

  dots.exit().remove();

  // Add mouseover events.
  dots = fig1.selectAll("circle");

  dots
    .on("mouseover", function(d) {
      d3.select(this).attr("fill", bb ? "orange" : "red");
    })
    .on("mouseout", function(d) {
      d3.select(this).attr("fill", "black");
    })
    ;

  // Add pop up text.
  dots
    .select("title")
    .text(function(d) {
      return "The current value is " + d;
    })
    ;

  // Toggle mouseover color for grins.
  bb = !bb;
}

function selectData(selectionId) {
  console.log("selectData: " + selectionId);

  var data_00 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  var data_01 = [110, 120, 130, 140];

  if(selectionId % 2 === 0) {
    console.log(0);
    return data_00;
  } else {
    console.log(1);
    return data_01;
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

function onSelectChange() {
  const newSelection = d3.select("#myselect option:checked").node().value;
  console.log("onSelectChange: " + newSelection);
  generateFigure(selectData(newSelection));
}