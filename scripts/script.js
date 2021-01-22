"use strict";
// JavaScript Document
/*------------------- header menu laten zien ---------------------*/

var kruisKnopje = document.querySelector("header section:first-of-type > button");

var menuKnop = document.querySelector("header nav ul:first-of-type div:first-of-type li:first-of-type button");

var menuSection = document.querySelector("header section:first-of-type");


function toonSection() {
	menuSection.classList.toggle("toonSection");
}

kruisKnopje.addEventListener('click', toonSection);
menuKnop.addEventListener('click', toonSection);



/*------------------- header section laten zien ---------------------*/
var section = document.querySelector("header nav section:last-of-type");
var hoverKnop = document.querySelector("header nav ul:nth-of-type(2) li:nth-of-type(2) button");

function laatSectionZien () {
    section.classList.add("laatZien");
    hoverKnop.classList.add("knopje");
}

function verbergSection() {
    section.classList.remove("laatZien");
    hoverKnop.classList.remove("knopje");
}

hoverKnop.addEventListener("mouseenter", laatSectionZien);
hoverKnop.addEventListener("mouseleave", verbergSection);

section.addEventListener("mouseenter", laatSectionZien);
section.addEventListener("mouseleave", verbergSection);



/*------------------- klikken op foto's (telefoonversie) ---------------------*/
var showImg = document.querySelector("section:nth-of-type(1) > img");

var klikImgNrEen = document.querySelector("section:nth-of-type(1) ul:last-of-type li:first-of-type button");
var klikImgNrTwee = document.querySelector("section:nth-of-type(1) ul:last-of-type li:nth-of-type(2) button");
var klikImgNrDrie = document.querySelector("section:nth-of-type(1) ul:last-of-type li:nth-of-type(3) button");
var klikImgNrVier = document.querySelector("section:nth-of-type(1) ul:last-of-type li:last-of-type button");

function veranderFotoInNrEen () {
   showImg.src = 'images/schoen0.jpg' ;
    
    klikImgNrEen.classList.remove("active");
    klikImgNrTwee.classList.remove("active");
    klikImgNrDrie.classList.remove("active");
    klikImgNrVier.classList.remove("active");
    
    klikImgNrEen.classList.add("active");
}

function veranderFotoInNrTwee () {
    showImg.src = 'images/schoen1.jpg' ;
    
    klikImgNrEen.classList.remove("active");
    klikImgNrTwee.classList.remove("active");
    klikImgNrDrie.classList.remove("active");
    klikImgNrVier.classList.remove("active");
    
    klikImgNrTwee.classList.add("active");
}

function veranderFotoInNrDrie () {
    showImg.src = 'images/schoen2.jpg' ;
    
    klikImgNrEen.classList.remove("active");
    klikImgNrTwee.classList.remove("active");
    klikImgNrDrie.classList.remove("active");
    klikImgNrVier.classList.remove("active");
    
    klikImgNrDrie.classList.add("active")
}

function veranderFotoInNrVier () {
    showImg.src = 'images/schoen3.jpg' ;
    
    klikImgNrEen.classList.remove("active");
    klikImgNrTwee.classList.remove("active");
    klikImgNrDrie.classList.remove("active");
    klikImgNrVier.classList.remove("active");
    
    klikImgNrVier.classList.add("active")
    
}

klikImgNrEen.addEventListener('click', veranderFotoInNrEen);
klikImgNrTwee.addEventListener('click', veranderFotoInNrTwee);
klikImgNrDrie.addEventListener('click', veranderFotoInNrDrie);
klikImgNrVier.addEventListener('click', veranderFotoInNrVier);


/*------------------------- klikken op foto's (webversie) --------------------------*/

var showImg = document.querySelector("main section:nth-of-type(1) > img");

var klikImgEen = document.querySelector("main section:nth-of-type(1) ul:first-of-type li:first-of-type")
var klikImgTwee = document.querySelector("main section:nth-of-type(1) ul:first-of-type  li:nth-of-type(2)")
var klikImgDrie = document.querySelector("main section:nth-of-type(1) ul:first-of-type  li:nth-of-type(3)")
var klikImgVier = document.querySelector("main section:nth-of-type(1) ul:first-of-type  li:last-of-type")

function veranderFotoInEen () {
   showImg.src = 'images/schoen0.jpg' ; 
}

function veranderFotoInTwee () {
    showImg.src = 'images/schoen1.jpg' ;
   
}

function veranderFotoInDrie () {
    showImg.src = 'images/schoen2.jpg' ;
}

function veranderFotoInVier () {
    showImg.src = 'images/schoen3.jpg' ;
}

klikImgEen.addEventListener('click', veranderFotoInEen);
klikImgTwee.addEventListener('click', veranderFotoInTwee);
klikImgDrie.addEventListener('click', veranderFotoInDrie);
klikImgVier.addEventListener('click', veranderFotoInVier);


/*--------------------------------- favorieten-----------------------------------*/

var favorietKnop = document.querySelector("section:nth-of-type(2) div:last-of-type button:last-of-type");
var favorietImg = document.querySelector("section:nth-of-type(2) div:last-of-type button:last-of-type img");

function favorietToevoegen() {
  favorietImg.classList.add("kloppend");
    
    setTimeout(
    function () { 
      favorietImg.classList.remove("kloppend");
    }, 2000
  );
}

favorietKnop.addEventListener('click', favorietToevoegen);

/*---------------------------- in winkelmap plaatsen-----------------------------*/
var winkelmandKnop = document.querySelector(" section:nth-of-type(2) div:last-of-type button:first-of-type");


function winkemandToevoegen() {
  winkelmandKnop.classList.add("inwinkelmand");
    
    setTimeout(
    function () { 
      winkelmandKnop.classList.remove("inwinkelmand");
    }, 1200
  );
}

winkelmandKnop.addEventListener('click', winkemandToevoegen);


/*---------------------------- productdetails inklappen-----------------------------*/
var inklapKnop = document.querySelector("main section:nth-of-type(3) + button");
var productDetails = document.querySelector("main section:nth-of-type(3)");

function inklappen() {
    
    if (inklapKnop.innerHTML === "toon meer") {
     console.log("uitklappen");
     productDetails.classList.add("uitgeklapt");    
     inklapKnop.innerHTML = "toon minder";
    } else {
        console.log("inklappen");
        productDetails.classList.remove("uitgeklapt");
        inklapKnop.innerHTML = "toon meer";
    }
}

inklapKnop.addEventListener('click', inklappen);


