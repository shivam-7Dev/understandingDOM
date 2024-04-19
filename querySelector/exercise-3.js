/*
    1. Go to wallhaven.cc/latest in your Browser
       and open up the dev tools
       
    2. How would you get an Array of ALL of the
       "href" attribute values for all of the top
       navigation links (including the 'more'
       submenu)

    HINT*  NodeList is not an Array, but you can
           turn it in to one
    HINT2* You can querySelector on ANY ELEMENT
           This means you can keep narrowing your
           queries:
           document.
            querySelector('...').
            querySelector('...').
            querySelectorAll('...')
*/
//link tag + achor tag
//const links = document.querySelectorAll("link, a");

// fetch the first nav tag and grab all the achor tags inside it recurrsively

const links = document.querySelector("nav").querySelectorAll("a");
const linksArray = [...links];
const hrefArray = linksArray.map((link) => link.href);
console.log(hrefArray);
