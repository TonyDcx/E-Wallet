'use strict';

// TODO : Sign In Page

// * Social Media Alert 

let closeBtn = document.getElementById('close-social');

let collapseSocial = document.getElementById('alert-social');

closeBtn.addEventListener('click', function(collapseSocial){
 
    document.getElementById('alert-social').classList.add('off');

});

// * Info Container Animation Added 

let showMore = document.getElementById('active');

document.getElementsByClassName('show-active')[0].style.display = "none";

showMore.addEventListener('click' , function(show){
    document.getElementsByClassName('show-active')[0].style.display = "block";
});
