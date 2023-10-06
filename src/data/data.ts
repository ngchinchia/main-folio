import { Briefcase } from "lucide-react";
import React from "react";
import task from "../assets/taskmanagement.png";
import brewbubble from "../assets/brewbubble2.png";
import "react-vertical-timeline-component/style.min.css";

export const experienceData = [
  {
    title: "Transport System Intern",
    location: "ST Electronics",
    description:
      "Facilitated database registrations with Land Transport Authority. My involvement extended to supporting various forms of testing, ensuring compliance and operational excellence.",
    icon: React.createElement(Briefcase),
    date: "June - August 2017",
  },
  {
    title: "Maintenance System Intern",
    location: "ST Electronics",
    description:
      "Delivered and employed an iterative design approach for user interface of turnstile and swimming pool ticket machine.",
    icon: React.createElement(Briefcase),
    date: "March - May 2017",
  },
];

export const projectsData = [
  {
    title: "SimplyTask",
    description:
      "I created a full-stack task management web application. Key features include CRUD operations and priority visualization. The project's goal is to provide an efficient and user-friendly task management solution for personal use.",
    tags: ["React", "TypeScript", "mySQL", "Material UI", "TanStackQuery"],
    imageUrl: task,
    demoUrl:"https://main--verdant-khapse-68282c.netlify.app/", 
    sourceCodeUrl:"https://github.com/ngchinchia/taskmanager-frontend"
  },
  {
    title: "Brew Bubble",
    description:
      "Brew Bubble is a full stack mobile application that solves several problems including the limited access to comprehensive beer information, the lack of personalized tracking and reflection tools.",
    tags: ["React", "Node js", "Mongodb", "Express", "Postman", "Figma"],
    imageUrl: brewbubble,
    demoUrl:"https://www.youtube.com/watch?v=-4ooQDviA_o&ab_channel=MaeganLee", 
    sourceCodeUrl:"https://github.com/ngchinchia/brewbubble-backend"
  },
  
];
