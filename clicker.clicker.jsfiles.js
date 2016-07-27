function Article() {
    "use strict";
}
Article.prototype.error = function () {
    "use strict";
    var internalPrefix = 0, externalPrefix = 0, passedInfo = "";
};
var clickerclicker = new Article();



clickerclicker.error.internalPrefix = 11;
clickerclicker.error.externalPrefix = 12;
var Internal = "Internal", internal = Internal;
var External = "External", external = External;

var clickerclickerVersion = "2.1.0";              //----------VERSION NUMBER--------------------------------------------
var saveVersion = "";

var tickTemp;
var keyLog = "javascript:";

var klGAB = false;
var klHello = false;

var klCI = [""];
var klC = "";
var klCNI = 0;
var klCNL = 0;
var klCL = 0;

var ruinTheFunToggle = false;

var autoclickEnabled = false;
var autoclickTps = 2;
var autoclickTemp;

var autosaveEnabled = true;
var autosaveTemp;
var autosaveTime = 60000;
var autosaveTimeTemp;
var autosaveTimeTick = 60000;

var firstTime = true;

var clickAmount = 0;
var clickAmountClicked = 0;
var clickAmountClickedAssist = 0;
var clickAmountTotal = 1;

var eei = [];
var fnaf = 1;

eei[fnaf] = false;

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

var achievementFNAFToggle = true;

var genUpgrade1Cost = 1000000;
var genUpgrade1 = false;
var genUpgrade2Cost = 2000000;
var genUpgrade2 = false;

var clickerAmount = 0;
var clickerBaseCps = 1;
var clickerModifiedCps = 1;
var clickerTotalCps = 0;
var clickerCost = 75;
var clickerUpgrade1Cost = 750;
var clickerUpgrade1 = false;
var clickerUpgrade2Cost = 3500;
var clickerUpgrade2 = false;
var clickerUpgrade2Modifier = 0;
var clickerUpgrade3Cost = 10000;
var clickerUpgrade3 = false;
var clickerUpgrade3Modifier = 2;
var clickerCpsTemp;
var clickerCpsClickAmount = 1

var cursorAmount = 0;
var cursorClickIncrease = 1;
var cursorClickTotalIncrease = 0;
var cursorCost = 750;
var cursorUpgrade1Cost = 7500;
var cursorUpgrade1 = false;
var cursorUpgrade2Cost = 25000;
var cursorUpgrade2 = false;
var cursorUpgrade2Modifier = 0;
var cursorUpgrade3Cost = 75000;
var cursorUpgrade3 = false;
var cursorUpgrade3Modifier = 2;

var clackerAmount = 0;
var clackerBaseCpm = 1;
var clackerModifiedCpm = 1;
var clackerTotalCpm = 0;
var clackerCost = 2000;
var clackerMode = "Clicker";
var clackerProductionCost = 35;
var clackerCpmTemp;
var clackerCpmAmount = 1;
var clackerUpgrade1 = false;
var clackerUpgrade1Cost = 10000;

var saveCodeOrder = [
	"saveVersion",
	"klGAB",
	"klHello",
	"ruinTheFunToggle",
	"autoclickEnabled",
	"autoclickTps",
	
	"autosaveEnabled",
	"autosaveTime",
	"autosaveTimeTick",
	
	"clickAmount",
	"clickAmountClicked",
	"clickAmountClickedAssist",
	"clickAmountTotal",
	
	"eei[fnaf]",
	
	"achievementFClick",
	"achievement10Click",
	"achievement100Click",
	"achievementTClick",
	"achievement10000Click",
	"achievement100000Click",
	"achievementMClick",
	"achievement10000000Click",
	"achievement100000000Click",
	"achievementBClick",
	
	"achievementClickMoreTotal",
	"achievementRuinedTheFun",
	
	"genUpgrade1Cost",
	"genUpgrade1",
	"genUpgrade2Cost",
	"genUpgrade2",
	
	"clickerAmount",
	"clickerBaseCps",
	"clickerModifiedCps",
	"clickerTotalCps",
	"clickerCost",
	"clickerUpgrade1Cost",
	"clickerUpgrade1",
	"clickerUpgrade2Cost",
	"clickerUpgrade2",
	"clickerUpgrade2Modifier",
	"clickerUpgrade3Cost",
	"clickerUpgrade3",
	"clickerUpgrade3Modifier",
	"clickerCpsClickAmount",
	
	"cursorAmount",
	"cursorClickIncrease",
	"cursorClickTotalIncrease",
	"cursorCost",
	"cursorUpgrade1Cost",
	"cursorUpgrade1",
	"cursorUpgrade2Cost",
	"cursorUpgrade2",
	"cursorUpgrade2Modifier",
	"cursorUpgrade3Cost",
	"cursorUpgrade3",
	"cursorUpgrade3Modifier",
	
	"clackerAmount",
	"clackerBaseCpm",
	"clackerModifiedCpm",
	"clackerTotalCpm",
	"clackerCost",
	"clackerMode",
	"clackerProductionCost",
	"clackerCpmAmount",
	"clackerUpgrade1",
	"clackerUpgrade1Cost"
];

