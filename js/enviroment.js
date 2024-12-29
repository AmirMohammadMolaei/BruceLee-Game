// enter to game
setTimeout(() => {
    logo1.style.display = "block";
    loadIcon.style.display = "block";
}, 2000);
setTimeout(() => {
    logo1.style.transform = "scale(1)";
}, 3000);
setTimeout(() => {
    logo1.style.transform = "scale(0.7)";
    setTimeout(() => { logo1.style.display = "none"; }, 500)
}, 7000);
setTimeout(() => {
    logo2.style.display = "block";
}, 8000);
setTimeout(() => {
    logo2.style.transform = "scale(1)";
    logo2.style.display = "block"
}, 9000);
setTimeout(() => {
    logo2.style.transform = "scale(0.7)";
    setTimeout(() => { logo2.style.display = "none"; }, 500)
}, 13000);
setTimeout(() => {
    logo3.style.transform = "scale(1)";
    logo3.style.display = "block";
}, 16000);
setTimeout(() => {
    logo3.style.display = "none";
}, 19000);
setTimeout(() => {
    withload_page.style.transform = "scale(1)";
    withload_page.style.display = "block";
    setInterval(() => {
        ++loadnum
        numberOfloading.innerHTML = loadnum;
        if (loadnum == 100) {
            clickOnPage = false;
            // auEnviroment.play();
            withload_page.style.display = "none";
            loadIcon.style.display = "none";
            enviroment.style.display = "block";
            tanzimatBtn.style.display = "block"; // show settingBtn
            itemsBtn.style.display = "block"; // show menu buy items Btn
            itemsBtn_num2.style.display = "block"; // show menu buy items Btn 2
            recordBtn.style.display = "block";
        }
    }, 100);
}, 22000);