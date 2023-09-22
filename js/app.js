// a soupcon of javascript//

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", ()=> {
    // console.log("You clicked me!");

    const html = document.getElementsByTagName("html")[0];

    // console.log(html);

        html.getAttribute("data-bs-theme") == "light" ? html.setAttribute("data-bs-theme", "dark") : html.setAttribute("data-bs-theme", "light");


});