var blank = "";
var space = " ";
var dash = "-";
var semcolon = ";", semicolon = semcolon;
var Clicker = "Clicker";
var Cursor = "Cursor";
var Clacker = "Clacker";


function clickerclickerError(errorNumber, errorType) {
    "use strict";
    var errorMessage;
    if (errorType === "Internal") {
        errorMessage = "ERROR " + clickerclicker.error.internalPrefix;
        if (errorNumber < 10) { errorMessage = errorMessage + "0"; }
        errorMessage = errorMessage + errorNumber + ": ";
        if (errorNumber === 1) { errorMessage = errorMessage + errorType + " is not a valid Error Type"; }
        if (errorNumber === 2) { errorMessage = errorMessage + "Unable to read save code"; }
        if (errorNumber === 3) { errorMessage = errorMessage + "Unable to load save cookie (save_cookie does not exist)"; }
        if (errorNumber === 4) { errorMessage = errorMessage + "Unable to load save cookie (save_cookie does exist)"; }
        if (errorNumber === 5) { errorMessage = errorMessage + "Tier " + clickerclicker.error.passedInfo + " is not a valid tier (" + clickerclicker.error.passedInfo + " != 1 || 2 || 3)"; }
        errorMessage = errorMessage + ".";
    } else if (errorType === "External") {
        errorMessage = "ERROR " + clickerclicker.error.externalPrefix;
        if (errorNumber < 10) { errorMessage = errorMessage + "0"; }
        errorMessage = errorMessage + errorNumber + ": ";
        if (errorNumber === 1) { errorMessage = errorMessage + "Illegal character for save: " + clickerclicker.error.passedInfo; }
        if (errorNumber === 2) { errorMessage = errorMessage + "Unable to load save cookie - Maybe cookies are disabled? :("; }
    } else { clickerclickerError(1, Internal); }
    console.error(errorMessage);
    window.alert(errorMessage);
}

function getCCVersion(tier) {
    "use strict";
    if (tier == undefined) { return clickerclickerVersion; } else if (tier.toLowerCase() == "latest") {
        var returner = 0, firstDot = 2, secondDot = 4, thirdDot = 6;
        includeJS("https://rawgit.com/met4000/clicker.clicker/master/cc.version.js");
        firstDot = ccVersion.indexOf(".");
        secondDot = ccVersion.lastIndexOf(".");
//        thirdDot = clickerclickerVersion.occurance(".", 3);
        if (tier == 1) { returner = ccVersion.substring(0, firstDot); } else if (tier == 2) { returner = ccVersion.substring(firstDot + 1, secondDot); } else if (tier === 3) { returner = ccVersion.substring(secondDot + 1); } else {
            clickerclicker.error.passedInfo = tier;
            clickerclickerError(5, internal);
        }
        return returner;
    } else if (tier.toLowerCase() == "save") {
		return saveVersion;
	} else {
        var returner = 0, firstDot = 2, secondDot = 4, thirdDot = 6;
        firstDot = clickerclickerVersion.indexOf(".");
        secondDot = clickerclickerVersion.lastIndexOf(".");
//        thirdDot = clickerclickerVersion.occurance(".", 3);
        if (tier == 1) { returner = clickerclickerVersion.substring(0, firstDot); } else if (tier == 2) { returner = clickerclickerVersion.substring(firstDot + 1, secondDot); } else if (tier === 3) { returner = clickerclickerVersion.substring(secondDot + 1); } else {
            clickerclicker.error.passedInfo = tier;
            clickerclickerError(5, internal);
        }
        return returner;
    }
}



