
let licenceAbate = true;
let createNumber = true;
let enemy = document.getElementById("enemy");
let enemy2 = document.getElementById("enemy2");
let winGame = document.getElementById("winGame");

/* lee position */
var leeFloorDown = true;
var enemyJumping = false;
var enemyFalling = false;

/* time */
let scoundTaki = 0;
let scoundDotai = 0;
let minuteTaki = 0;
/* walk BruceLee */
function WalkLee(user, userCarecter) {
    floorDown.style.display = "none"; /* for user not dblclick on the floor */
    moveLee = Math.abs(leePosition - (user.pageX - 120)) / 600; /* for scound of play walk lee */
    userCarecter.className = ""; /* for delete keyframe woolLee */
    leePosition = user.pageX; /* for delete past position and add a new position fo MR.Lee */
    userCarecter.style.left = (leePosition - 120) + "px"; /* for move */
    userCarecter.style.transition = moveLee + "s";
    userCarecter.style.animationIterationCount = moveLee;
}
/* delete keyframe walkTo and add keyframe woolLee */
function startWoolOfLee(userCarecter) {
    userCarecter.style.animationIterationCount = "infinite";
    floorDown.style.display = "block"; // enable onclick on the floor
}
/* walk Enemy */
function WalkEnemy(userEnemy) {
    if (enemyPosition > leePosition) {
        enemyPosition = (leePosition + 100);
        userEnemy.style.left = enemyPosition + "px";
        userEnemy.style.animationIterationCount = secoundOfWalkEnemy;
        userEnemy.style.transition = secoundOfWalkEnemy + "s";
        walkLeft(userEnemy);
        // userEnemy.className = "enemyWalkLeft"; // add key frame walk side left enemy
        licenceOfenemyWalk = false;
        // userEnemy.style.backgroundImage = "url(enemy/left/pic1.png)";
        setTimeout(() => {// remove keyframe walkenemy and add keyframe wool
            // userEnemy.className = "enemyWoolLeft"; // for first secound
            woolLeft(userEnemy);
            userEnemy.style.animationIterationCount = "infinite";
            licenceOfenemyWalk = true;
        }, secoundOfWalkEnemy * 1000);
    }
    else if (enemyPosition < leePosition) {
        enemyPosition = (leePosition - 300);
        userEnemy.style.left = enemyPosition + "px";
        userEnemy.style.animationIterationCount = secoundOfWalkEnemy;
        userEnemy.style.transition = secoundOfWalkEnemy + "s";
        // userEnemy.className = "enemyWalkRight"; // add key frame walk side right enemy
        walkRight(userEnemy);
        licenceOfenemyWalk = false;
        // userEnemy.style.backgroundImage = "url(enemy/right/pic1.png)";
        setTimeout(() => {// remove keyframe walkenemy and add keyframe wool
            // userEnemy.className = "enemyWoolRight";
            woolRight(userEnemy);
            userEnemy.style.animationIterationCount = "infinite";
            licenceOfenemyWalk = true;
        }, secoundOfWalkEnemy * 1000);
    }
}
/* enter a damage to enemy left */
function enterDamageLeeLeft(userCarecter) {
    userCarecter.style.animationIterationCount = "1"; // tedad egra shodan keyframe
    setTimeout(() => {
        enterDamageByUser = true;
        userCarecter.className = "woolLeft"; // remove keyframe damage and add keyframe wool
        userCarecter.style.animationIterationCount = "infinite";
        floorDown.style.display = "block"; // enable onclick on floor
    }, 1000);
}
/* enter a damage to enemy right */
function enterDamageLeeRight(userCarecter) {
    userCarecter.style.animationIterationCount = "1"; // tedad egra shodan keyframe
    setTimeout(() => {
        enterDamageByUser = true;
        userCarecter.className = "wool"; // remove keyframe damage and add keyframe wool
        userCarecter.style.animationIterationCount = "infinite";
        floorDown.style.display = "block"; // enable onclick on floor
    }, 1000);
}
/* show winMenu */
function showWinMenu() {
    winGame.className = "showWinGame";
    showTimeGame_inMenu();
    setTimeout(() => {
        setStar_inMenu();
    }, 800);
}
/* win motor*/
function winMotors(enemyThisPart) {
    if (enemyBoxHP < 0 || enemyBoxHP == 0) {
        enableComeback = false;
        createNumber = false;
        enemyHP.style.display = "none";
        enemyThisPart.className = "";
        if (enemyPosition > leePosition) {
            if (ChooseLevel == "stage1") {
                enemyThisPart.style.backgroundImage = "url(enemy/passaway.png)";
            }else{
                enemyThisPart.style.backgroundImage = "url(enemy2/passaway2.png)";
            }
        }
        else if (enemyPosition < leePosition) {
            if (ChooseLevel == "stage1") {
                enemyThisPart.style.backgroundImage = "url(enemy/passaway_right.png)";
            }
            else{
                enemyThisPart.style.backgroundImage = "url(enemy2/passaway3.png)";
            }
        }
        enemyThisPart.style.backgroundPosition = "0% 98%";
        enemyThisPart.style.width = "500px";
        enemyThisPart.style.backgroundSize = "contain";
        setTimeout(() => {
            clearTimeout(damageAboutEnemy); // run away
            clearTimeout(comeBack);
        }, 100);
        setTimeout(() => {
            /* show winMenu */
            showWinMenu();
            clearTimeout(timeGoing);

            enemyThisPart.style.display = "none";
            /* star */
            let starNumber;
            let timeTakiRight = takiRight.innerHTML;
            let timeDotaiRight = dotaiRight.innerHTML;
            let minute = takiLeft.innerHTML;/* type String */
            let min_typeNumber = parseInt(minute);/* change to type Number */
            let secound = timeDotaiRight + timeTakiRight;/* type String */
            let sec_typeNumber = parseInt(secound);/* change to type Number */
            if (sec_typeNumber < 30 && min_typeNumber != 1) {
                starNumber = 3;
            }
            else if (sec_typeNumber < 50 && min_typeNumber != 1) {
                starNumber = 2;
            }
            else if (sec_typeNumber > 50 && min_typeNumber != 1) {
                starNumber = 1;
            }
            else {
                starNumber = 1;
            }
            increaseStar = fiteredLevel;
            increaseStar.star = starNumber;
            /* set item to localStorage */
            createLocalStorage();
        }, 1000);
    }
}
/* abate HP from enemy */
function abateEnemyHP(spirit) {
    spirit.style.width = enemyBoxHP + "px";
    if (ChooseLevel == "stage1") {
        winMotors(enemy);
    }
    else {
        winMotors(enemy2);
    }
}
/* create localStorage */
function createLocalStorage() {
    /* get item from localStorage */
    userStar = JSON.parse(localStorage.getItem("userStar"));
    /* if userStar == undifinded */
    if (!userStar) {
        userStar = [];
    }
    /* create obj item */
    let levelId = increaseStar.id;
    let levelStars = increaseStar.star;
    let enemysId = increaseStar.enemyId;

    let starIndex = userStar.findIndex(star => star.levelId == increaseStar.id);
    if (starIndex == -1) {
        userStar.push({ levelId, levelStars, enemysId });
    }
    else {
        userStar[starIndex].levelStars = increaseStar.star;
    }
    localStorage.setItem("userStar", JSON.stringify(userStar));
}
/* enter damage by enemy after damage lee */
function enterDamageByEnemy(enemyThisPart, userCarecter) {
    enemyThisPart.style.animationIterationCount = "1";
    userCarecter.className = "";
    if(leeDamage == true){
        Damagelee.play();
    }
    if (enemyPosition > leePosition) {
        // enemyThisPart.className = "enemyHurtLeft";
        damageLeft(enemyThisPart);
        userCarecter.style.backgroundImage = "url(damage/leeAkh2.png)";
        setTimeout(() => {
            userCarecter.className = "wool";
            // enemyThisPart.className = "enemyWoolLeft";
            woolLeft(enemyThisPart);
            enemyThisPart.style.animationIterationCount = "infinite";
        }, 1000);
        if (ChooseLevel == "stage1") {
            abateLeeHP(lee1SizeHP);
        }
        else {
            abateLeeHP(lee2SizeHP);
        }
    }
    else if (enemyPosition < leePosition) {
        // enemyThisPart.className = "enemyHurtRight";
        damageRight(enemyThisPart);
        userCarecter.style.backgroundImage = "url(damage/leeAkh1.png)";
        setTimeout(() => {
            userCarecter.className = "woolLeft";
            // enemyThisPart.className = "enemyWoolRight";
            woolRight(enemyThisPart);
            enemyThisPart.style.animationIterationCount = "infinite";
        }, 1000);
        if (ChooseLevel == "stage1") {
            abateLeeHP(lee1SizeHP);
        }
        else {
            abateLeeHP(lee2SizeHP);
        }
    }
}
/* abate BruceLee HP by enemy damage */
function abateLeeHP(spirit) {
    leeBoxHP = leeBoxHP - 20; // har bar 20px az width hp lee kam mikone
    spirit.style.width = leeBoxHP + "px";
}
/* come back about enemy */
function enemyComeBack(enemyThisPart) {
    if (enemyPosition > leePosition) {
        licenceOfenemyWalk = false;
        comeBackLeft = Math.ceil(Math.abs(enemyPosition - 1200) / 400); // baraye pida kardane sanie bine point va mahale enemy 
        enemyPosition = 1000; // beraye inke hafezeh ye ghablish pak beshe va pos jadid ro begire
        enemyThisPart.style.left = enemyPosition + "px";
        setTimeout(() => {
            // enemyThisPart.className = "comeBackRight";
            comeBackRightEnemy(enemyThisPart);
        }, 100);
        setTimeout(() => {
            // enemyThisPart.className = "enemyWoolLeft";
            woolLeft(enemyThisPart);
        }, comeBackLeft * 1000);
    }
    else if (enemyPosition < leePosition) {
        licenceOfenemyWalk = false;
        comeBackRight = Math.ceil(Math.abs(enemyPosition - 100) / 400); // baraye pida kardane sanie bine point va mahale enemy
        enemyPosition = 100;
        enemyThisPart.style.left = enemyPosition + "px";
        setTimeout(() => {
            // enemyThisPart.className = "comeBackLeft";
            comeBackLeftEnemy(enemyThisPart);
        }, 100);
        setTimeout(() => {
            // enemyThisPart.className = "enemyWoolRight";
            woolRight(enemyThisPart);
        }, comeBackRight * 1000);
    }
    enemyWalkAuto = setTimeout(() => {
        if(enemyFight == true){
            FightEnemy.play();
        }
        if (ChooseLevel == "stage1") {
            WalkEnemy(enemy);
        }
        else {
            WalkEnemy(enemy2);
        }
    }, 6000);
}
/* FPS */
function FPSMotor() {
    FPSGame = Math.ceil(Math.random() * 100);
    if (FPSGame > 60) {
        FPS.style.color = "green";
    }
    else if (FPSGame < 60) {
        FPS.style.color = "yellow";
        if (FPSGame < 30) {
            FPS.style.color = "red";
        }
    }
    FPS.innerHTML = "FPS" + " " + FPSGame;
}
/* Time */
function Time() {
    timeGoing = setInterval(() => {
        scoundTaki = ++scoundTaki;
        takiRight.innerHTML = scoundTaki;
        if (scoundTaki == 9) {
            setTimeout(() => {
                scoundDotai = ++scoundDotai;
                dotaiRight.innerHTML = scoundDotai;
                scoundTaki = 0;
                takiRight.innerHTML = scoundTaki;
            }, 1000);
        }
        if (scoundDotai == 6) {
            setTimeout(() => {
                scoundDotai = 0;
                dotaiRight.innerHTML = scoundDotai;
                scoundTaki = 0;
                takiRight.innerHTML = scoundTaki;
                minuteTaki = ++minuteTaki;
                takiLeft.innerHTML = minuteTaki;
            }, 100);
        }
    }, 1000);
}
/* show time in menu */
function showTimeGame_inMenu() {
    let timeTakiRight = takiRight.innerHTML;
    let timeDotaiRight = dotaiRight.innerHTML;
    let timeTakiLeft = takiLeft.innerHTML;
    /* show time in Menu */
    let showTime = "0" + timeTakiLeft + " : " + timeDotaiRight + timeTakiRight;
    timeInMenu.innerHTML = showTime;
}
/* damage bottom for lee */
function damageBottom(userCarecter) {
    if (licencehelp == true) {
        textHelp3.style.display = "none";
        bottomDamage.className = "";
        centerDamage.style.display = "block";
        topDamage.style.display = "block";
        cover.style.display = "none";
        // enter a enemy
        setTimeout(() => {
            if (ChooseLevel == "stage1") {
                WalkEnemy(enemy);
            }
            else {
                WalkEnemy(enemy2);
            }
            wran.style.display = "none";
        }, 1000);
        licencehelp = false;
    }
    floorDown.style.display = "none";
    if (enemyPosition < leePosition) {
        userCarecter.className = "damageLeftBottom";
        if (ChooseLevel == "stage1") {
            enterDamageLeeLeft(lee1);
        }
        else {
            enterDamageLeeLeft(lee2);
        }
    }
    else if (enemyPosition > leePosition) {
        userCarecter.className = "damageRightBottom";
        if (ChooseLevel == "stage1") {
            enterDamageLeeRight(lee1);
        }
        else {
            enterDamageLeeRight(lee2);
        }
    }
    if (licenceOfenemyWalk == true) {
        abateHp = setTimeout(() => {
            enemyBoxHP = enemyBoxHP - 10;
            if (ChooseLevel == "stage1") {
                abateEnemyHP(enemySizeHP);
            }
            else {
                abateEnemyHP(enemy2SizeHP);
            }
        }, 1000);
        damageAboutEnemy = setTimeout(() => {
            if (licenceOfenemyWalk == true) {
                if (ChooseLevel == "stage1") {
                    enterDamageByEnemy(enemy, lee1);
                }
                else {
                    enterDamageByEnemy(enemy2, lee2);
                }
            }
        }, 2000);
        if (enableComeback == true) {
            comeBack = setTimeout(() => {
                if (licenceOfenemyWalk == true) {
                    if (ChooseLevel == "stage1") {
                        enemyComeBack(enemy);
                    }
                    else {
                        enemyComeBack(enemy2);
                    }
                    clearTimeout(abateHp);
                }
            }, 3000);
        }
    }
}
/* damage center for lee */
function damageCenter(userCarecter) {
    if (ChooseLevel == "stage1") {
        enemyDodging(enemy);
    }
    else {
        enemyDodging(enemy2);
    }
    if (licencehelp == true) {
        centerDamage.className = "";
        centerDamage.style.display = "none";
        textHelp1.style.display = "none";
        textHelp2.style.display = "block";
        topDamage.className = "helpDamageTop";
        topDamage.style.display = "block";
        floorDown.style.display = "none";
    }
    if (enemyPosition < leePosition) {
        userCarecter.className = "damageLeftCenter";
        if (ChooseLevel == "stage1") {
            enterDamageLeeLeft(lee1);
        }
        else {
            enterDamageLeeLeft(lee2);
        }
    }
    else if (enemyPosition > leePosition) {
        userCarecter.className = "damageRightCenter";
        if (ChooseLevel == "stage1") {
            enterDamageLeeRight(lee1);
        }
        else {
            enterDamageLeeRight(lee2);
        }
    }
    if (licenceOfenemyWalk == true) {
        if (licenceAbate == true) {
            abateHp = setTimeout(() => {
                enemyBoxHP = enemyBoxHP - 30;
                if (ChooseLevel == "stage1") {
                    abateEnemyHP(enemySizeHP);
                }
                else {
                    abateEnemyHP(enemy2SizeHP);
                }
            }, 1000);
        }
        damageAboutEnemy = setTimeout(() => {
            if (licenceOfenemyWalk == true) {
                if (ChooseLevel == "stage1") {
                    enterDamageByEnemy(enemy, lee1);
                }
                else {
                    enterDamageByEnemy(enemy2, lee2);
                }
            }
        }, 2000);
        if (enableComeback == true) {
            comeBack = setTimeout(() => {
                if (licenceOfenemyWalk == true) {
                    if (ChooseLevel == "stage1") {
                        enemyComeBack(enemy);
                    }
                    else {
                        enemyComeBack(enemy2);
                    }
                    clearTimeout(abateHp);
                }
            }, 3000);
        }
    }
}
/* damage top for lee */
function damageTop(userCarecter) {
    if(ChooseLevel == "stage1"){
        enemyDodging(enemy);
    }
    else{
        enemyDodging(enemy2);
    }
    if (licencehelp == true) {
        textHelp2.style.display = "none";
        topDamage.className = "";
        topDamage.style.display = "none";
        textHelp3.style.display = "block";
        bottomDamage.className = "helpDamageBottom";
        bottomDamage.style.display = "block";
    }
    floorDown.style.display = "none";
    if (enemyPosition < leePosition) {
        userCarecter.className = "damageLeftTop";
        if (ChooseLevel == "stage1") {
            enterDamageLeeLeft(lee1);
        }
        else {
            enterDamageLeeLeft(lee2);
        }
    }
    else if (enemyPosition > leePosition) {
        userCarecter.className = "damageRightTop";
        if (ChooseLevel == "stage1") {
            enterDamageLeeRight(lee1);
        }
        else {
            enterDamageLeeRight(lee2);
        }
    }
    if (licenceOfenemyWalk == true) {
        if (licenceAbate == true) {
            abateHp = setTimeout(() => {
                enemyBoxHP = enemyBoxHP - 50;
                if (ChooseLevel == "stage1") {
                    abateEnemyHP(enemySizeHP);
                }
                else {
                    abateEnemyHP(enemy2SizeHP);
                }
            }, 1000);
        }
        damageAboutEnemy = setTimeout(() => {
            if (licenceOfenemyWalk == true) {
                if (ChooseLevel == "stage1") {
                    enterDamageByEnemy(enemy, lee1);
                }
                else {
                    enterDamageByEnemy(enemy2, lee2);
                }
            }
        }, 2000);
        if (enableComeback == true) {
            comeBack = setTimeout(() => {
                if (licenceOfenemyWalk == true) {
                    if (ChooseLevel == "stage1") {
                        enemyComeBack(enemy);
                    }
                    else {
                        enemyComeBack(enemy2);
                    }
                    clearTimeout(abateHp);
                }
            }, 3000);
        }
    }
}
/* jakhali */
function enemyDodging(enemyThisPart) {
    if (createNumber == true) {
        var dodging = Math.ceil(Math.random() * 2);
    }
    if (dodging == 2 && licenceOfenemyWalk == true) {
        licenceAbate = false;
        enemyThisPart.className = "";
        if (enemyPosition > leePosition) {
            if (ChooseLevel == "stage1") {
                enemyThisPart.style.backgroundImage = "url(enemy/left/jakhaliLeft.png)";
            }
            else{
                enemyThisPart.style.backgroundImage = "url(enemy2/jakhaliLeftEnemy2.png)";
            }
        }
        else if (enemyPosition < leePosition) {
            if (ChooseLevel == "stage1") {
                enemyThisPart.style.backgroundImage = "url(enemy/left/jakhaliRight.png)";
            }
            else{
                enemyThisPart.style.backgroundImage = "url(enemy/jakhaliRightEnemy2.png)";
            }
        }
        setTimeout(() => {
            clearTimeout(damageAboutEnemy); // run away
            clearTimeout(comeBack);
        }, 100);
        /* exit from doding style */
        damageAboutEnemy = setTimeout(() => {
            if (licenceOfenemyWalk == true) {
                if (ChooseLevel == "stage1") {
                    enterDamageByEnemy(enemy, lee1);
                }
                else {
                    enterDamageByEnemy(enemy2, lee2);
                }
                if (enemyPosition > leePosition) {
                    // enemyThisPart.style.backgroundImage = "url(enemy/left/pic1.png)";
                }
                else if (enemyPosition < leePosition) {
                    // enemyThisPart.style.backgroundImage = "url(enemy/right/pic1.png)";
                }
            }
        }, 2000);
        if (enableComeback == true) {
            comeBack = setTimeout(() => {
                if (licenceOfenemyWalk == true) {
                    if (ChooseLevel == "stage1") {
                        enemyComeBack(enemy);
                    }
                    else {
                        enemyComeBack(enemy2);
                    }
                    clearTimeout(abateHp);
                }
            }, 3000);
        }
    } else {
        licenceAbate = true;
    }
}

