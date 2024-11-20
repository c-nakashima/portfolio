import * as d3 from "d3";

export const drawTimeline = (timelineData) => {
  const svg = d3
    .select("#timeline-container")
    .append("svg")
    .attr("width", 600)
    .attr("height", 800);

  const lineX = 10;
  const dotRadius = 5;

  // タイムラインの縦線
  svg
    .append("line")
    .attr("x1", lineX)
    .attr("y1", 50)
    .attr("x2", lineX)
    .attr("y2", 750)
    .attr("class", "line");

  // Creating each point
  timelineData.forEach((d, i) => {
    const yPosition = 100 + i * 130;

    // node
    svg
      .append("circle")
      .attr("cx", lineX)
      .attr("cy", yPosition)
      .attr("r", dotRadius)
      .attr("class", "dot");

    // company
    svg
      .append("text")
      .attr("x", lineX + 20)
      .attr("y", yPosition - 10)
      .attr("class", "companyname")
      .text(d.title);

    // location, term, jobtype
    svg
      .append("text")
      .attr("x", lineX + 20)
      .attr("y", yPosition + 12)
      .attr("class", "text")
      .text(`${d.location} ${d.date}  ${d.type}`);

    // title
    svg
      .append("text")
      .attr("x", lineX + 20)
      .attr("y", yPosition + 32)
      .attr("class", "text")
      .text(d.role);
  });
};
