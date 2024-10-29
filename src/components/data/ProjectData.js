// src/data/projectData.js
import techstrippedImg from "../../assets/images/techstripped-Macbook.png";
import PerfImg from "../../assets/images/playahead-Macbook.png";
import fireSideImg from "../../assets/images/mobileapp-Macbook.png";
import EatUI from '../../assets/images/eat.png'
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
    imgSrc: PerfImg,
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
    title: "Best Eats",
    description:
      "Best Eats is app where u can get food price and filter between the food you want and the prices.",
    imgSrc: EatUI,
    stacks: [
      { icon: "FaHtml5", color: "#E34F26" },
      { icon: "FaCss3Alt", color: "#2965F1" },
      { icon: "FaJs", color: "#F0DB4F" },
      { icon: "FaReact", color: "#61DAFB" },
    ],
    links: {
      github: "https://github.com/henryamos/EatUI",
      live: "https://foodsite-rho.vercel.app/",
    },
  },
  {
    id: 4,
    type: "mobile",
    title: "FireSide App",
    description:
      "FireSide is amobile app for students and children to learn more about Ghanaian tradtion folktales. It has the legendary Kweku Ananse stories.",
    imgSrc: fireSideImg,
    stacks: [
      { icon: "FaHtml5", color: "#E34F26" },
      { icon: "FaCss3Alt", color: "#2965F1" },
      { icon: "FaJs", color: "#F0DB4F" },
      { icon: "FaReact", color: "#61DAFB" },
      { icon: "FaNode", color: "#68A063" },
    ],
    links: {
      github: "https://github.com/henryamos/FireSide",
    },
  },
  // Add more projects as needed
];

export default projectData;
