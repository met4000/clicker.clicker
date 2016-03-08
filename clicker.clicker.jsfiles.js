var clickerclickerInternalErrorPrefix = 11;
var clickerclickerExternalErrorPrefix = 12;
var Internal = "Internal", internal = Internal;
var External = "External", external = External;
var clickerclickerPassedInfo = "";

/**
* Returns a string with the char located at 'position' replaced with 'char'
**/
String.prototype.setCharAt = function (position, char) {
    "use strict";
    var internalCalc1 = String, internalCalc2 = "";
    return internalCalc1;
};

/**
* Returns the index of the 'occurance'th 'char'
**/
String.prototype.occurance = function (char, index) {
    return 0;
};

function clickerclickerError(errorNumber, errorType) {
    "use strict";
    var errorMessage;
    if (errorType === "Internal") {
        errorMessage = "ERROR " + clickerclickerInternalErrorPrefix;
        if (errorNumber < 10) { errorMessage = errorMessage + "0"; }
        errorMessage = errorMessage + errorNumber + ": ";
        if (errorNumber === 1) { errorMessage = errorMessage + errorType + " is not a valid Error Type"; }
        if (errorNumber === 2) { errorMessage = errorMessage + "Unable to read save code"; }
        if (errorNumber === 3) { errorMessage = errorMessage + "Unable to load save cookie (save_cookie does not exist)"; }
        if (errorNumber === 4) { errorMessage = errorMessage + "Unable to load save cookie (save_cookie does exist)"; }
        if (errorNumber === 5) { errorMessage = errorMessage + "Tier " + clickerclickerPassedInfo + " is not a valid tier (" + clickerclickerPassedInfo + " != 1 || 2 || 3)"; }
        errorMessage = errorMessage + ".";
    } else if (errorType === "External") {
        errorMessage = "ERROR " + clickerclickerExternalErrorPrefix;
        if (errorNumber < 10) { errorMessage = errorMessage + "0"; }
        errorMessage = errorMessage + errorNumber + ": ";
        if (errorNumber === 1) { errorMessage = errorMessage + "Illegal character for save: " + clickerclickerPassedInfo; }
    } else { clickerclickerError(1, Internal); }
    console.error(errorMessage);
    window.alert(errorMessage);
}

var clickerclickerVersion = "1.0.2.3;

function getCCVersion(tier) {
    "use strict";
    if (tier === undefined) { return clickerclickerVersion; } else {
        var returner = 0, firstDot = 2, secondDot = 4, thirdDot = 6;
        firstDot = clickerclickerVersion.indexOf(".");
        secondDot = clickerclickerVersion.lastIndexOf(".");
//        thirdDot = clickerclickerVersion.occurance(".", 3);
        if (tier === 1) { returner = clickerclickerVersion.substring(0, firstDot); } else if (tier === 2) { returner = clickerclickerVersion.substring(firstDot + 1, secondDot); } else if (tier === 3) { returner = clickerclickerVersion.substring(secondDot + 1); } else {
            clickerclickerPassedInfo = tier;
            clickerclickerError(5, internal);
        }
        return returner;
    }
}

var encYc1 = "clickerclickerencryptcodeone";
var encYc2 = "ccectwocodencrypter";
var encYc3 = "clickclickencrypt";
var encYc4 = "clickclickencryptfour";
var encYc5 = "clickerclickerencryptcode5";
var encYc = ["", encYc1, encYc2, encYc3, encYc4, encYc5];

var cpsTickIntervalToggle = false;
var ruinTheFunToggle = false;

var autoclickEnabled = false;
var autoclickTps = 2;
var autoclickTemp;

var autosaveEnabled = true;
var autosaveTemp;

var firstTime = true;

var clickAmount = 0;
var clickAmountClicked = 0;
var clickAmountClickedAssist = 0;
var clickAmountTotal = 1;

var achievementFClick = false;
var achievementFClickToggle = true;
var achievement10Click = false;
var achievement10ClickToggle = true;
var achievement100Click = false;
var achievement100ClickToggle = true;
var achievementTClick = false;
var achievementTClickToggle = true;
var achievement10000Click = false;
var achievement10000ClickToggle = true;
var achievement100000Click = false;
var achievement100000ClickToggle = true;
var achievementMClick = false;
var achievementMClickToggle = true;
var achievement10000000Click = false;
var achievement10000000ClickToggle = true;
var achievement100000000Click = false;
var achievement100000000ClickToggle = true;
var achievementBClick = false;
var achievementBClickToggle = true;

