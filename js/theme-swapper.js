let switchMode = document.getElementById("switchMode");
const light = "/css/light-theme.css";
const dark = "/css/dark-theme.css";

if(localStorage.getItem("theme-dark") !== null) {
    theme.href = dark;
}

switchMode.onclick = function () {
    let theme = document.getElementById("theme");
    

    if (theme.getAttribute("href") == light) {
        theme.href = dark;
        localStorage.setItem("theme-dark", "dark")
    } else {
        theme.href = light;
        localStorage.removeItem("theme-dark", "dark")
    }
}