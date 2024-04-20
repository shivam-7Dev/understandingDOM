/*
    1. Open up craigslist.org/about in your Browser
       and open up the dev tools alongside it

    2. Select the "help" element in the footer (<a> tag)

    3. Select the "about craigslist" bolded text in the
       second main column (upper right - <strong> tag)

    4. Select the <a> tag that links to "Jim", the CEO
*/

console.log(
  document.body.firstElementChild.nextElementSibling.lastElementChild
    .firstElementChild.firstElementChild.nextElementSibling.firstElementChild
    .innerText
);

console.log(
  document.body.firstElementChild.nextElementSibling.firstElementChild
    .nextElementSibling.firstElementChild.firstElementChild.firstElementChild
    .firstElementChild.nextElementSibling.firstElementChild.innerText
);

console.log(
  document.body.firstElementChild.nextElementSibling.firstElementChild
    .nextElementSibling.firstElementChild.firstElementChild.firstElementChild
    .nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling
    .firstElementChild.innerHTM
);
