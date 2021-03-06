import { faNodeJs,  faFontAwesome } from "@fortawesome/free-brands-svg-icons";

function BackEndSkills(skill, skillIcon, iconColor) {
    this.skill = skill;
    this.skillIcon = skillIcon;
    this.iconColor = iconColor
}

const node = new BackEndSkills("Node", faNodeJs, "blue");
const express = new BackEndSkills("Express", faFontAwesome, "blue");
const mySql = new BackEndSkills("MySQL", faFontAwesome, "blue");
const sequelize = new BackEndSkills("Sequelize", faFontAwesome, "blue");
const mongoDb = new BackEndSkills("MongoDB", faFontAwesome, "blue");
const mongoose = new BackEndSkills("Mongoose", faFontAwesome, "blue");
const indexedDb = new BackEndSkills("IndexedDB", faFontAwesome, "blue");
const handlebars = new BackEndSkills("Handlebars", faFontAwesome, "blue");
const apis = new BackEndSkills("APIs", faFontAwesome, "blue");


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