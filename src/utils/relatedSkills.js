import { faGithub, faGitlab,  faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faTerminal, faFlask } from "@fortawesome/free-solid-svg-icons";

function RelatedSkills(skill, skillIcon, iconColor) {
    this.skill = skill;
    this.skillIcon = skillIcon;
    this.iconColor = iconColor
}

const github = new RelatedSkills("Github", faGithub, "blue");
const heroku = new RelatedSkills("Heroku", faFontAwesome, "blue");
const gitlab = new RelatedSkills("Gitlab", faGitlab, "blue");
const command = new RelatedSkills("Command line", faTerminal, "blue");
const vscode = new RelatedSkills("VS Code", faFontAwesome, "blue");
const processValidation = new RelatedSkills("Process Validation", faFontAwesome, "blue");
const testing = new RelatedSkills("Testing", faFlask, "blue");
const responsiveDesign = new RelatedSkills("Responsive Design", faFontAwesome, "blue");
const pwas = new RelatedSkills("PWAs", faFontAwesome, "blue");


let relatedSkills = [github, heroku, gitlab, command, vscode, processValidation, testing, responsiveDesign, pwas];

export default relatedSkills;



// const relatedSkills = [
//     "Github",
//     "Heroku", NEED ICON
//     "Gitlab",
//     "Command line",
//     "VS Code", NEED ICON
//     "Process Validation", NEED ICON
//     "Testing",
//     "Responsive Design", NEED ICON
//     "PWAs", NEED ICON
// ];

// export default relatedSkills;