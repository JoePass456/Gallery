const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Looping through images */

for (let i = 1; i <= 5; i++) {
    let imgSrc = "images/pic" + i + ".jpg";
    // console.log(imgSrc);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', imgSrc);

    newImage.addEventListener("click", function (event) {
        displayedImage.setAttribute('src', imgSrc);
    });
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", function (event) {
    if (btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})
