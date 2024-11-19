import * as d3 from "d3";

// export const drawTimeline = (timelineData) => {
//   // タイムラインのスケール設定
//   const startDate = d3.min(timelineData, (d) => d.startDate);
//   const endDate = d3.max(timelineData, (d) => d.endDate || new Date());

//   // Y軸のスケール設定
//   const yScale = d3.scaleTime().domain([startDate, endDate]).range([0, 500]); // タイムラインの高さに合わせて調整

//   // タイムラインコンテナの取得
//   const timeline = d3.select("#timeline");

//   // 各イベントをタイムラインに追加
//   timelineData.forEach((event) => {
//     const eventContainer = timeline
//       .append("div")
//       .attr("class", "event")
//       .style("position", "absolute")
//       .style("top", `${yScale(event.startDate)}px`); // 開始日を基に位置を設定

//     // ドットの追加
//     eventContainer
//       .append("div")
//       .attr("class", "dot")
//       .style("width", "8px")
//       .style("height", "8px")
//       .style("background-color", "#888")
//       .style("border-radius", "50%")
//       .style("position", "absolute")
//       .style("left", "-16px"); // タイムラインの左側に配置

//     // ラベルの追加
//     const label = eventContainer.append("div").attr("class", "label");

//     label.append("h3").text(event.company);
//     label
//       .append("p")
//       .text(
//         `${event.location} ${formatDate(event.startDate)} - ${
//           event.endDate ? formatDate(event.endDate) : "Present"
//         }`
//       );
//     label.append("p").text(event.role);
//     label.append("p").text(event.details);
//   });

//   // 日付をフォーマットする関数
//   function formatDate(date) {
//     const options = { year: "numeric", month: "short" };
//     return date.toLocaleDateString("en-US", options);
//   }
// };