var achievementClickMoreTotal = false;
var achievementRuinedTheFun = false;
var achievementClickMoreTotalToggle = true;
var achievementRuinedTheFunToggle = true;

var genUpgrade1Cost = 1000000;
var genUpgrade1 = false;
var genUpgrade2Cost = 2000000;
var genUpgrade2 = false;

var clickerAmount = 0;
var clickerBaseCps = 1;
var clickerModifiedCps = 1;
var clickerTotalCps = 0;
var clickerCost = 50;
var clickerUpgrade1Cost = 250;
var clickerUpgrade1 = false;
var clickerUpgrade2Cost = 1000;
var clickerUpgrade2 = false;
var clickerUpgrade2Modifier = 0;
var clickerUpgrade3Cost = 2500;
var clickerUpgrade3 = false;
var clickerUpgrade3Modifier = 2;

var cursorAmount = 0;
var cursorClickIncrease = 1;
var cursorClickTotalIncrease = 0;
var cursorCost = 400;
var cursorUpgrade1Cost = 2500;
var cursorUpgrade1 = false;
var cursorUpgrade2Cost = 10000;
var cursorUpgrade2 = false;
var cursorUpgrade2Modifier = 0;
var cursorUpgrade3Cost = 50000;
var cursorUpgrade3 = false;
var cursorUpgrade3Modifier = 2;

var blank = "";
var space = " ";
var dash = "-";
var semcolon = ";", semicolon = semcolon;

