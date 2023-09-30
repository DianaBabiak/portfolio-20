import imageProjectOne from "../assets/images/project1.webp";
import imageProjectTwo from "../assets/images/project2.webp";
import imageProjectThree from "../assets/images/project3.webp";


export const menuItems = [{name: "About", url: "#"},
    {name: "Skills", url: "#"},
    {name: "Projects", url: "#"},
    {name: "Contacts", url: "#"}];


export const skillsIcon = [
    {iconId: "js"},
    {iconId: "css"},
    {iconId: "html"},
    {iconId: "vector"},
    {iconId: "github"},
    {iconId: "html"},
    {iconId: "git"},
    {iconId: "react"},
    {iconId: "sass"},
    {iconId: "bootstrap"},
    {iconId: "tailwind"},
    {iconId: "sass"}];


export const projectInformation = [
    {
    projectTitle: "Project Name",
    projectDescription: "What was your role, your deliverables, if the project was personal, freelancing. What was your role, your deliverables, if the project was personal, freelancing.",
    primaryButton: {link: "#", label: "View Project"},
    secondaryButton: {link: "#", label: "View Demo"},
    image: {link: imageProjectOne, borderRadius: "0 25px 25px 0"},
    flexDirection: "row",
    id: 1
},
    {
        projectTitle: "Project Name",
        projectDescription: "What was your role, your deliverables, if the project was personal, freelancing. What was your role, your deliverables, if the project was personal, freelancing.",
        primaryButton: {link: "#", label: "View Project"},
        secondaryButton: {link: "#", label: "View Demo"},
        image: {link: imageProjectTwo, borderRadius: "25px 0 0 25px"},
        flexDirection: "row-reverse",
        id: 2
    },
    {
        projectTitle: "Project Name",
        projectDescription: "What was your role, your deliverables, if the project was personal, freelancing. What was your role, your deliverables, if the project was personal, freelancing.",
        primaryButton: {link: "#", label: "View Project"},
        secondaryButton: {link: "#", label: "View Demo"},
        image: {link: imageProjectThree, borderRadius: "0 25px 25px 0"},
        flexDirection: "row",
        id: 3
    }
];


export const contactMessengers = [
    {iconId: "email", height: "32", width: "42", viewBox: "0 0 42 32", url: "#"},
    {iconId: "linkedin", height: "38", width: "38", viewBox: "0 0 38 38", url: "#"},
    {iconId: "instagram", height: "38", width: "38", viewBox: "0 0 38 38", url: "#"}]