/* jumping */
function jumping(carecterPosition) {
    if (enemyPosition > leePosition) {//lee jumpingLeft
        if (leeFloorDown == true) {
            lee2.className = "leeJumpLeft";
            lee2.style.bottom = "150px";
            lee2.style.transition = "1s";
            leeFloorDown = false;
            enemyJumping = true;
            setTimeout(() => {
                lee2.className = "wool";
            }, 1000);
        }
        else if (leeFloorDown == false) {
            moveInStage(carecterPosition);
        }
        setTimeout(() => { //enemy jumpingLeft
            if (enemyJumping == true) {
                enemyJumping = false;
                enemy2.className = "enemyJumpLeft";
                enemy2.style.bottom = "150px";
                enemy2.style.transition = "1s";
                setTimeout(() => {
                    enemy2.className = "enemy2WoolLeft";
                }, 1000);
            }
        }, 2000);
    }
    else if (enemyPosition < leePosition) {//lee jumpingRight
        if (leeFloorDown == true) {
            lee2.className = "leeJumpRight";
            lee2.style.bottom = "150px";
            lee2.style.transition = "1s";
            leeFloorDown = false;
            enemyJumping = true;
            setTimeout(() => {
                lee2.className = "woolLeft";
            }, 1000);
        }
        else if (leeFloorDown == false) {
            moveInStage(carecterPosition);
        }
        setTimeout(() => {
            if (enemyJumping == true) {//enemy jumpingRight
                enemyJumping = false;
                enemy2.className = "enemyJumpRight";
                enemy2.style.bottom = "150px";
                enemy2.style.transition = "1s";
                setTimeout(() => {
                    enemy2.className = "enemy2WoolRight";
                }, 1000);
            }
        }, 2000);
    }
}
/* falling */
function falling(carecterPosition) {
    if (enemyPosition > leePosition) {//lee fallingLeft
        if (leeFloorDown == true) {
            moveInStage(carecterPosition);
        }
        else if (leeFloorDown == false) {
            lee2.className = "leeFallLeft ";
            lee2.style.bottom = "10px";
            lee2.style.transition = "1s";
            leeFloorDown = true;
            enemyFalling = true;
            setTimeout(() => {
                lee2.className = "wool";
            }, 1000);
        }
        setTimeout(() => {
            if (enemyFalling == true) {//enemy fallingLeft
                enemyFalling = false;
                enemy2.className = "enemyFallLeft";
                enemy2.style.bottom = "10px";
                enemy2.style.transition = "1s";
                setTimeout(() => {
                    enemy2.className = "enemy2WoolLeft";
                }, 1000);
            }
        }, 2000);
    }
    else if (enemyPosition < leePosition) {//lee fallingRight
        if (leeFloorDown == true) {
            moveInStage(carecterPosition);
        }
        else if (leeFloorDown == false) {
            lee2.className = "leeFallRight ";
            lee2.style.bottom = "10px";
            lee2.style.transition = "1s";
            leeFloorDown = true;
            enemyFalling = true;
            setTimeout(() => {
                lee2.className = "woolLeft";
            }, 1000);
        }
        setTimeout(() => {
            if (enemyFalling == true) {//enemy fallingRight
                enemyFalling = false;
                enemy2.className = "enemyFallRight";
                enemy2.style.bottom = "10px";
                enemy2.style.transition = "1s";
                setTimeout(() => {
                    enemy2.className = "enemy2WoolRight";
                }, 1000);
            }
        }, 2000);
    }
}

