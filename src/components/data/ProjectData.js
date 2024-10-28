// src/data/projectData.js
import techstrippedImg  from  '../../assets/images/techstripped-Macbook.png'

const projectData = [
  {
    id: 1,
    type: "web",
    title: "Techstripped Africa Portal",
    description:
      "A comprehensive front-end application designed to enhance interaction and engagement among students, alumni, and mentors within a university community.",
    imgSrc: techstrippedImg,
    stacks: [
      { icon: "FaHtml5", color: "#E34F26" },
      { icon: "FaCss3Alt", color: "#2965F1" },
      { icon: "FaJs", color: "#F0DB4F" },
      { icon: "FaReact", color: "#61DAFB" },
      { icon: "FaNode", color: "#68A063" },
    ],
    links: {
      live: "https://members.techstripped.com/#/login",
      github: "https://github.com/techstrippedafrica/Membership-Portal",
    },
  },
  {
    id: 2,
    type: "web",
    title: "Perf Website",
    description:
      "This is web app is a wailist application that will be launching the main product for the football fans to join ans share common culture and interest.",
    imgSrc: techstrippedImg,
    stacks: [
      { icon: "FaHtml5", color: "#E34F26" },
      { icon: "FaCss3Alt", color: "#2965F1" },
      { icon: "FaJs", color: "#F0DB4F" },
      { icon: "FaReact", color: "#61DAFB" },
      { icon: "FaNode", color: "#68A063" },
    ],
    links: {
      github: "https://github.com/henryamos/perfWebsite",
      live: "https://www.weareperf.com/",
    },
  },
  {
    id: 3,
    type: "web",
    title: "ireSide App",
    description:
      "FireSide is amobile app for students and children to learn more about Ghanaian tradtion folktales. It has the legendary Kweku Ananse stories.",
    imgSrc: techstrippedImg,
    stacks: [
      { icon: "FaHtml5", color: "#E34F26" },
      { icon: "FaCss3Alt", color: "#2965F1" },
      { icon: "FaJs", color: "#F0DB4F" },
      { icon: "FaReact", color: "#61DAFB" },
      { icon: "FaNode", color: "#68A063" },
    ],
    links: {
      live: "https://members.techstripped.com/#/login",
      github: "https://github.com/techstrippedafrica/Membership-Portal",
    },
  },

  // Add more projects as needed
];

export default projectData;
