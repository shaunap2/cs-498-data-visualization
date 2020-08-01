function bodyLoad() {
  "use strict";
  console.log("bodyLoad");

  generateFigure(selectData(0));

  populateSelect();
}

var bb = true;

function generateFigure(data) {
  console.log("generateFigure");

  var fig1 = d3.select("#fig1");
  var dots = fig1.selectAll("circle").data(data);

  // General Update Pattern
  dots.enter()
    .append("circle")
    .merge(dots)
    .transition()
    .duration(2000)
    .attr("r", function(d) { return d / 8; })
    .attr("cx", function(d, i) { return 100 + 10 * i; })
    .attr("cy", function(d, i) { return 100 + 20 * i; })
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
  var data_01 = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

  if(selectionId % 2 === 0) {
    console.log(0);
    return data_00;
  } else {
    console.log(1);
    return data_01;
  }
}

function populateSelect() {
  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  d3.select("#myselect")
    .selectAll("option")
    .data(data)
    .enter()
    .append("option")
    .attr("value", function(d) { return d; })
    .property("selected", function(d) { return d === 3; })
    .text(function(d) { return d; })
    ;
}

function onSelectChange() {
  const newSelection = d3.select("#myselect option:checked").text();
  console.log("onSelectChange: " + newSelection);
  generateFigure(selectData(newSelection));
}