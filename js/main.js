// this is a self-invoking anonymous function
// also called an ITFE
// also called Module

(() => {

  console.log("some message - from javascript");

  // find the button element on the page by its ID with javascript
  let theheading = document.querySelector('h1'),
  // svgImage = document.querySelector('#svgGraphic'),
  allSVGs = document.querySelectorAll(".svg");

  // this function changes heading text
  function changeText()
  {
    theheading.textContent = "Hello there from the console";
  }

  function logSvg()
  {
    console.log(this.id);
  }

  // theButton.addEventListener("click", changeText);
  // svgImage.addEventListener("click", logSvg);
  // svgImage2.addEventListener("click", logSvg);

  // loop through the collection and apply out event handling to each element
  allSVGs.forEach(item => item.addEventListener('click',logSvg))
  //document.querySelector('h1').textContent = "Hello there from the console";


})();
