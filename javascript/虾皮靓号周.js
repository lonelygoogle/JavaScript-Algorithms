"use strict";
var Nice;
(function (Nice) {
    Nice[Nice["ASCENDING"] = 0] = "ASCENDING";
    Nice[Nice["SAME"] = 1] = "SAME";
})(Nice || (Nice = {}));
function isNiceNumber(str) {
    if (str.length < 4)
        return false;
    var i = 0, j = i + 1, flag = null;
    while (j < str.length) {
        if (str[j] === str[j - 1]) {
            if (flag !== Nice.SAME)
                i = j - 1;
            flag = Nice.SAME;
        }
        else if (+str[j] - +str[j - 1] === 1) {
            if (flag !== Nice.ASCENDING)
                i = j - 1;
            flag = Nice.ASCENDING;
        }
        else {
            flag = null;
            i = j;
        }
        if (j - i >= 3)
            return true;
        j++;
    }
    return false;
}
console.log(isNiceNumber("1123"));
