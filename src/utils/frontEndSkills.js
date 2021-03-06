import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faUikit, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

function FrontEndSkills(skill, skillIcon, iconColor) {
    this.skill = skill;
    this.skillIcon = skillIcon;
    this.iconColor = iconColor
}

const html = new FrontEndSkills("HTML", faHtml5, "blue");
const css = new FrontEndSkills("CSS", faCss3Alt, "blue");
const javaScript = new FrontEndSkills("JavaScript", faJsSquare, "blue");
const jQuery = new FrontEndSkills("jQuery", faFontAwesome, "blue");
const react = new FrontEndSkills("React", faReact, "blue");
const bootstrap = new FrontEndSkills("Bootstrap", faBootstrap, "blue");
const uikit = new FrontEndSkills("UIKit", faUikit, "blue");
const bulma = new FrontEndSkills("Bulma", faFontAwesome, "blue");
const materialUi = new FrontEndSkills("Material-UI", faFontAwesome, "blue");


// const frontEndSkills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "jQuery", FIND ICON
//     "React",
//     "BootStrap",
//     "UIKit",
//     "Bulma", FIND ICON
//     "Material-UI", FIND ICON
// ];

let frontEndSkills = [html, css, javaScript, jQuery, react, bootstrap, uikit, bulma, materialUi];

export default frontEndSkills;