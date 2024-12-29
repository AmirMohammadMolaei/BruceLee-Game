
/* wool enemy */
function woolLeft(enemyThisPart){

    if (ChooseLevel == "stage1") {

        enemyThisPart.className = "enemyWoolLeft";
    }
    else if(ChooseLevel == "stage2") {

        enemyThisPart.className = "enemy2WoolLeft";
    }
}
function woolRight(enemyThisPart){

    if (ChooseLevel == "stage1") {

        enemyThisPart.className = "enemyWoolRight";
    }
    else if(ChooseLevel == "stage2") {

        enemyThisPart.className = "enemy2WoolRight";
    }
}

/* walk enemy */
function walkLeft(userEnemy){
    if (ChooseLevel == "stage1") {
        userEnemy.className = "enemyWalkLeft";
    }
    else if(ChooseLevel == "stage2") {
        userEnemy.className = "enemy2WalkLeft";
    }
}
function walkRight(userEnemy){
    if (ChooseLevel == "stage1") {
        userEnemy.className = "enemyWalkRight";
    }
    else if(ChooseLevel == "stage2") {
        userEnemy.className = "enemy2WalkRight";
    }
}

/* comeBack enemy */
function comeBackLeftEnemy(enemyThisPart){

    if (ChooseLevel == "stage1") {
        enemyThisPart.className = "comeBackLeft";
    }
    else if(ChooseLevel == "stage2") {
        enemyThisPart.className = "comeBackLeft2";
    }
}
function comeBackRightEnemy(enemyThisPart){

    if (ChooseLevel == "stage1") {
        enemyThisPart.className = "comeBackRight";
    }
    else if(ChooseLevel == "stage2") {
        enemyThisPart.className = "comeBackRight2";
    }
}

/* damage enemy */
function damageLeft(enemyThisPart){

    if (ChooseLevel == "stage1") {
        enemyThisPart.className = "enemyHurtLeft";
    }
    else if(ChooseLevel == "stage2") {
        enemyThisPart.className = "enemy2HurtLeft";
    }
}
function damageRight(enemyThisPart){

    if (ChooseLevel == "stage1") {
        enemyThisPart.className = "enemyHurtRight";
    }
    else if(ChooseLevel == "stage2") {
        enemyThisPart.className = "enemy2HurtRight";
    }
}