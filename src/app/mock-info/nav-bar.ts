import { NavBar } from '../interfaces/top-nav.model';

export const TOPNAV: NavBar[] = [
    { id: "Home", fa: "fa fa-2x fas fa-home", name: "Home", url: "home" },
    { id: "Projects", fa: "fa fa-2x fas fa-code", name: "Projects", url: "projects" },
    { id: "JavaScript", fa: "fab fa-2x fa-js-square", name: "JavaScript", url: "javascript" },
    { id: "Angular", fa: "fab fa-2x fa-angular", name: "Angular", url: "angular" },
    { id: "CSS", fa: "fa fa-2x fas fa-css3", name: "CSS", url: "css" },
    { id: "NodeJS", fa: "fab fa-2x fa-node-js", name: "NodeJS", url: "node" },
];

export const SIDENAV: NavBar[] = [
    { id: "About", fa: "fa fa-2x fas fa-user", name: "About", url: "about" },
    { id: "Experience", fa: "fa fa-2x fas fa-briefcase", name: "Experience", url: "experience" },
    { id: "Education", fa: "fa fa-2x fas fa-university", name: "Education", url: "education" },
    { id: "Other", fa: "fa fa-2x fas fa-feather", name: "Other", url: "other" },
    { id: "Contact", fa: "fa fa-2x fas fa-file-signature", name: "Contact", url: "contact" },
]