import { Briefcase } from "lucide-react";
import React from "react";
import task from "../assets/taskmanagement.png";
import starstruck from "../assets/starstruck.png";
import brewbubble from "../assets/brewbubble2.png";
import portfolio from "../assets/portfolio_website.png";
import "react-vertical-timeline-component/style.min.css";

export const experienceData = [
  {
    title: "Frontend Developer Intern",
    location: "StarStruck",
    techstack: ['NextJS','Tailwind','Zustand','Framer'],
    description:
      "I am solely responsible for the frontend development of an ongoing B2B SaaS product and integration with multiple open-source libraries. A significant aspect of my role involves addressing challenges related to state management conflicts. I have implemented a modular and reusable state architecture using Zustand, leading to substantial improvements in code maintainability.",
    icon: React.createElement(Briefcase),
    date: "Dec 2023 - Current",
  },
  {
    title: "Software Engineer",
    location: "SG Hired",
    techstack: ['React Native','Laravel', 'Firebase'],
    description:
      "Played a pivotal role in the maintenance and features enhancement of the job search mobile application for security industry using React Native and redux for a start-up.",
    icon: React.createElement(Briefcase),
    date: "Nov - Dec 2023",
  },
  {
    title: "Transport System Intern",
    location: "ST Electronics",
    techstack: ['Jira', 'Maximo', 'SIT'],
    description:
      "Facilitated database registrations with Land Transport Authority. My involvement extended to supporting various forms of testing, ensuring compliance and operational excellence.",
    icon: React.createElement(Briefcase),
    date: "June - August 2017",
  },
  {
    title: "Maintenance System Intern",
    location: "ST Electronics",
    techstack: ['Adobe XD', 'UI Research', 'UAT'],
    description:
      "Delivered and employed an iterative design approach for user interface of turnstile and swimming pool ticket machine.",
    icon: React.createElement(Briefcase),
    date: "March - May 2017",
  },
];

export const projectsData = [
  {
    title: "StarStruck",
    description:
      "Developing a SaaS product for a start-up called StarStruck that targets B2B businesses, providing a comprehensive solution for marketplace analysis, data visualization with charts, comparison and optimization.",
    tags: ["NextJS", "Tailwind", "MemberStack"],
    imageUrl: starstruck,
    demoUrl:"https://app.getstarstruck.com/", 
    sourceCodeUrl:""
  },
  {
    title: "SimplyTask",
    description:
      "Developed full-stack task management web application. Key features include CRUD operations and priority visualization. The project's goal is to provide an efficient and user-friendly task management solution for personal use.",
    tags: ["React", "TypeScript", "mySQL"],
    imageUrl: task,
    demoUrl:"https://main--verdant-khapse-68282c.netlify.app/", 
    sourceCodeUrl:"https://github.com/ngchinchia/taskmanager-frontend"
  },
  {
    title: "My Portfolio",
    description:
      "Designed and developed a professional portfolio website using React and Tailwind enabled the creation of a visually appealing and responsive layout.",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: portfolio,
    demoUrl:"https://ngchinchia.vercel.app/", 
    sourceCodeUrl:"https://github.com/ngchinchia/main-folio"
  },
  {
    title: "Brew Bubble",
    description:
      "Brew Bubble is a full stack mobile application that solves several problems including the limited access to comprehensive beer information, the lack of personalized tracking and reflection tools.",
    tags: ["React Native", "Node js", "Mongodb"],
    imageUrl: brewbubble,
    demoUrl:"https://www.youtube.com/watch?v=-4ooQDviA_o&ab_channel=MaeganLee", 
    sourceCodeUrl:"https://github.com/ngchinchia/brewbubble-backend"
  },
  
];
