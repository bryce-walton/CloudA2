//count can be determined by tweet.counter
//value is determined by the sentiment value
var dataset = [
  {"count":1, "value":3},
  {"count":2, "value":2},
  {"count":3, "value":1},
  {"count":4, "value":0.5},
  {"count":5, "value":2}
];
var svgWidth = 600, svgHeight = 400;
var margin = { top: 20, right: 20, bottom: 30, left: 50 };
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//select svg element in html form
var svg = d3.select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var g = svg.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
  .rangeRound([0, width]);

var y = d3.scaleLinear()
  .rangeRound([height, 0]);

var line = d3.line()
  .x(function(d) {return x(d.count)})
  .y(function(d) {return y(d.value)})
  x.domain(d3.extent(dataset, function(d) {return d.count}));
  y.domain(d3.extent(dataset, function(d) {return d.value}));

/*g.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .select(".domain")
  .remove();*/

g.append("g")
  .call(d3.axisLeft(y))
  .append("text")
  .attr("fill","#000")
  .attr("transform","rotate(-90)")
  .attr("y",6)
  .attr("dy","0.71em")
  .attr("text-anchor","end");

  g.append("path")
    .datum(dataset)
    .attr("fill","none")
    .attr("stroke","steelblue")
    .attr("stroke-linejoin","round")
    .attr("stroke-linecap","round")
    .attr("stroke-width",1.5)
    .attr("d",line);
