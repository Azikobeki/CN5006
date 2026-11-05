console.log();
function studentInfo(name, id, labGroup){
console.log("Student info")
console.log("Student name: " + name)
console.log("Student id: " + id)
console.log("Student group: " + labGroup)
};

var stName = "Angel";
var stId = 2855084;
var stlabG = "Tuesday Lab Group 22";


studentInfo(stName, stId, stlabG);
console.log();

const currentDateTime = new Date();
console.log("Current date and time: " + currentDateTime.toLocaleString());
console.log();

function favouriteLang(language){
    console.log("Favourite programming language: " + language)
    console.log();
}

var stLanguage = "Python"
favouriteLang(stLanguage);
console.log();

function verification(verNum){
    
    console.log("Verification number: " + verNum);
}
var digits = String(stId).slice(-4);
verNum = Number(digits[0]) + Number(digits[1]) + Number(digits[2]) + Number(digits[3]);
verification(verNum);

