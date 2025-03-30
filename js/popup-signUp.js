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
};