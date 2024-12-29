/* json of levels */
levelsGame = [
    { id: 1, star: 0, bgImage: "ghofl.png", type: "open", enemyId: 1, },
    { id: 2, star: 0, bgImage: "ghofl.png", type: "open", enemyId: 2, },
    { id: 3, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 4, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 5, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 6, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 7, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 8, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 9, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 10, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 11, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 12, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 13, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 14, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 15, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 16, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 17, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 18, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 19, star: 0, bgImage: "ghofl.png", type: "close" },
    { id: 20, star: 0, bgImage: "ghofl.png", type: "close" },
];
/* impotant! */
/* set star from localStorage to to the JSON */
function showStar() {
    userStar = JSON.parse(localStorage.getItem("userStar"));
    if (userStar != undefined) {
        for (let i = 0; i < userStar.length; i++) {
            let filteredUserStar = levelsGame.find(el => el.id == userStar[i].levelId);
            filteredUserStar.star = userStar[i].levelStars;
        }
    }
}
/* set value to help parametr */
let memuryOfHelp = true;
let cover = document.getElementById("cover");
function setValueToHelp(){
    licencehelp = true;
    licence_key = true;
    licence_key_S = false;
    licence_key_D = false;
    licence_key_W = true;
    licence_keyboard = false;
}

let holderLevel = document.getElementById("holderLevel");

/* create item of level */
function createLevels(jsonDataLevel) {

    var levelCountiner = document.createElement("div");
    levelCountiner.className = "levels";
    /* set id to levels by dinamic */
    levelCountiner.setAttribute("data-id", jsonDataLevel.id);
    /* enter to level */
    levelCountiner.addEventListener("click", () => {
        let cid = levelCountiner.getAttribute("data-id");
        fiteredLevel = levelsGame.find(el => el.id == cid);
        /* level 1 */
        if (cid == 1) {
            ChooseLevel = "stage1";
            gameMenu_stage.style.display = "none";
            stage1.style.display = "block";
            loadIcon.style.display = "block";
            /* choice mood */
            mood.style.display = "block";
            // help
            if (memuryOfHelp == true) {
                setValueToHelp();
            }
            /* create lee */
            lee1 = document.getElementById("lee1");
            lee1.style.left = leePosition + "px";
            lee1.className = "wool"; /* for wool about BruseLee add first keyframe */
            /* create enemy */
            enemy = document.getElementById("enemy");
            enemy.style.left = enemyPosition + "px";
            /* show btns */
            stopGame.style.display = "block";
            floorDown.style.height = "28%";
            // refresh(lee1, lee1SizeHP, enemy, enemySizeHP);
        }
        /* level 2 */
        else if (cid == 2) {
            ChooseLevel = "stage2";
            gameMenu_stage.style.display = "none";
            stage2.style.display = "block";
            loadIcon.style.display = "block";
            /* choice mood */
            mood.style.display = "block";
            // help
            if (memuryOfHelp == true) {
                setValueToHelp();
            }
            /* create lee */
            lee2 = document.getElementById("lee2");
            lee2.style.left = leePosition + "px";
            lee2.className = "wool"; /* for wool about BruseLee add first keyframe */
            /* create enemy */
            enemy2 = document.getElementById("enemy2");
            enemy2.style.left = enemyPosition + "px";
            /* show btns */
            stopGame.style.display = "block";
            floorDown.style.height = "13%";
            // refresh(lee2, lee2SizeHP, enemy2, enemy2SizeHP);
        }
    });

    let levelValue = document.createElement("div");
    levelValue.className = "levelNumber";

    let starLevel = document.createElement("div");
    starLevel.className = "star";
    starLevel.style.backgroundImage = "url(gameEnviromentIMG/starLevel.png)";

    /* level type => Open or Close */
    let typeOfLevel = jsonDataLevel.type;
    if (typeOfLevel == "open") {
        levelValue.innerHTML = jsonDataLevel.id;
        levelValue.style.backgroundColor = "#ffcb94";
        starLevel.style.display = "block";
        /* star number */
        let starCountainer = jsonDataLevel.star;
        if (starCountainer == 1) {
            starLevel.style.width = 23 * starCountainer + "px";
        }
        else if (starCountainer == 2) {
            starLevel.style.width = 24 * starCountainer + "px";
        }
        if (starCountainer == 3) {
            starLevel.style.width = 25 * starCountainer + "px";
        }
    }
    /* if typeOfLevel == close or != open */
    else {
        levelValue.style.backgroundImage = "url(gameEnviromentIMG/" + jsonDataLevel.bgImage + ")";
        levelValue.style.backgroundColor = "#4a1400";
    }

    levelCountiner.appendChild(levelValue);
    levelCountiner.appendChild(starLevel);
    holderLevel.appendChild(levelCountiner);
}

