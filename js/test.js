(() => {
  //this is an IIFE  -->  also an implementation of the module pattern

  // always go and get the elements you are working with
  const mySpan = document.querySelector('main span'),
  myobject = document.querySelector('.svg-img');

  //functionality goes here => what we want ro have happen
  function toggleSelection() {
    // we want to update our UI to make it look good
    // we are making a toggleSelection
    // debugger;
    // toggle  a css class to the elements with the javasvript
    this.classList.toggle("selected");
    console.log(this.id);
  }

  // figure out what triggers will drive the functionality
  mySpan.addEventListener('click', toggleSelection);
  myobject.addEventListener('click', toggleSelection);




})()
