import imageProjectOne from "../assets/images/project1.webp";
import imageProjectTwo from "../assets/images/project2.jpg";
import imageProjectThree from "../assets/images/project3.jpg";

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
    projectTitle: "Project Name",
    projectDescription:
      "What was your role, your deliverables, if the project was personal, freelancing. What was your role, your deliverables, if the project was personal, freelancing.",
    primaryButton: { link: "#", label: "View Project" },
    secondaryButton: { link: "#", label: "View Demo" },
    image: { link: imageProjectOne, borderRadius: "0 25px 25px 0" },
    flexDirection: "row",
    id: 1,
  },
  {
    projectTitle: "Own dictionary",
    projectDescription:
      "Dictionary application. You can create your own dictionary for learning a foreign language.",
    primaryButton: { link: "https://github.com/DianaBabiak/quizlite", label: "View Project" },
    secondaryButton: { link: "https://quizlite.vercel.app/", label: "View Demo" },
    image: { link: imageProjectTwo, borderRadius: "25px 0 0 25px" },
    flexDirection: "row-reverse",
    id: 2,
  },
  {
    projectTitle: "Learning cards",
    projectDescription:
      "The app is a simple way to learn using cards. It provides a convenient and effective means of memorising information based on the card methodology.",
    primaryButton: { link: "https://github.com/DianaBabiak/cards", label: "View Project" },
    secondaryButton: { link: "https://cards-self-one.vercel.app", label: "View Demo" },
    image: { link: imageProjectThree, borderRadius: "0 25px 25px 0" },
    flexDirection: "row",
    id: 3,
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