function htmlPageFunctions() {
	document.getElementById("largeCursor").ondragstart = function() { return false; };
	document.getElementById("saveDisplayArea").style = "width: 1300px; height: 128px; resize: none";
	
	document.getElementById("largeCursor").addEventListener("mousedown", function(){mouseClick();}, false);
	document.getElementById("gu1").addEventListener("mousedown", function(){genUpgrade(1);}, false);
	document.getElementById("gu2").addEventListener("mousedown", function(){genUpgrade(2);}, false);
	document.getElementById("cu1").addEventListener("mousedown", function(){clickerUpgrade(1);}, false);
	document.getElementById("cu2").addEventListener("mousedown", function(){clickerUpgrade(2);}, false);
	document.getElementById("cu3").addEventListener("mousedown", function(){clickerUpgrade(3);}, false);
	document.getElementById("cuu1").addEventListener("mousedown", function(){cursorUpgrade(1);}, false);
	document.getElementById("cuu2").addEventListener("mousedown", function(){cursorUpgrade(2);}, false);
	document.getElementById("cuu3").addEventListener("mousedown", function(){cursorUpgrade(3);}, false);
	document.getElementById("ca1").addEventListener("mousedown", function(){clackerUpgrade(1);}, false);
	
	document.getElementById("bcl").addEventListener("mousedown", function(){increaseClicker();}, false);
	document.getElementById("bcu").addEventListener("mousedown", function(){increaseCursor();}, false);
	document.getElementById("bca").addEventListener("mousedown", function(){increaseClacker();}, false);
	
	document.getElementById("gsc").addEventListener("mousedown", function(){saveDisplayWrite(getSaveCode());}, false);
	document.getElementById("lsc").addEventListener("mousedown", function(){saveCodeRun(saveLoadRead());}, false);
	
	document.getElementById("ssc").addEventListener("mousedown", function(){setSaveCookie();}, false);
	document.getElementById("saveDelete").addEventListener("mousedown", function(){removeSaveCookie("save_cookie");}, false);
	
	document.getElementById('gsc').addEventListener('click', function(event) {
		document.getElementById('saveDisplayArea').select();
		try {
			document.execCommand('copy');
			if (document.selection) { document.selection.empty(); }
			else if (window.getSelection) { window.getSelection().removeAllRanges(); }
		} catch (err) { console.log('Oops, unable to copy'); }
	});
}



function saveDisplayWrite(input) {
    "use strict";
    document.getElementById('saveDisplayArea').value = input;
}

function getSaveCode() {
	"use strict";
	var saveCode = "";
	saveVersion = clickerclickerVersion.replace(/\./g, "_");
	for (var x = 0; x < saveCodeOrder.length; x++) {
		saveCode += (eval(saveCodeOrder[x]) != "" ? eval(saveCodeOrder[x]) : 0) + (x == saveCodeOrder.length - 1 ? "" : ",");
	}
	return encrypt(saveCode);
}

function saveCodeRun(input) {
    "use strict";
	var saveCode = decrypt(input).split(",");
	var reSaveCode = "";
	saveVersion = saveCode[0].replace(/\_/g, ".");
	for (var x = 1; x < saveCode.length; x++) {
		reSaveCode += saveCodeOrder[x] + "=" + saveCode[x] + ";";
	}
    eval(reSaveCode);
    updateDisplays();
}

function saveLoadRead() {
    "use strict";
    return document.getElementById('saveDisplayArea').value;
}

