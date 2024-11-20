import { drawTimeline } from "./timeline";

const timelineData = [
  {
    title: "CrowdChem\nCo.,\nLtd.",
    location: "Tokyo",
    date: "Aug\n2022\n-",
    role: "UI/UX\nDesigner",
    type: "Freelance",
  },
  {
    title: "Fignny\nCo.,Ltd.",
    location: "Tokyo",
    date: "Sep\n2021\n-\nJun\n2023",
    role: "UI/UX\nDesigner\n/\nFrontend\nDeveloper",
    type: "Full-time",
  },
  {
    title: "PENQE",
    location: "Tokyo",
    date: "Aug\n2020\n-\nAug\n2021",
    role: "Designer\n/\nFrontend developer",
    type: "Full-time",
  },
  {
    title: "en\nFactory,\nInc.",
    location: "Tokyo",
    date: "Aug\n2019\n-\nAug\n2020",
    role: "Web\nWriter\n/\nEditor,\nSocial\nMedia\nManagement",
    type: "Full-time",
  },
  {
    title: "CafeSnap",
    location: "Tokyo",
    date: "Jul\n2018\n-",
    role: "Web\nContent\nWriter",
    type: "Freelance",
  },
];

drawTimeline(timelineData);
