import data from './../json/main.json' assert { type : "json"}; 

AOS.init();



//*logoHeader
let logoMolengeek = document.querySelector('#logoMolengeek');


let logoData = data.molengeekLogo2


logoMolengeek.src = logoData;



//*menuBG

let menuHamburger = document.querySelector(".menuBurger")
let navLinks = document.querySelector(".liens")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})




//*logoFooter

let logoFooter = document.querySelector(".logoMolengeek")

logoFooter.src = data.molengeekLogo2;



//* filtre

let sectionFormation = document.querySelector(".Formations")

let btnFCourtes = document.querySelector(".formaCourtes")

let btnFLongues = document.querySelector(".formaLongues")

let ul = document.querySelector(".Formations ul ")

let FormationsCourtes = Array.from(data.formations.formationsCourtes)

let FormationsLongues = Object.keys(data.formations.formationsLongues)

console.log(FormationsLongues);

let li 

function ajoutFC() {

    ul.innerHTML = ""
    for (let i = 0; i < FormationsCourtes.length; i++) {
        li = document.createElement("li")
        li.innerText = FormationsCourtes[i].nom
        ul.appendChild(li)
    }

}

function ajoutFL() {

    ul.innerHTML = ""
    for (let i = 0; i < FormationsLongues.length; i++) {
        li = document.createElement("li")
        li.innerText = FormationsLongues[i]
        ul.appendChild(li)
        console.log(FormationsLongues[i]);
    }

}

btnFCourtes.addEventListener('click', ajoutFC)

btnFLongues.addEventListener('click', ajoutFL)




//*video se former


let myvideo = document.querySelector(".youtube-video")

myvideo.src = data.videosTemoignage.videoI

console.log(myvideo);




let video2 = document.querySelector(".youtube-video2")

video2.src = data.videosTemoignage.videoII

console.log(video2);


let video3 = document.querySelector(".youtube-video3")

video3.src = data.videosTemoignage.videoIII

console.log(video3);


// *social media

let socialmedia = Object.values(data.reseauxSociaux)


let socialContainer = Array.from(document.querySelectorAll(".socialContainer"))


for (let i = 0; i < socialContainer.length; i++) {
    socialContainer[i].href = socialmedia[i]  
}