function achievementTick() {
    "use strict";
	var achDis = document.getElementById("achievementDisplay");
	
    if (clickAmount >= 1 && !achievementFClick) {
        achievementFClick = true;
        window.alert("Achievement Received: First Click");
    }
    if (clickAmount >= 10 && !achievement10Click) {
        achievement10Click = true;
        window.alert("Achievement Received: 10 Clicks");
    }
    if (clickAmount >= 100 && !achievement100Click) {
        achievement100Click = true;
        window.alert("Achievement Received: 100 Clicks");
    }
    if (clickAmount > clickAmountTotal && !achievementClickMoreTotal) {
        achievementClickMoreTotal = true;
        window.alert("Achievement Received: Hacked Clicking");
    }
    if (ruinTheFunToggle && !achievementRuinedTheFun) {
        achievementRuinedTheFun = true;
        window.alert("Achievement Received: Ruined The Fun");
    }
	
	
	
	if (achievementFClick && achievementFClickToggle) {
		achievementFClickToggle = false;
		achDis.innerHTML += "<div id='achievementFClick'>Achievement: First Click</div>";
	}
	
	if (achievement10Click && achievement10ClickToggle) {
		achievement10ClickToggle = false;
		achDis.innerHTML += "<div id='achievement10Click'>Achievement: 10 Clicks</div>";
	}
	
	if (achievement100Click && achievement100ClickToggle) {
		achievement100ClickToggle = false;
		achDis.innerHTML += "<div id='achievement100Click'>Achievement: 100 Clicks</div>";
	}
	
	if (achievementTClick && achievementTClickToggle) {
		achievementTClickToggle = false;
		achDis.innerHTML += "<div id='achievementTClick'>Achievement: Thousand Clicks</div>";
	}
	
	if (achievement10000Click && achievement10000ClickToggle) {
		achievement10000ClickToggle = false;
		achDis.innerHTML += "<div id='achievement10000Click'>Achievement: 10000 Clicks</div>";
	}
	
	if (achievement100000Click && achievement100000ClickToggle) {
		achievement100000ClickToggle = false;
		achDis.innerHTML += "<div id='achievement100000Click'>Achievement: 100000 Clicks</div>";
	}
	
	if (achievementMClick && achievementMClickToggle) {
		achievementMClickToggle = false;
		achDis.innerHTML += "<div id='achievementMClick'>Achievement: Million Clicks</div>";
	}
	
	if (achievement10000000Click && achievement10000000ClickToggle) {
		achievement10000000ClickToggle = false;
		achDis.innerHTML += "<div id='achievement10000000Click'>Achievement: 10000000 Clicks</div>";
	}
	
	if (achievement100000000Click && achievement100000000ClickToggle) {
		achievement100000000ClickToggle = false;
		achDis.innerHTML += "<div id='achievement100000000Click'>Achievement: 100000000 Clicks</div>";
	}
	
	if (achievementBClick && achievementBClickToggle) {
		achievementBClickToggle = false;
		achDis.innerHTML += "<div id='achievementBClick'>Achievement: Billion Clicks</div>";
	}
    
    if (achievementClickMoreTotalToggle && achievementClickMoreTotal) {
        achievementClickMoreTotalToggle = false;
        achDis.innerHTML += "<div id='achievementClickMoreTotalDisplay'>Achievment: Hacked Clicking</div>";
    }
	
    if (achievementRuinedTheFunToggle && achievementRuinedTheFun) {
        achievementRuinedTheFunToggle = false;
        achDis.innerHTML += "<div id='achievementRuinedTheFun'>Achievment: Ruined The Fun</div>";
    }
    
    
    if (eei[fnaf] && achievementFNAFToggle) {
        achievementFNAFToggle = false;
        achDis.innerHTML += "<div id='achievementFNAF'>Achievement: Bite of '87</div>";
    }
}

