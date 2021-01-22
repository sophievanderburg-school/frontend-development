"use strict";
// js voor dames sneakers

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
var sectionUitklap = document.querySelector("header nav section:last-of-type");
var hoverKnop = document.querySelector("header nav ul:nth-of-type(2) li:nth-of-type(2) button");

function laatSectionZien() {
    sectionUitklap.classList.add("laatZien");
    hoverKnop.classList.add("knopje");
    console.log("hoi");
}

function verbergSection() {
    sectionUitklap.classList.remove("laatZien");
    hoverKnop.classList.remove("knopje");
    console.log("doei");
}

hoverKnop.addEventListener("mouseenter", laatSectionZien);
hoverKnop.addEventListener("mouseleave", verbergSection);

sectionUitklap.addEventListener("mouseenter", laatSectionZien);
sectionUitklap.addEventListener("mouseleave", verbergSection);



/*---------------------------- tekst section 1-----------------------------*/
var inklapKnop = document.querySelector("main section:nth-of-type(1) + button");
var productDetails = document.querySelector("main section:nth-of-type(1)");

function inklappen() {
    
    if (inklapKnop.innerHTML === "bekijk meer") {
     console.log("uitklappen"); 
    productDetails.classList.add("uitgeklapt");
    inklapKnop.innerHTML = "minder tonen";
    } else {
        console.log("inklappen");
        productDetails.classList.remove("uitgeklapt");
    inklapKnop.innerHTML = "bekijk meer";
    }
}

inklapKnop.addEventListener('click', inklappen);


/*---------------------------- filter mobiel tevpprschijn-----------------------------*/

var artikelKnop = document.querySelector("section:nth-of-type(3) > button:first-of-type");
var kruisKnop = document.querySelector("section:nth-of-type(3) > button:last-of-type");

var filterKnop = document.querySelector("section:nth-of-type(2) button");

var section = document.querySelector("section:nth-of-type(3)");


function toonSectie() {
	section.classList.toggle("toonSectie");
}

artikelKnop.addEventListener('click', toonSectie);
kruisKnop.addEventListener('click', toonSectie);
filterKnop.addEventListener('click', toonSectie);