function bodyLoad() {
  "use strict";
  console.log("here!");
  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var fig2 = d3.select("#fig2");

  var dots = fig2.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", function(d) { return d; })
    .attr("cx", function(d, i) { return 10 * i; })
    .attr("cy", function(d, i) { return 20 * i; })
    .on("mouseover", function(d) {
      d3.select(this)
        .attr("fill", "orange");
    })
    .on("mouseout", function(d) {
      d3.select(this)
        .attr("fill", "black");
    })
    .transition()
    .duration(2000)
    .delay(1000)
    ;
}
