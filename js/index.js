'use strict';

// TODO : Sign In Page

// * Social Media Alert 

let closeButton = document.getElementById('close-social');

closeButton.addEventListener('click' , function(addOff) {
    let socialMedia = document.getElementById('alert-social');

    socialMedia.classList.add('off');
});

// * Info Container Animation Added 

let showMore = document.getElementById('active');

document.getElementsByClassName('show-active')[0].style.display = "none";

showMore.addEventListener('click' , function(show){
    document.getElementsByClassName('show-active')[0].style.display = "block";
});
   

// * 

