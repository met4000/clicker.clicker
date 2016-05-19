function Article() {
    "use strict";
    var internalErrorPrefix = 0;
    var externalErrorPrefix = 0;
}

/**
* Refreshes the page
**/
function refreshPage() {
    "use strict";
    window.location = window.location;
};

/**
* Returns a string with the char located at 'position' replaced with 'char'
**/
String.prototype.setCharAt = function (position, char) {
    "use strict";
    var internalCalc1 = this, internalCalc2 = "";
    internalCalc1 = this.substring(0, position);
    internalCalc2 = this.substring(position + 1);
    return internalCalc1 + char + internalCalc2;
};

/**
* Returns the index of the 'n'th 'char'
**/
String.prototype.nIndexOf = function (char, n) {
    "use strict";
    var internalCalc = 0, index = 0, found = false;
    for (; index < this.length && !found; index++) {
        if (this.charAt(index) === char) {
            internalCalc++;
            if (internalCalc === n) {
                found = true;
            }
        }
    }
    if (!found) { index = -1; console.error("ERROR: unable to find " + n + "'th occurance of '" + char + "' in " + this); window.alert("ERROR: unable to find " + n + "'th occurance of '" + char + "' in " + this); } else { index--; }
    return index;
};

/**
* Returns the index of the 'n'th last 'char'
*
* BUG: SEEMS TO BE UNABLE TO DETECT LAST CHARACTER AS CHAR
**/
String.prototype.nLastIndexOf = function (char, n) {
    "use strict";
    var internalCalc = 0, index = this.length, found = false;
    for (; index > 0 && !found; index--) {
        if (this.charAt(index) === char) {
            internalCalc++;
            if (internalCalc === n) {
                found = true;
            }
        }
    }
    if (!found) { index = -1; console.error("ERROR: unable to find " + n + "'th last occurance of '" + char + "' in " + this); window.alert("ERROR: unable to find " + n + "'th last occurance of '" + char + "' in " + this); } else { index--; }
    return index;
};

/**
* Returns the number of times 'char' is found in the string
* If 'char' is *, then will return the number of non " " characters
**/
String.prototype.amountOf = function (char) {
    var charAmount = 0;
    if (char === "*") {
        for(index = 0; index < this.length; index++) {
            if (this.charAt(index) !== " ") { charAmount++; }
        }
    } else {
        for(index = 0; index < this.length; index++) {
            if (this.substr(index, char.length) === char) { charAmount++; }
        }
    }
    return charAmount;
}

/**
* Creates a linebreak 'amount' long (use with span/div and onload)
**/
HTMLObjectElement.prototype.br = function (amount) {
    var internalCalc = "";
    for (var x = 0; x < amount; x++) {
        internalCalc = internalCalc + "<br>";
    }
    this.innerHTML = internalCalc;
};

/**
* Returns a random int between 'min' and 'max'
**/
function getRandomInt(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}