/* navigation JSON levels */
function navigationLevelJson(jsonName) {
    holderLevel.innerHTML = "";
    for (let i = 0; i < jsonName.length; i++) {
        createLevels(jsonName[i]);
    }
}
/* create levels */
navigationLevelJson(levelsGame);

let recordBtn = document.getElementById("recordBtn");
recordBtn.onclick = () => {
    recordMenu.style.left = "0";
}
let closeRecordMenu = document.getElementById("closeRecordMenu");
closeRecordMenu.onclick = () => {
    recordMenu.style.left = "-1300px";
}


/* record localStorage */
function recordLocalStorage() {
    /* get item from star localStorage */
    userStar = JSON.parse(localStorage.getItem("userStar"));
    /* get item from record localStorage */
    record = JSON.parse(localStorage.getItem("record"));
    /* if array record == undifinded */
    if (!record) {
        record = [];
    }
    /* get information from userStar localStorage */
    for (let i = 0; i < userStar.length; i++) {
        let starNumber = userStar[i].levelStars;
        let enemyId = userStar[i].levelId;
        let profile = userStar[i].enemysId;
        /* if item attend in the local storage */
        let recordIndex = record.findIndex(el => el.enemyId == userStar[i].levelId);

        if (recordIndex != -1) {
            record[recordIndex].starNumber = userStar[i].levelStars;
        }
        else {/* push information in the record */
            record.push({ enemyId, starNumber, profile });
            console.log(record);
        }
    }
    /* set item to localStorage */
    localStorage.setItem("record", JSON.stringify(record));
}

let recordHolder = document.getElementById("recordHolder");
/* create item in recordMenu */
function createRecordItem(recordItem) {

    let itemCountainer = document.createElement("div");
    itemCountainer.className = "recordItem";

    let imgProfile = document.createElement("div");
    imgProfile.className = "profile";
    if (recordItem.profile == 1) {
        imgProfile.style.backgroundImage = "url(gameEnviromentIMG/profile1.png)";
    } else {
        imgProfile.style.backgroundImage = "url(gameEnviromentIMG/profile2.png)";
    }

    let discription = document.createElement("div");
    discription.className = "discription";
    discription.innerHTML = "شما دیشب توانستید اصغر را در حیاطش به قتل برسانید و مقدار " + recordItem.starNumber + " عدد ستاره دریافت کنید!";

    itemCountainer.appendChild(imgProfile);
    itemCountainer.appendChild(discription);
    recordHolder.appendChild(itemCountainer);
}

/* navigation item that they are in the recordMenu */
function navRecord() {
    record = JSON.parse(localStorage.getItem("record"));

    recordHolder.innerHTML = "";

    for (let i = 0; i < record.length; i++) {
        createRecordItem(record[i]);
    }
}

recordBtn.addEventListener("click", () => {
    /* get item from star localStorage */
    userStar = JSON.parse(localStorage.getItem("userStar"));

    if (userStar != null) {
        recordLocalStorage();
        navRecord();
    }
});