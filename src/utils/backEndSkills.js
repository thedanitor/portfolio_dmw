import { faNodeJs, faNode, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import mySqlIcon from "../assets/icons/mySql_icon.svg";

function BackEndSkills(skill, skillIcon, iconColor, fa) {
    this.skill = skill;
    this.skillIcon = skillIcon;
    this.iconColor = iconColor;
    this.fa = fa;
}

const node = new BackEndSkills("Node", faNode, "blue", true);
const express = new BackEndSkills("Express", faNodeJs, "blue", true);
const mySql = new BackEndSkills("MySQL", mySqlIcon, "blue", false);
const sequelize = new BackEndSkills("Sequelize", faFontAwesome, "blue", true);
const mongoDb = new BackEndSkills("MongoDB", faFontAwesome, "blue", true);
const mongoose = new BackEndSkills("Mongoose", faFontAwesome, "blue", true);
const indexedDb = new BackEndSkills("IndexedDB", faFontAwesome, "blue", true);
const handlebars = new BackEndSkills("Handlebars", faFontAwesome, "blue", true);
const apis = new BackEndSkills("APIs", faFontAwesome, "blue", true);


let backEndSkills = [node, express, mySql, sequelize, mongoDb, mongoose, indexedDb, handlebars, apis];

export default backEndSkills;



// const backEndSkills = [
//     "Node",
//     "Express", NEED ICON
//     "MySQL", NEED ICON
//     "Sequelize", NEED ICON
//     "MongoDB",  NEED ICON
//     "Mongoose", NEED ICON
//     "IndexedDB", NEED ICON
//     "Handlebars", NEED ICON
//     "APIs", NEED ICON
// ];

// export default backEndSkills;