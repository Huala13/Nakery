window.onload = function() {
    //漢堡選單操作
    let burger = document.getElementById("burgerBox");
    let mobileNav = document.getElementById("navBox");
    let closeNav = document.getElementById("menuClose");
    let blackBack = document.getElementById("blackBack");
    
    burger.addEventListener("click", function() {
        mobileNav.style.left = "0px";
        blackBack.style.display = "block";
    });
    closeNav.addEventListener("click", function() {
        mobileNav.style.left = "-360px";
        blackBack.style.display = "none";
    });
    
    //各種popup
    let popupClose = document.querySelector(".popupClose");
    let popupBg = document.querySelector(".popupBg");

    popupClose.addEventListener("click", function() {
        popupBg.style.display = "none";
    });
};
window.onload = function() {
    //漢堡選單操作
    let burger = document.getElementById("burgerBox");
    let mobileNav = document.getElementById("navBox");
    let closeNav = document.getElementById("menuClose");
    let blackBack = document.getElementById("blackBack");
    
    burger.addEventListener("click", function() {
        mobileNav.style.left = "0px";
        blackBack.style.display = "block";
    });
    closeNav.addEventListener("click", function() {
        mobileNav.style.left = "-360px";
        blackBack.style.display = "none";
    });
    
    //各種popup
    let newsList = document.querySelector(".newsList");

    newsList.addEventListener("click", function() {
        popupBg.style.display = "block";
    });
};
// window.onload = function() {
//     //上傳檔案
//     let fileInput = document.getElementById("file-input");
//     let uploadedFiles = document.getElementById("uploaded-files");

//     fileInput.addEventListener("change", function() {
//         // 取得上傳的檔案
//         const file = fileInput.files[0];
        
//         // 新增一個檔案名稱的元素
//         const fileName = document.createElement("div");
//         fileName.innerHTML = file.name;
//         uploadedFiles.appendChild(fileName);
//     });
// };