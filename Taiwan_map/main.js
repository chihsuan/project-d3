var width = 600,   
    height = 520;

var svg = d3.select("body")
.append("svg")
.attr("width", width)
.attr("height", height)
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); 

d3.json("twCounty2010.topo.json", function (data) {

  topo = topojson.feature(data, data.objects["layer1"]);

  prj = d3.geo.mercator().center([120.979531, 23.978567]).scale(6000);
  path = d3.geo.path().projection(prj);

  svg.selectAll("path")
  .data(topo.features)
  .enter()
  .append("path")
  .attr("d", path)
  .attr("fill", "rgb(26,152,80)")
  .append("title")
  .text(function(d) {
    return d.properties.COUNTYNAME;
  });


});

