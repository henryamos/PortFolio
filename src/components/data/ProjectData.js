// src/data/projectData.js
import techstrippedImg from "../../assets/images/techstripped-Macbook.png";
import fireSideImg from "../../assets/images/mobileapp-Macbook.png";
import delkomImg from "../../assets/images/delkom.jpg";
import africanShopImg from "../../assets/images/africanShop.png";
import eventlyImg from "../../assets/images/Evently.png";
import lawFirmImg from "../../assets/images/lawFirm.png";
import bricksAndWoodImg from "../../assets/images/bricks.jpg";
import technologiesImg from "../../assets/images/1294technologies.jpg";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

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
    id: 9,
    type: ["web", "uiux"],
    title: "Bricks and Wood Ghana",
    description:
      "A luxury real estate platform showcasing premium properties and services in Ghana. The platform includes property listings, virtual tours, contact forms, and a blog section. Implemented with best practices for performance, accessibility, and search engine optimization.",
    imgSrc: bricksAndWoodImg,
    stacks: [
      { icon: "SiNextdotjs", color: "#000000" },
      { icon: "FaReact", color: "#61DAFB" },
      { icon: "SiTypescript", color: "#3178C6" },
      { icon: "SiTailwindcss", color: "#06B6D4" },
    ],
    links: {
      live: "https://www.brickandwoodghana.com/",
      github: "https://github.com/henryamos/brickswood",
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
  {
    id: 8,
    type: "web",
    title: "PRO-ATTORNEY Website",
    description:
      "A modern front-end website developed for a lawyer, focusing on professional presentation and user experience.",
    imgSrc: lawFirmImg,
    stacks: [
      { icon: "FaHtml5", color: "#E34F26" },
      { icon: "FaCss3Alt", color: "#2965F1" },
      { icon: "FaJs", color: "#F0DB4F" },
      { icon: "FaReact", color: "#61DAFB" },
    ],
    links: {
      github: "https://github.com/henryamos/lawyer-website", 
      live: "https://standerferfamilylawgroup.net/", 
    },
  },
  {
    id: 10,
    type: ["web", "uiux"],
    title: "1294 Technologies",
    description:
      "A modern tech company website showcasing web solutions, custom software development, and digital branding services. Built with React and Tailwind CSS, featuring a clean, professional design with smooth animations and responsive layouts. The site effectively communicates the company's expertise in delivering cutting-edge digital solutions for global businesses.",
    imgSrc: technologiesImg,
    stacks: [
      { icon: "FaReact", color: "#61DAFB" },
      { icon: "SiTailwindcss", color: "#06B6D4" },
    ],
    links: {
      live: "https://1294technologies.com/",
      github: "https://github.com/henryamos/1294Technologies",
    },
  },
];
