const mobileNavEle = document.getElementById("mobile-nav")
const mobileMenuList = document.getElementById("mobile-menu-list")
mobileNavEle.addEventListener("click", function() {
    mobileMenuList.classList.toggle("d-none")
})