// src/data/projectData.js
import techstrippedImg from "../../assets/images/techstripped-Macbook.png";
import PerfImg from "../../assets/images/playahead-Macbook.png";
import fireSideImg from "../../assets/images/mobileapp-Macbook.png";
import delkomImg from "../../assets/images/delkom.jpg";
import africanShopImg from "../../assets/images/africanShop.png";
import eventlyImg from "../../assets/images/Evently.png";

export const projectData = [
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
      "This is a web app and waitlist application for football fans to join and share common culture and interest.",
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
    id: 4,
    type: ["mobile", "uiux"],
    title: "FireSide App",
    description:
      "FireSide is a mobile app for students and children to learn more about Ghanaian traditional folktales, including the legendary Kweku Ananse stories.",
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
  {
    id: 5,
    type: ["web", "uiux"],
    title: "Delkom Charity Foundation",
    description:
      "A platform for facilitating donations and volunteering for the Delkom Charity Foundation with seamless payment and email/SMS notification integration.",
    imgSrc: delkomImg,
    stacks: [
      { icon: "FaHtml5", color: "#E34F26" },
      { icon: "FaCss3Alt", color: "#2965F1" },
      { icon: "FaReact", color: "#61DAFB" },
      { icon: "FaNode", color: "#68A063" },
      { icon: "FaDatabase", color: "#F29111" },
    ],
    links: {
      github: "https://github.com/henryamos/DelkomCharityFoundation",
      live: "https://delkomcharityfoundation.com/",
    },
  },
  {
    id: 6,
    type: "web",
    title: "Style Connect Africa",
    description:
      "An African fashion shop platform for buying and selling traditional clothing, accessories, and fabrics with local and international delivery.",
    imgSrc: africanShopImg,
    stacks: [
      { icon: "FaHtml5", color: "#E34F26" },
      { icon: "FaCss3Alt", color: "#2965F1" },
      { icon: "FaJs", color: "#F0DB4F" },
      { icon: "FaReact", color: "#61DAFB" },
      { icon: "FaNode", color: "#68A063" },
    ],
    links: {
      github: "https://github.com/StyleConnect-Africa/africanShop-app",
      live: "https://stylesconnectafrica.netlify.app/",
    },
  },
  {
    id: 7,
    type: "web",
    title: "Evently",
    description:
      "A platform for event advertising and management, connecting vendors with customers through efficient ad posting and browsing features.",
    imgSrc: eventlyImg,
    stacks: [
      { icon: "FaHtml5", color: "#E34F26" },
      { icon: "FaCss3Alt", color: "#2965F1" },
      { icon: "FaJs", color: "#F0DB4F" },
      { icon: "FaReact", color: "#61DAFB" },
      { icon: "FaNode", color: "#68A063" },
    ],
    links: {
      github: "https://github.com/TEAM-CHARM/advert-app-api",
      live: "eventlyevents.netlify.app",
    },
  },
];


