const dateofBirth = "01/12/2002";

const getStudentName = () => {
    return "Angel Changretta";
};

const getCampusName = () => {
    return "UEL Campus";
};

exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return "B grade";
    } else {
        return "A grade";
    }
};