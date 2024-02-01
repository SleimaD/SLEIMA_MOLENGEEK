import data from './../json/main.json' assert { type : "json"}; 

AOS.init();



//*logoHeader
let logoMolengeek = document.querySelector('#logoMolengeek');


let logoData = data.molengeekLogo2


logoMolengeek.src = logoData;



//*logoFooter

let logoFooter = document.querySelector(".logoMolengeek")

logoFooter.src = data.molengeekLogo2;



// *social media

let socialmedia = Object.values(data.reseauxSociaux)


let socialContainer = Array.from(document.querySelectorAll(".socialContainer"))


for (let i = 0; i < socialContainer.length; i++) {
    socialContainer[i].href = socialmedia[i]  
}