function getRandomInt(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function encrypt(input, key) {
    "use strict";
    var encryptKey, encryptNumber = 0, encrypted;
    if (key !== undefined) {
        encryptNumber = getRandomInt(1, 5);
        encryptKey = encYc[encryptNumber];
    } else { encryptKey = key; }
    encrypted = encryptNumber + CryptoJS.AES.encrypt(input, encryptKey);
    return encrypted;
}

function decrypt(input, key) {
    "use strict";
    var encryptKey, encryptNumber = 0, encrypted, decrypted;
    if (key !== undefined) {
        encryptNumber = input.charAt(0);
        encryptKey = encYc[encryptNumber];
    } else { encryptKey = key; }
    encrypted = input.substring(1);
    decrypted = CryptoJS.AES.decrypt(encrypted, encYc[encryptNumber]).toString(CryptoJS.enc.Utf8);
    for (var f = 0; f < decrypted.length; f++) {
        if (!(decrypted.charAt(f) === "a" || decrypted.charAt(f) === "b" || decrypted.charAt(f) === "c" || decrypted.charAt(f) === "d" || decrypted.charAt(f) === "e" || decrypted.charAt(f) === "f" || decrypted.charAt(f) === "g" || decrypted.charAt(f) === "h" || decrypted.charAt(f) === "i" || decrypted.charAt(f) === "j" || decrypted.charAt(f) === "k" || decrypted.charAt(f) === "l" || decrypted.charAt(f) === "m" || decrypted.charAt(f) === "n" || decrypted.charAt(f) === "o" || decrypted.charAt(f) === "p" || decrypted.charAt(f) === "q" || decrypted.charAt(f) === "r" || decrypted.charAt(f) === "s" || decrypted.charAt(f) === "t" || decrypted.charAt(f) === "u" || decrypted.charAt(f) === "v" || decrypted.charAt(f) === "w" || decrypted.charAt(f) === "x" || decrypted.charAt(f) === "y" || decrypted.charAt(f) === "z" || decrypted.charAt(f) === "A" || decrypted.charAt(f) === "B" || decrypted.charAt(f) === "C" || decrypted.charAt(f) === "D" || decrypted.charAt(f) === "E" || decrypted.charAt(f) === "F" || decrypted.charAt(f) === "G" || decrypted.charAt(f) === "H" || decrypted.charAt(f) === "I" || decrypted.charAt(f) === "J" || decrypted.charAt(f) === "K" || decrypted.charAt(f) === "L" || decrypted.charAt(f) === "M" || decrypted.charAt(f) === "N" || decrypted.charAt(f) === "O" || decrypted.charAt(f) === "P" || decrypted.charAt(f) === "Q" || decrypted.charAt(f) === "R" || decrypted.charAt(f) === "S" || decrypted.charAt(f) === "T" || decrypted.charAt(f) === "U" || decrypted.charAt(f) === "V" || decrypted.charAt(f) === "W" || decrypted.charAt(f) === "X" || decrypted.charAt(f) === "Y" || decrypted.charAt(f) === "Z" || decrypted.charAt(f) === " " || decrypted.charAt(f) === "1" || decrypted.charAt(f) === "2" || decrypted.charAt(f) === "3" || decrypted.charAt(f) === "4" || decrypted.charAt(f) === "5" || decrypted.charAt(f) === "6" || decrypted.charAt(f) === "7" || decrypted.charAt(f) === "8" || decrypted.charAt(f) === "9" || decrypted.charAt(f) === "0" || decrypted.charAt(f) === ";" || decrypted.charAt(f) === "=" || decrypted.charAt(f) === "")) {
            clickerclickerPassedInfo = decrypted.charAt(f);
            clickerclickerError(1, external);
        }
    }
    decrypted = decrypted.replace(/([.*+?^!:${}()|\[\]\/\\&-\'\",<>~`])/g, "");
    return decrypted;
}

function saveDisplayWrite(input) {
    "use strict";
    document.getElementById('saveDisplayArea').textContent = input;
}

function saveCodeGet() {
    "use strict";
    return encrypt("autoclickEnabled = " + autoclickEnabled + "; autoclickTps = " + autoclickTps + "; autoclickTemp = " + autoclickTemp + "; autosaveEnabled = " + autosaveEnabled + "; autosaveTemp = " + autosaveTemp + "; clickAmount = " + clickAmount + "; clickAmountClicked = " + clickAmountClicked + "; clickAmountClickedAssist = " + clickAmountClickedAssist + "; clickAmountTotal = " + clickAmountTotal + "; achievementClickMoreTotal = " + achievementClickMoreTotal + "; achievementRuinedTheFun = " + achievementRuinedTheFun + "; genUpgrade1Cost = " + genUpgrade1Cost + "; genUpgrade1 = " + genUpgrade1 + "; genUpgrade2Cost = " + genUpgrade2Cost + "; genUpgrade2 = " + genUpgrade2 + "; clickerAmount = " + clickerAmount + "; clickerBaseCps = " + clickerBaseCps + "; clickerModifiedCps = " + clickerModifiedCps + "; clickerTotalCps = " + clickerTotalCps + "; clickerCost = " + clickerCost + "; clickerUpgrade1Cost = " + clickerUpgrade1Cost + "; clickerUpgrade1 = " + clickerUpgrade1 + "; clickerUpgrade2Cost = " + clickerUpgrade2Cost + "; clickerUpgrade2 = " + clickerUpgrade2 + "; clickerUpgrade2Modifier = " + clickerUpgrade2Modifier + "; clickerUpgrade3Cost = " + clickerUpgrade3Cost + "; clickerUpgrade3 = " + clickerUpgrade3 + "; clickerUpgrade3Modifier = " + clickerUpgrade3Modifier + "; cursorAmount = " + cursorAmount + "; cursorClickIncrease = " + cursorClickIncrease + "; cursorClickTotalIncrease = " + cursorClickTotalIncrease + "; cursorCost = " + cursorCost + "; cursorUpgrade1Cost = " + cursorUpgrade1Cost + "; cursorUpgrade1 = " + cursorUpgrade1 + "; cursorUpgrade2Cost = " + cursorUpgrade2Cost + "; cursorUpgrade2 = " + cursorUpgrade2 + "; cursorUpgrade2Modifier = " + cursorUpgrade2Modifier + "; cursorUpgrade3Cost = " + cursorUpgrade3Cost + "; cursorUpgrade3 = " + cursorUpgrade3 + "; cursorUpgrade3Modifier = " + cursorUpgrade3Modifier + ";", encYc1);
}

function saveCodeRun(input) {
    "use strict";
    eval(decrypt(input, encYc1));
}

function saveLoadRead() {
    "use strict";
    return document.getElementById('saveDisplayArea').value;
}

function achievementTick() {
    "use strict";
    if (clickAmount >= 1 && !achievementFClick) {
        achievementFClick = true;
        window.alert("Achievement Received: First Click")
    }
    if (clickAmount >= 10 && !achievement10Click) {
        achievement10Click = true;
        window.alert("Achievement Received: 10 Clicks")
    }
    if (clickAmount >= 100 && !achievement100Click) {
        achievement100Click = true;
        window.alert("Achievement Received: 100 Clicks")
    }
    if (clickAmount > clickAmountTotal && !achievementClickMoreTotal) {
        achievementClickMoreTotal = true;
        window.alert("Achievement Received: Hacked Clicking");
    }
    if (ruinTheFunToggle && !achievementRuinedTheFun) {
        achievementRuinedTheFun = true;
        window.alert("Achievement Received: Ruined The Fun");
    }
    
    if (achievementClickMoreTotalToggle && achievementClickMoreTotal) {
        achievementClickMoreTotalToggle = false;
        document.getElementById('achievementClickMoreTotalDisplay').style.visibility = "visible";
    }
    if (achievementRuinedTheFunToggle && achievementRuinedTheFun) {
        achievementRuinedTheFunToggle = false;
        document.getElementById('achievementRuinedTheFun').style.visibility = "visible";
    }
}

function updateDisplays() {
    "use strict";
    document.title = "Clicks: " + clickAmount;
    document.getElementById('amountOf').innerHTML = clickAmount;
    if (!cursorUpgrade2) {document.getElementById('cursorIncreaseDisplay').innerHTML = cursorClickIncrease; } else { document.getElementById('cursorIncreaseDisplay').innerHTML = Math.round(cursorClickTotalIncrease / cursorAmount); }
    document.getElementById('clickerAmountDisplay').innerHTML = clickerAmount;
    document.getElementById('clickerTotalCpsDisplay').innerHTML = clickerTotalCps;
    document.getElementById('clickerCostDisplay').innerHTML = clickerCost;
    document.getElementById('clickerCpsDisplay').innerHTML = clickerModifiedCps;
    document.getElementById('cursorCostDisplay').innerHTML = cursorCost;
    document.getElementById('cursorAmountDisplay').innerHTML = cursorAmount;
    document.getElementById('cursorClickTotalIncreaseDisplay').innerHTML = cursorClickTotalIncrease;
    
    if (clickAmount > 9999 && clickAmountClicked > 999 && clickAmountTotal > 50000) { document.getElementById('genUpgrade1Display').style.visibility = "visible"; }
    if (genUpgrade1 && clickAmount > 99999 && clickAmountClicked > 1999 && clickAmountTotal > 75000) { document.getElementById('genUpgrade2Display').style.visibility = "visible"; }
    
    if (clickerAmount > 0) { document.getElementById('clickerUpgrade1Display').style.visibility = "visible"; }
    if (clickerUpgrade1) { document.getElementById('clickerUpgrade2Display').style.visibility = "visible"; }
    if (clickAmountTotal > 999 && clickerUpgrade2) { document.getElementById('clickerUpgrade3Display').style.visibility = "visible"; }
    
    if (cursorAmount > 0) { document.getElementById('cursorUpgrade1Display').style.visibility = "visible"; }
    if (cursorUpgrade1) { document.getElementById('cursorUpgrade2Display').style.visibility = "visible"; }
    if (clickAmountTotal > 3499 && cursorUpgrade2) { document.getElementById('cursorUpgrade3Display').style.visibility = "visible"; }
    achievementTick();
}

function setClicks(amount) {
    "use strict";
    clickAmount = amount;
}

function addClicks(amount) {
    "use strict";
    clickAmount = clickAmount + amount;
    updateDisplays();
}

function regClick(amount) {
    "use strict";
    clickAmountTotal = clickAmountTotal + amount + cursorClickTotalIncrease;
    addClicks(amount + cursorClickTotalIncrease);
    clickAmountClicked = clickAmountClicked + 1;
    clickAmountClickedAssist = clickAmountClickedAssist + amount + cursorClickTotalIncrease;
}

function mouseClick() {
    "use strict";
    if (!autoclickEnabled) { regClick(1); }
}

function updateClicker() {
    "use strict";
    if (clickerUpgrade2) { clickerUpgrade2Modifier = Math.floor(clickerAmount * 0.1); }
    clickerModifiedCps = clickerBaseCps + clickerUpgrade2Modifier;
    clickerTotalCps = clickerAmount * (clickerBaseCps + clickerUpgrade2Modifier);
    if (clickerUpgrade3) {
        clickerTotalCps = clickerTotalCps * clickerUpgrade3Modifier;
        clickerModifiedCps = clickerModifiedCps * clickerUpgrade3Modifier;
    }
}

function addClicker(amount) {
    "use strict";
    clickerAmount = clickerAmount + amount;
    clickerCost = Math.floor(clickerCost * 1.05);
    updateClicker();
    updateDisplays();
}

function increaseClicker() {
    "use strict";
    if (clickAmount > clickerCost - 1) {
        clickAmount = clickAmount - clickerCost;
        addClicker(1);
    }
}

function clickerUpgrade(number) {
    "use strict";
    if (number === 1 && !clickerUpgrade1 && clickAmount > clickerUpgrade1Cost - 1) {
        clickAmount = clickAmount - clickerUpgrade1Cost;
        clickerUpgrade1 = true;
        document.getElementById('clickerUpgrade1DisplayText').innerHTML = "<strike><span id='clickerUpgrade1CostDisplay'>250c</span> - clicker Upgrade - Fatter Fingers (clickers get <b>+1 cpc</b>)</strike>";
        clickerBaseCps = clickerBaseCps + 1;
    }
    if (number === 2 && !clickerUpgrade2 && clickAmount > clickerUpgrade2Cost - 1) {
        clickAmount = clickAmount - clickerUpgrade2Cost;
        clickerUpgrade2 = true;
        document.getElementById('clickerUpgrade2DisplayText').innerHTML = "<strike><span id='clickerUpgrade2CostDisplay'>1000</span>c - clicker Upgrade - Mythical Pointer (clickers get <b>+0.1 cpc</b> for each clicker owned)</strike>";
    }
    if (number === 3 && !clickerUpgrade3 && clickAmount > clickerUpgrade3Cost - 1) {
        clickAmount = clickAmount - clickerUpgrade3Cost;
        clickerUpgrade3 = true;
        document.getElementById('clickerUpgrade3DisplayText').innerHTML = "<strike><span id='clickerUpgrade3CostDisplay'>2500</span>c - clicker Upgrade - <i>Plastic Tier</i> 1 - Sheet Plastic clickers (clickers are <b>twice</b> as efficient)</strike>";
    }
    updateClicker();
    updateDisplays();
}

function clickerPrice(newCost) {
    "use strict";
    clickerCost = newCost;
}

function updateCursor() {
    "use strict";
    if (cursorUpgrade2) { cursorUpgrade2Modifier = Math.floor(cursorAmount * 0.1); }
    cursorClickTotalIncrease = cursorAmount * (cursorClickIncrease + cursorUpgrade2Modifier);
    if (cursorUpgrade3) { cursorClickTotalIncrease = cursorClickTotalIncrease * cursorUpgrade3Modifier; }
}

function addCursor(amount) {
    "use strict";
    cursorAmount = cursorAmount + amount;
    cursorCost = Math.floor(cursorCost * 1.05);
    updateCursor();
    updateDisplays();
}

function increaseCursor() {
    "use strict";
    if (clickAmount > cursorCost - 1) {
        clickAmount = clickAmount - cursorCost;
        addCursor(1);
    }
}

function setCursor(amount) {
    "use strict";
    cursorAmount = amount;
    updateCursor();
    updateDisplays();
}

function cursorUpgrade(number) {
    "use strict";
    if (number === 1 && !cursorUpgrade1 && clickAmount > cursorUpgrade1Cost - 1) {
        clickAmount = clickAmount - cursorUpgrade1Cost;
        cursorUpgrade1 = true;
        document.getElementById('cursorUpgrade1DisplayText').innerHTML = "<strike><span id='cursorUpgrade1CostDisplay'>2500c</span> - Cursor Upgrade - Fatter Fingers (Cursors get <b>+1 cpc</b>)</strike>";
        cursorClickIncrease = cursorClickIncrease + 1;
    }
    if (number === 2 && !cursorUpgrade2 && clickAmount > cursorUpgrade2Cost - 1) {
        clickAmount = clickAmount - cursorUpgrade2Cost;
        cursorUpgrade2 = true;
        document.getElementById('cursorUpgrade2DisplayText').innerHTML = "<strike><span id='cursorUpgrade2CostDisplay'>10000</span>c - Cursor Upgrade - Mythical Pointer (Cursors get <b>+0.1 cpc</b> for each cursor owned)</strike>";
    }
    if (number === 3 && !cursorUpgrade3 && clickAmount > cursorUpgrade3Cost - 1) {
        clickAmount = clickAmount - cursorUpgrade3Cost;
        cursorUpgrade3 = true;
        document.getElementById('cursorUpgrade3DisplayText').innerHTML = "<strike><span id='cursorUpgrade3CostDisplay'>50000</span>c - Cursor Upgrade - <i>Plastic Tier</i> 1 - Sheet Plastic Cursors (Cursors are <b>twice</b> as efficient)</strike>";
    }
    updateCursor();
    updateDisplays();
}

function cursorPrice(newCost) {
    "use strict";
    cursorCost = newCost;
}

function cpsTick() {
    "use strict";
    if (!cpsTickIntervalToggle) {
        cpsTickIntervalToggle = true;
        setInterval("cpsTick()", 1000);
    }
    updateClicker();
    clickAmountTotal = clickAmountTotal + clickerTotalCps;
    clickAmount = clickAmount + clickerTotalCps;
    updateClicker();
    if (!firstTime) { updateDisplays(); } else { firstTime = false; }
}

function autoclickEnable() {
    "use strict";
    autoclickTemp = setInterval("autoclickTick()", 1000 / autoclickTps);
    autoclickEnabled = true;
}

function autoclickDisable() {
    "use strict";
    clearInterval(autoclickTemp);
    autoclickEnabled = false;
}

function autoclickToggle() {
    "use strict";
    if (autoclickEnabled) { autoclickDisable(); } else { autoclickEnable(); }
}

function autoclickTick() {
    "use strict";
    if (autoclickEnabled) {
        regClick(1);
        achievementTick();
    }
}

function genUpgrade(number) {
    "use strict";
    if (number === 1 && !genUpgrade1 && clickAmount > genUpgrade1Cost - 1) {
        clickAmount = clickAmount - genUpgrade1Cost;
        genUpgrade1 = true;
        document.getElementById('genUpgrade1DisplayText').innerHTML = "<strike><span id='genUpgrade1CostDisplay'>1000000</span>c - Generic Upgrade - <i>Plastic Tier</i> 1 - Autoclick (Your click is disabled and <b>autoclicks 2</b> times a seccond)</strike>";
        document.getElementById('autoclickToggleDisplay').style.visibility = "visible";
        document.getElementById('autoclickToggleDisplay').scrollIntoView();
    }
    if (number === 2 && !genUpgrade2 && clickAmount > genUpgrade2Cost - 1) {
        clickAmount = clickAmount - genUpgrade2Cost;
        genUpgrade2 = true;
        document.getElementById('genUpgrade2DisplayText').innerHTML = "<strike><span id='genUpgrade2CostDisplay'>2000000</span>c - Generic Upgrade - <i>Wood Tier</i> 2 - Wooden Mouse (Autoclick speed is <b>doubled</b>)</strike>";
        autoclickTps = autoclickTps * 2;
        if (autoclickEnabled) {
            autoclickDisable();
            autoclickEnable();
        }
        document.getElementById('autoclickToggleDisplay').scrollIntoView();
    }
    updateDisplays();
    achievementTick();
}

function upgradeCostTicker() {
    "use strict";
    document.getElementById('cursorUpgrade1CostDisplay').innerHTML = cursorUpgrade1Cost;
    document.getElementById('cursorUpgrade2CostDisplay').innerHTML = cursorUpgrade2Cost;
    document.getElementById('cursorUpgrade3CostDisplay').innerHTML = cursorUpgrade3Cost;
}

function easterEggTick() {
    "use strict";
}

function tick() {
    "use strict";
    achievementTick();
}


function ruinTheFun() {
    "use strict";
    clickerPrice(0);
    cursorPrice(0);
    clickAmount = 999999999999999999999999;
    clickAmountClicked = 999999999999999999999999;
    clickAmountClickedAssist = 999999999999999999999999;
    clickAmountTotal = 1000000000000000000000000;
    clickerAmount = 999;
    cursorAmount = 999;
    ruinTheFunToggle = true;
    updateDisplays();
}

function achievementUnlockAll() {
    "use strict";
    achievementFClick = true;
    achievement10Click = true;
    achievement100Click = true;
    achievementTClick = true;
    achievement10000Click = true;
    achievement100000Click = true;
    achievementMClick = true;
    achievement10000000Click = true;
    achievement100000000Click = true;
    achievementBClick = true;
    
    achievementClickMoreTotal = true;
    achievementRuinedTheFun = true;
}


//TESTING

function getCookie(c_name) {
    "use strict";
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x === c_name) {
            return unescape(y);
        }
    }
}

function setSaveCookieInternal(c_name, value, exdays) {
    "use strict";
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
    console.info("Editing cookie save...");
}

function setSaveCookie(display) {
    "use strict";
    var save_cookie = saveCodeGet();
    if (save_cookie !== "") {
        setSaveCookieInternal("save_cookie", save_cookie, 365);
        if (display === undefined) { console.info("Saved!"); }
    } else { clickerclickerError(2, Internal); }
}

function removeSaveCookie(c_name) {
    "use strict";
    if (confirm("Are you sure you want to delete the save?")) {
        setSaveCookieInternal(c_name, 0, -1);
        console.warn("Deleted!");
    }
}

function loadCookie() {
    "use strict";
    var save_cookie = getCookie("save_cookie");
    if (save_cookie !== null && save_cookie !== "") {
        saveCodeRun(save_cookie);
        if (genUpgrade1) { document.getElementById('genUpgrade1Display').style.visibility = "visible"; }
        if (genUpgrade2) { document.getElementById('genUpgrade2Display').style.visibility = "visible"; }
        if (clickerUpgrade1) { document.getElementById('clickerUpgrade1DisplayText').innerHTML = "<strike><span id='clickerUpgrade1CostDisplay'>250c</span> - clicker Upgrade - Fatter Fingers (clickers get <b>+1 cpc</b>)</strike>"; }
        if (clickerUpgrade2) { document.getElementById('clickerUpgrade2DisplayText').innerHTML = "<strike><span id='clickerUpgrade2CostDisplay'>1000</span>c - clicker Upgrade - Mythical Pointer (clickers get <b>+0.1 cpc</b> for each clicker owned)</strike>"; }
        if (clickerUpgrade3) { document.getElementById('clickerUpgrade3DisplayText').innerHTML = "<strike><span id='clickerUpgrade3CostDisplay'>2500</span>c - clicker Upgrade - <i>Plastic Tier</i> 1 - Sheet Plastic clickers (clickers are <b>twice</b> as efficient)</strike>"; }
        if (cursorUpgrade1) { document.getElementById('cursorUpgrade1DisplayText').innerHTML = "<strike><span id='cursorUpgrade1CostDisplay'>2500c</span> - Cursor Upgrade - Fatter Fingers (Cursors get <b>+1 cpc</b>)</strike>"; }
        if (cursorUpgrade2) { document.getElementById('cursorUpgrade2DisplayText').innerHTML = "<strike><span id='cursorUpgrade2CostDisplay'>10000</span>c - Cursor Upgrade - Mythical Pointer (Cursors get <b>+0.1 cpc</b> for each cursor owned)</strike>"; }
        if (cursorUpgrade3) { document.getElementById('cursorUpgrade3DisplayText').innerHTML = "<strike><span id='cursorUpgrade3CostDisplay'>50000</span>c - Cursor Upgrade - <i>Plastic Tier</i> 1 - Sheet Plastic Cursors (Cursors are <b>twice</b> as efficient)</strike>"; }
    } else { setSaveCookieInternal(save_cookie, "", 365); }
    if (autosaveEnabled) { autosaveEnable(60000); }
}

function autosave() {
    "use strict";
    setSaveCookie(false);
    console.info("Autosaved!");
}

function autosaveEnable(time) {
    "use strict";
    autosaveTemp = setInterval("autosave()", time);
    autosaveEnabled = true;
}

function autosaveDisable() {
    "use strict";
    clearInterval(autosaveTemp);
    autoclickEnabled = false;
}

function autosaveToggle(time) {
    "use strict";
    if (autosaveEnabled) { autosaveDisable(); } else { autosaveEnable(time); }
}