/* refresh */
function refresh(userCarecter, spirit, enemyThisPart, spiritEnemy) {
    enemy.style.backgroundImage = "";
    enemy2.style.backgroundImage = "";
    licenceOfenemyWalk = false;
    /* set star in win menu */
    starLevel1.style.display = "none";
    starLevel2.style.display = "none";
    starLevel3.style.display = "none";
    /* refresh Time! */
    dotaiRight.innerHTML = "0";
    takiLeft.innerHTML = "0";
    takiRight.innerHTML = "0";
    setTimeout(() => {
        scoundTaki = 0;
        scoundDotai = 0;
        minuteTaki = 0;
    }, 100);
    enableComeback = true; /* true comeBack function */
    enemyHP.style.display = "block";/* show enemyHP */
    winGame.className = "hideWinGame";
    let wite = document.getElementById("wite");
    //lee
    leePosition = 200;
    userCarecter.style.left = "200px";
    leeBoxHP = 180;
    spirit.style.width = "180px";
    // enemy
    enemyPosition = 1600;
    enemy.style.left = "1600px";
    enemy2.style.left = "1600px";
    enemyThisPart.style.display = "block";
    wran.style.display = "block";
    enemyBoxHP = 120;
    spiritEnemy.style.width = "120px";
    stopMenu.style.display = "none";
    wite.style.display = "block";
    loadIcon.style.display = "block";
    setTimeout(() => {
        wite.style.display = "none";
        loadIcon.style.display = "none";
    }, 3000);
    // enter a enemy
    setTimeout(() => {
        if (ChooseLevel == "stage1") {
            WalkEnemy(enemy);
        }
        else {
            WalkEnemy(enemy2);
        }
        wran.style.display = "none";
    }, 12000);
    enemyThisPart.style.backgroundPosition = "30% 91%";
    enemyThisPart.style.width = "350px";
    enemy.style.backgroundSize = "113% 135%";
    enemy2.style.backgroundSize = "79% 100%";
    /* start time */
    // setTimeout(() => {
    //     Time();
    // }, 2000);
}
/* Game mood */
function moodGame() {
    mood.style.display = "none";
    cover.style.display = "block";
    loadIcon.style.display = "none";
}
/* set star in Menu */
function setStar_inMenu() {
    /* get item from localStorage */
    userStar = JSON.parse(localStorage.getItem("userStar"));
    let starsGet;
    for (let i = 0; i < userStar.length; i++) {
        if (ChooseLevel == "stage1") {
            starsGet = userStar[1].levelStars;
        }else{
            starsGet = userStar[0].levelStars;
        }
        console.log(starsGet);
    }

    if (starsGet == 1) { /* if user get 1 star */
        starLevel1.style.display = "block";
    }
    else if (starsGet == 2) {/* if user get 2 star */
        starLevel1.style.display = "block";
        starLevel2.style.display = "block";
    }
    else if (starsGet == 3) {/* if user get 3 star */
        starLevel1.style.display = "block";
        starLevel2.style.display = "block";
        starLevel3.style.display = "block";
    }
    else {/* if user get anything star */
        starLevel1.style.display = "none";
        starLevel2.style.display = "none";
        starLevel3.style.display = "none";
    }
}
/* click on btns that they are in the winMenu */
function clickOnBtns() {
    if (ChooseLevel == "stage1") {
        refresh(lee1, lee1SizeHP, enemy, enemySizeHP);
        stage1.style.display = "none";
    }
    else {
        refresh(lee2, lee2SizeHP, enemy2, enemy2SizeHP);
        stage2.style.display = "none";
    }
    gameMenu_stage.style.display = "block";
}