import imageProjectOne from "../assets/images/project1.png";
import imageProjectTwo from "../assets/images/project2.jpg";
import imageProjectThree from "../assets/images/project3.jpg";
import imageProjectFour from "../assets/images/project4.jpg";
import imageProjectFive from "../assets/images/project5.jpeg";

export enum ProjectsAnchors {
  Home = "home",
  Skills = "skills",
  Projects = "projects",
  Contacts = "contacts",
}

export const MENU_ITEMS = [
  { name: "Home", url: ProjectsAnchors.Home },
  { name: "Skills", url: ProjectsAnchors.Skills },
  { name: "Projects", url: ProjectsAnchors.Projects },
  { name: "Contacts", url: ProjectsAnchors.Contacts },
];

export const SKILLS_ICON = [
  { iconId: "js" },
  { iconId: "typeScript" },
  { iconId: "react" },
  { iconId: "redux" },
  { iconId: "html" },
  { iconId: "git" },
  { iconId: "github" },
  { iconId: "css" },
  { iconId: "styleComponents" },
  { iconId: "sass" },
  { iconId: "miu" },
  { iconId: "storybook" },
];

export const PROJECT_INFORMATION = [
  {
    projectTitle: "Crypto Wallet",
    projectDescription:
      "A cryptocurrency wallet is an application that provides comprehensive information about your cryptocurrency assets and the ability to acquire new digital currencies. With it, you can manage your finances, receive real-time market data on cryptocurrencies.",
    projectStack:"React, JavaScript, chart.js, react-beautiful-dnd, openapi.coinstats.app",
    primaryButton: { link: "https://github.com/DianaBabiak/react-crypto", label: "View Project" },
    secondaryButton: { link: "https://react-crypto-green.vercel.app/", label: "View Demo" },
    image: { link: imageProjectOne, borderRadius: "0 25px 25px 0" },
    flexDirection: "row",
    id: 1,
  },
  {
    projectTitle: "Student account",
    projectDescription:
         "This project is a student portal developed using modern technologies. It provides easy access to the class schedule and is currently under development.",
    projectStack:"Vite, React, TypeScript, React Hook Form, react-big-calendar, Redux Toolkit, Jest, React Router Dom, i18next",
    primaryButton: { link: "https://github.com/DianaBabiak/calendar", label: "View Project" },
    secondaryButton: { link: "https://studentaccount-dzianas-projects.vercel.app/", label: "View Demo" },
    image: { link: imageProjectTwo, borderRadius: "25px 0 0 25px" },
    flexDirection: "row-reverse",
    id: 2,
  },
  {
    projectTitle: "Own dictionary",
    projectDescription:
      "Dictionary application. You can create your own dictionary for learning a foreign language.",
    projectStack:"Vite, React, TypeScript, MIU, React Router Dom, SCSS, uuid, Redux Toolkit",
    primaryButton: { link: "https://github.com/DianaBabiak/quizlite", label: "View Project" },
    secondaryButton: { link: "https://quizlite.vercel.app/", label: "View Demo" },
    image: { link: imageProjectThree, borderRadius: "0 25px 25px 0" },
    flexDirection: "row",
    id: 3,
  },
  {
    projectTitle: "Learning cards",
    projectDescription:
      "The app is a simple way to learn using cards. It provides a convenient and effective means of memorising information based on the card methodology.",
    projectStack:"Vite, React, TypeScript, React Hook Form, RTK Query, React Router Dom, Radix UI, clsx, zod, Storybook",
    primaryButton: { link: "https://github.com/DianaBabiak/cards", label: "View Project" },
    secondaryButton: { link: "https://cards-self-one.vercel.app", label: "View Demo" },
    image: { link: imageProjectFour, borderRadius: "25px 0 0 25px" },
    flexDirection: "row-reverse",
    id: 4,
  },
  {
    projectTitle: "Check Flow",
    projectDescription:
        "The project provides a user-friendly interface for creating, editing, deleting and displaying tasks and to-do lists.",
    projectStack:"Vite, React, TypeScript, Formik, Redux Toolkit, Jest, React Router Dom, Storybook",
    primaryButton: { link: "https://github.com/DianaBabiak/todolist", label: "View Project" },
    secondaryButton: { link: "https://todolist-wine-mu.vercel.app", label: "View Demo" },
    image: { link: imageProjectFive, borderRadius: "0 25px 25px 0" },
    flexDirection: "row",
    id: 5,
  },
];

export const CONTACT_MESSENGERS = [
  {
    iconId: "email",
    height: "32",
    width: "42",
    viewBox: "0 0 42 32",
    url: "mailto:dibabiak@gmail.com",
  },
  {
    iconId: "telegram",
    height: "40",
    width: "40",
    viewBox: "0 0 40 40",
    url: "https://t.me/Di_Babiak",
  },
  {
    iconId: "linkedin",
    height: "38",
    width: "38",
    viewBox: "0 0 38 38",
    url: "https://www.linkedin.com/in/dziana-babiak/",
  },

];
