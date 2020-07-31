function bodyLoad() {
  "use strict";
  console.log("generating fig1");
  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var fig1 = d3.select("#fig1");

  var dots = fig1.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .transition()
    .duration(2000)
    .attr("r", function(d) { return d; })
    .attr("cx", function(d, i) { return 10 * i; })
    .attr("cy", function(d, i) { return 20 * i; })
    .selection()
    .on("mouseover", function(d) {
      d3.select(this).attr("fill", "orange");
    })
    .on("mouseout", function(d) {
      d3.select(this).attr("fill", "black");
    })
    .append("title")
    .text(function(d) {
      return "The current value is " + d;
    })
    ;


}
