function bodyLoad() {
  "use strict";
  console.log("here!");
  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var fig1 = d3.select("#fig1");

  fig1.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", function(d) { return d; })
    .attr("cx", function(d, i) { return 10 * i; })
    .attr("cy", function(d, i) { return 20 * i; })
    ;
}
