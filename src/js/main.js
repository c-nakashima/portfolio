import { drawTimeline } from "./timeline";

// データセット
const timelineData = [
  {
    type: "work",
    company: "CafeSnap",
    location: "Tokyo",
    date: "Jul 2018",
    role: "Web content writer\nSNS management",
  },
  {
    type: "work",
    company: "en Factory, Inc.",
    location: "Tokyo",
    date: "Aug 2019 - Aug 2020",
    role: "Web content writer\nSNS management",
  },
  {
    type: "work",
    company: "PENQE",
    location: "Tokyo",
    date: "Aug 2020 - Aug 2021",
    role: "Designer\nFrontend developer",
  },
  {
    type: "work",
    company: "Figmny",
    location: "Tokyo",
    date: "Sep 2021 - Jun 2023",
    role: "UI/UX Designer\nFrontend developer",
  },
  {
    type: "work",
    company: "CrowdChem",
    location: "Tokyo",
    date: "Aug 2022",
    role: "UI/UX designer",
  },
];

// const timelineData = [
//   {
//     company: "CafeSnap",
//     location: "Tokyo",
//     startDate: new Date(2018, 6),
//     endDate: null,
//     role: "Web content writer",
//     details: "SNS management",
//   },
//   {
//     company: "en Factory, Inc.",
//     location: "Tokyo",
//     startDate: new Date(2019, 7),
//     endDate: new Date(2020, 7),
//     role: "Web content writer",
//     details: "SNS management",
//   },
//   {
//     company: "PENQE",
//     location: "Tokyo",
//     startDate: new Date(2020, 7),
//     endDate: new Date(2021, 7),
//     role: "Designer",
//     details: "Frontend developer",
//   },
//   {
//     company: "Fignny",
//     location: "Tokyo",
//     startDate: new Date(2021, 8),
//     endDate: new Date(2023, 5),
//     role: "UI/UX Designer",
//     details: "Frontend developer",
//   },
//   {
//     company: "CrowdChem",
//     location: "Tokyo",
//     startDate: new Date(2022, 7),
//     endDate: null,
//     role: "UI/UX Designer",
//     details: "",
//   },
// ];

drawTimeline(timelineData);
