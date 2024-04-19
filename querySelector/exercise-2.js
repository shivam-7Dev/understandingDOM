/*
    1. Go to wallhaven.cc/latest in your Browser
       and open up the dev tools

    2. How would you get an Array of ALL of the
       "src" attribute values for the wallpaper
       images on the page?

    HINT* NodeList is not an Array, but you can
          turn it in to one
*/

// searching for all images on page inside figure element
// const src = document.querySelectorAll("img");
// const src = document.querySelectorAll("figure img");
const src = document.querySelectorAll("img");
const arrayOfImages = [...src];
const srcArray = arrayOfImages.map((img) => img.src);
console.log(srcArray);