function updateDisplays() {
    "use strict";
    cpsUpdate();
    document.title = "Clicks: " + Math.floor(clickAmount);
    document.getElementById('amountOf').innerHTML = Math.floor(clickAmount);
    if (!cursorUpgrade2) {document.getElementById('cursorIncreaseDisplay').innerHTML = cursorClickIncrease; } else { document.getElementById('cursorIncreaseDisplay').innerHTML = Math.round(cursorClickTotalIncrease / cursorAmount); }
    
    document.getElementById('clickerAmountDisplay').innerHTML = clickerAmount === false ? 0 : clickerAmount;
    document.getElementById('clickerTotalCpsDisplay').innerHTML = clickerTotalCps === false ? 0 : clickerTotalCps;
    document.getElementById('clickerCostDisplay').innerHTML = clickerCost;
    document.getElementById('clickerCpsDisplay').innerHTML = clickerModifiedCps === false ? 0 : clickerModifiedCps;
    
    document.getElementById('cursorCostDisplay').innerHTML = cursorCost;
    document.getElementById('cursorAmountDisplay').innerHTML = cursorAmount === false ? 0 : cursorAmount;
    document.getElementById('cursorClickTotalIncreaseDisplay').innerHTML = cursorClickTotalIncrease === false ? 0 : cursorClickTotalIncrease;
    
    document.getElementById('clackerAmountDisplay').innerHTML = clackerAmount === false ? 0 : clackerAmount;
    document.getElementById('clackerTotalCpmDisplay').innerHTML = clackerTotalCpm === false ? 0 : clackerTotalCpm;
    document.getElementById('clackerCostDisplay').innerHTML = clackerCost;
    document.getElementById('clackerCpmDisplay').innerHTML = clackerModifiedCpm === false ? 0 : clackerModifiedCpm;
    document.getElementById('clackerModeDisplay').innerHTML = clackerMode;
    
    if (clickAmount > 9999 && clickAmountClicked > 999 && clickAmountTotal > 50000) { document.getElementById('genUpgrade1Display').style.visibility = "visible"; }
    if (genUpgrade1 && clickAmount > 99999 && clickAmountClicked > 1999 && clickAmountTotal > 75000) { document.getElementById('genUpgrade2Display').style.visibility = "visible"; }
    
    if (clickerAmount > 0) { document.getElementById('clickerUpgrade1Display').style.visibility = "visible"; }
    if (clickerUpgrade1) { document.getElementById('clickerUpgrade2Display').style.visibility = "visible"; }
    if (clickAmountTotal > 999 && clickerUpgrade2) { document.getElementById('clickerUpgrade3Display').style.visibility = "visible"; }
    
    if (cursorAmount > 0) { document.getElementById('cursorUpgrade1Display').style.visibility = "visible"; }
    if (cursorUpgrade1) { document.getElementById('cursorUpgrade2Display').style.visibility = "visible"; }
    if (clickAmountTotal > 3499 && cursorUpgrade2) { document.getElementById('cursorUpgrade3Display').style.visibility = "visible"; }
    
    if (clackerAmount > 0) { document.getElementById('clackerUpgrade1Display').style.visibility = "visible"; }
//    achievementTick();
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

function regAutoClick(amount) {
    "use strict";
    clickAmountTotal = clickAmountTotal + clickerTotalCps + amount;
    addClicks(amount + clickerTotalCps);
}

function regIndvClick(amount) {
    clickAmountTotal = clickAmountTotal + amount;
    addClicks(amount);
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

function addClicker() {
    "use strict";
    clickerAmount++;
    updateClicker();
    updateDisplays();
}

function increaseClicker() {
    "use strict";
    if (clickAmount > clickerCost - 1) {
        clickAmount = clickAmount - clickerCost;
        clickerCost = Math.floor(clickerCost * 1.05);
        addClicker();
    }
}

function clickerUpgrade(number) {
    "use strict";
    if (number === 1 && !clickerUpgrade1 && clickAmount >= clickerUpgrade1Cost) {
        clickAmount = clickAmount - clickerUpgrade1Cost;
        clickerUpgrade1 = true;
        document.getElementById('clickerUpgrade1DisplayText').innerHTML = "<strike><span id='clickerUpgrade1CostDisplay'>250</span>c - clicker Upgrade - Fatter Fingers (clickers get <b>+1 cpc</b>)</strike>";
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

function addCursor() {
    "use strict";
    cursorAmount++;
    updateCursor();
    updateDisplays();
}

function increaseCursor() {
    "use strict";
    if (clickAmount > cursorCost - 1) {
        clickAmount = clickAmount - cursorCost;
        addCursor();
    }
}

function increaseCursor() {
    "use strict";
    if (clickAmount > cursorCost - 1) {
        clickAmount = clickAmount - cursorCost;
        cursorCost = Math.floor(cursorCost * 1.05);
        addCursor();
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
        document.getElementById('cursorUpgrade1DisplayText').innerHTML = "<strike><span id='cursorUpgrade1CostDisplay'>2500</span>c - Cursor Upgrade - Fatter Fingers (Cursors get <b>+1 cpc</b>)</strike>";
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

function updateClacker() {
    "use strict";
    
    clackerTotalCpm = clackerAmount * clackerBaseCpm;
    var clackerCpmTime;
    var clackerCpmActivated = true;
    if (!clackerAmount) {
        clackerCpmTemp = setInterval("clackerAdd" + clackerMode + "(clackerTotalCpm)", clackerCpmTime);
    }
    
    if (clackerTotalCpm > 15000) {
        clackerCpmAmount = clackerTotalCpm / 15000;
        clackerCpmTime = 1000 / (clackerTotalCpm / clackerCpmAmount);
    } else if (clackerTotalCpm != 0) { clackerCpmTime = 1000 / clackerTotalCpm; } else { clackerCpmActivated = false; }
    
    if (clackerCpmTime !== undefined) {
        clearInterval(clackerCpmTemp);
    }
    if (clackerCpmActivated) { clackerCpmTemp = setInterval("for(var x = 0; x < clackerCpmAmount; x++){clackerAdd" + clackerMode + "();}", clackerCpmTime * 60); }
}

function clackerUpgrade(number) {
    if (number == 1 && ! clackerUpgrade1 && clickAmount >= clackerUpgrade1Cost) {
        clickAmount = clickAmount - clackerUpgrade1Cost;
        clackerUpgrade1 = true;
        document.getElementById('clackerUpgrade1DisplayText').innerHTML = "<strike><span id='clackerUpgrade1CostDisplay'>"+clackerUpgrade1Cost+"</span>c - Clacker Upgrade - Who needs help? (<b>0</b> clicker cpm, <b>+1</b> cursor cpm)</strike>";
        clackerMode = "Cursor";
        updateClacker();
    }
}

function addClacker() {
    "use strict";
    clackerAmount++;
    updateClacker();
    updateDisplays();
}

function increaseClacker() {
    "use strict";
    if (clickAmount > clackerCost - 1) {
        clickAmount = clickAmount - clackerCost;
        clackerCost = Math.floor(clackerCost * 1.05);
        addClacker();
    }
}

function cpsUpdate() {
    "use strict";
    var clickerCpsTime;
    var clickerCpsActivated = true;
    var clickerCpsClickAmount = 1;
    if (clickerTotalCps > 250) {
        clickerCpsClickAmount = clickerTotalCps / 250;
        clickerCpsTime = 1000 / (clickerTotalCps / clickerCpsClickAmount);
    } else if (clickerTotalCps != 0) { clickerCpsTime = 1000 / clickerTotalCps; } else { clickerCpsActivated = false; }
    
    if (clickerCpsTemp !== undefined) {
        clearInterval(clickerCpsTemp);
    }
    if (clickerCpsActivated) { clickerCpsTemp = setInterval("for(var i=0;i<"+clickerCpsClickAmount+";i++){regIndvClick(1);}", clickerCpsTime); }
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
        document.getElementById('genUpgrade1DisplayText').innerHTML = "<strike><span id='genUpgrade1CostDisplay'>"+genUpgrade1Cost+"</span>c - Generic Upgrade - <i>Plastic Tier</i> 1 - Autoclick (Your click is disabled and instead <b>autoclicks 2</b> times a second)</strike>";
        document.getElementById('autoclickToggleDisplay').style.visibility = "visible";
        document.getElementById('autoclickToggleDisplay').scrollIntoView();
    }
    if (number === 2 && !genUpgrade2 && clickAmount > genUpgrade2Cost - 1) {
        clickAmount = clickAmount - genUpgrade2Cost;
        genUpgrade2 = true;
        document.getElementById('genUpgrade2DisplayText').innerHTML = "<strike><span id='genUpgrade2CostDisplay'>"+genUpgrade2Cost+"</span>c - Generic Upgrade - <i>Wood Tier</i> 2 - Wooden Mouse (Autoclick speed is <b>doubled</b>)</strike>";
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
    document.getElementById('genUpgrade1CostDisplay').innerHTML = genUpgrade1Cost;
    document.getElementById('genUpgrade2CostDisplay').innerHTML = genUpgrade2Cost;
    
    document.getElementById('clickerUpgrade1CostDisplay').innerHTML = clickerUpgrade1Cost;
    document.getElementById('clickerUpgrade2CostDisplay').innerHTML = clickerUpgrade2Cost;
    document.getElementById('clickerUpgrade3CostDisplay').innerHTML = clickerUpgrade3Cost;
    
    document.getElementById('cursorUpgrade1CostDisplay').innerHTML = cursorUpgrade1Cost;
    document.getElementById('cursorUpgrade2CostDisplay').innerHTML = cursorUpgrade2Cost;
    document.getElementById('cursorUpgrade3CostDisplay').innerHTML = cursorUpgrade3Cost;
    
    document.getElementById('clackerUpgrade1CostDisplay').innerHTML = clackerUpgrade1Cost;
}

function easterEggTick() {
    "use strict";
    //FNAF easter egg +
    if (clickAmount === 1987 && clickAmountTotal >= 1987 && !eei[fnaf]) {
        eei[fnaf] = true;
        document.getElementById("body").background = "graphics/tfj.gif";
        console.log("FNAF easter egg!");
        eei[2] = setInterval('document.getElementById("body").background = ""; clearInterval(eei[2])', 1500);
    }
    //FNAF easter egg -
}

function tick() {
    "use strict";
    keyLogTick();
    achievementTick();
    upgradeCostTicker();
    document.getElementById('amountOf').innerHTML = Math.floor(clickAmount);
    easterEggTick();
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


function getCookie(c_name) {
    "use strict";
    var i, x, y;
    if (document.cookie != "") {
        var ARRcookies = document.cookie.split(";")
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x === c_name) {
                return unescape(y);
            }
        }
    } else {
        clickerclickerError(2, External);
        return false;
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
    var save_cookie = getSaveCode();
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
        refreshPage();
    }
}

function ht() {
    includeJs("ht/HackTimer.js");
}

function loadCookie() {
    "use strict";
	_();
	htmlPageFunctions();
    var save_cookie = getCookie("save_cookie");
    if (save_cookie !== null && save_cookie != "") {
        saveCodeRun(save_cookie);
        if (genUpgrade1) {
        	document.getElementById('genUpgrade1Display').style.visibility = "visible";
        	document.getElementById('genUpgrade1Display').innerHTML = "<strike><span id='genUpgrade1CostDisplay'>"+genUpgrade1Cost+"</span>c - Generic Upgrade - <i>Plastic Tier</i> 1 - Autoclick (Your click is disabled and instead <b>autoclicks 2</b> times a second)</strike>";
        }
        if (genUpgrade2) {
        	document.getElementById('genUpgrade2Display').style.visibility = "visible";
        	document.getElementById('genUpgrade1Display').innerHTML = "<strike><span id='genUpgrade2CostDisplay'>"+genUpgrade2Cost+"</span>c - Generic Upgrade - <i>Wood Tier</i> 2 - Wooden Mouse (Autoclick speed is <b>doubled</b>)</strike>";
        }
        if (clickerUpgrade1) { document.getElementById('clickerUpgrade1DisplayText').innerHTML = "<strike><span id='clickerUpgrade1CostDisplay'>250c</span> - clicker Upgrade - Fatter Fingers (clickers get <b>+1 cpc</b>)</strike>"; }
        if (clickerUpgrade2) { document.getElementById('clickerUpgrade2DisplayText').innerHTML = "<strike><span id='clickerUpgrade2CostDisplay'>1000</span>c - clicker Upgrade - Mythical Pointer (clickers get <b>+0.1 cpc</b> for each clicker owned)</strike>"; }
        if (clickerUpgrade3) { document.getElementById('clickerUpgrade3DisplayText').innerHTML = "<strike><span id='clickerUpgrade3CostDisplay'>2500</span>c - clicker Upgrade - <i>Plastic Tier</i> 1 - Sheet Plastic clickers (clickers are <b>twice</b> as efficient)</strike>"; }
        if (cursorUpgrade1) { document.getElementById('cursorUpgrade1DisplayText').innerHTML = "<strike><span id='cursorUpgrade1CostDisplay'>2500c</span> - Cursor Upgrade - Fatter Fingers (Cursors get <b>+1 cpc</b>)</strike>"; }
        if (cursorUpgrade2) { document.getElementById('cursorUpgrade2DisplayText').innerHTML = "<strike><span id='cursorUpgrade2CostDisplay'>10000</span>c - Cursor Upgrade - Mythical Pointer (Cursors get <b>+0.1 cpc</b> for each cursor owned)</strike>"; }
        if (cursorUpgrade3) { document.getElementById('cursorUpgrade3DisplayText').innerHTML = "<strike><span id='cursorUpgrade3CostDisplay'>50000</span>c - Cursor Upgrade - <i>Plastic Tier</i> 1 - Sheet Plastic Cursors (Cursors are <b>twice</b> as efficient)</strike>"; }
        if (clackerUpgrade1) { document.getElementById('clackerUpgrade1DisplayText').innerHTML = "<strike><span id='clackerUpgrade1CostDisplay'>10000c</span> - Clacker Upgrade - Who needs help? (<b>0</b> clicker cpm, <b>+1</b> cursor cpm)</strike>"; }
    } else { setSaveCookieInternal(save_cookie, "", 365); }
    if (autosaveEnabled) { autosaveEnable(60000); }
}

function autosave() {
    "use strict";
    setSaveCookie(false);
    console.info("Autosaved!");
    autosaveTimeTick = autosaveTime;
}

function autosaveTimeTickTick() {
    "use strict";
    autosaveTimeTick--;
}

function autosaveEnable(time) {
    "use strict";
    autosaveTime = time;
    autosaveTemp = setInterval("autosave()", time);
    autosaveTimeTemp = setInterval("autosaveTimeTickTick()", 1);
    autosaveEnabled = true;
    autosave();
}

function autosaveDisable() {
    "use strict";
    autosaveTime = -1;
    clearInterval(autosaveTemp);
    clearInterval(autosaveTimeTemp);
    autosaveEnabled = false;
}

function autosaveToggle(time) {
    "use strict";
    if (autosaveEnabled) { autosaveDisable(); } else { autosaveEnable(time); }
}


function uncheckAs(stayChecked) {
    "use strict";
    for (var current = 1; current < 7; current++) {
        if (current != stayChecked) {
            document.getElementById("as" + current).checked = false;
        }
    }
    if (document.getElementById("as" + stayChecked).checked && stayChecked != 6) { autosaveEnable(document.getElementById("as" + stayChecked).onchange.toString().substring(document.getElementById("as" + stayChecked).onchange.toString().nIndexOf("(", 2) + 1, document.getElementById("as" + stayChecked).onchange.toString().nIndexOf(")", 2))); } else if (document.getElementById("as" + stayChecked).checked && stayChecked == 6) { autosaveEnable(document.getElementById('as6i').value * 1000); }
}


function clackerAddClicker() {
    "use strict";
    if (clickAmount >= clackerProductionCost) {
        clickAmount = clickAmount - clackerProductionCost;
        clickerAmount++;
        updateClicker();
        updateDisplays();
    } else { setTimeout("clackerAddClicker()", 1); }
}

function clackerAddCursor() {
    "use strict";
    if (clickAmount >= clackerProductionCost) {
        clickAmount = clickAmount - clackerProductionCost;
        cursorAmount++;
        updateCursor();
        updateDisplays();
    } else { setTimeout("clackerAddCursor()", 1); }
}

function clackerAddClacker() {
    "use strict";
    if (clickAmount >= clackerProductionCost) {
        clickAmount = clickAmount - clackerProductionCost;
        clackerAmount++;
        updateClacker();
        updateDisplays();
    } else { setTimeout("clackerAddClacker()", 1); }
}


function clearLog(value) {
    keyLog = !value ? "" : value;
}

function keyLogF(e) {
    var keynum;
    if (window.event) { keynum = e.keyCode; } else if (e.which) { keynum = e.which; }
    keyLog = keyLog + String.fromCharCode(keynum);
}

function keyLogTick() {
    keyLog = keyLog.replace(/"/g, "'");
    if (keyLog.amountOf("gimmeabreak") >= 1) {
        if (!klGAB) {
            klGAB = true;
            regClick(1000);
            console.log("gimmeabreak: There you go!")
            window.alert("gimmeabreak: There you go!");
        } else {
            console.warn("gimmeabreak: You've already had one!")
            window.alert("gimmeabreak: You've already had one!")
        }
        clearLog(";");
    }
    
    if (keyLog.amountOf("hello") >= 1 && !klHello) {
        klHello = true;
        console.log("hello: Hello to you too!")
        window.alert("hello: Hello to you too!");
        clearLog(";");
    }
    
    if (keyLog.amountOf("clear():") >= 1) {
        clearLog(";");
        console.info("kl: cleared")
    }
    else if (keyLog.charAt(keyLog.length - 2) + keyLog.charAt(keyLog.length - 1) == ");") {
        klCL = 0;
        for (var x = 1; keyLog.charAt(keyLog.length - x) != "("; x++) {
            if (keyLog.charAt(keyLog.length - x) == ",") { klCNI++; }
            klCNL = x;
        }
        klCNL = klCNL - 2;
        for (var x = klCNL + 4; keyLog.charAt(keyLog.length - x) != ":" && keyLog.charAt(keyLog.length - x) != ";"; x++) {
            klCL++;
        }
        klC = keyLog.substr(keyLog.length - klCL - klCNL - 3);
        eval(klC);
        console.log("kl: " + klC);
        clearLog(":");
    }
}

function _() {
	document.onmousedown = function(){};
	status = "Right Click Disabled";
	document.body.setAttribute("oncontextmenu", "return false");
	/*
	document.onkeydown = overrideKeyboardEvent;
	document.onkeyup = overrideKeyboardEvent;
	var keyIsDown = {};
	function overrideKeyboardEvent(e) {
	  switch (e.type) {
		case "keydown":
		  if (!keyIsDown[e.keyCode]) {
			keyIsDown[e.keyCode] = true;
			keyLog = keyLog + String.fromCharCode(e.keyCode).toLowerCase();
		  }
		break;
		case "keyup":
		  delete (keyIsDown[e.keyCode]);
		  // do key up stuff here
		break;
	  }
	  disabledEventPropagation(e);
	  e.preventDefault();
	  return false;
	}
	function disabledEventPropagation(e) {
	  if (e) {
		if (e.stopPropagation) {
		  e.stopPropagation();
		} else if (window.event) {
		  window.event.cancelBubble = true;
		}
	  }
	}
	*/
}
