import data from './../json/main.json' assert { type : "json"}; 

AOS.init();


//*logo nav
// let logoMolengeek = document.querySelector('#logoMolengeek');


// let logoData = data.molengeekLogo


// logoMolengeek.src = logoData;


function changeLogo(logo, logoData) {
    let logoElement = document.querySelector(`#${logo}`);
   
    logoElement.src = logoData;
   
}

changeLogo('logoMolengeek', data.molengeekLogo);




//*menubg
let menuHamburger = document.querySelector(".menuBurger")
let navLinks = document.querySelector(".liens")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})





//*carousel
let carousel = document.getElementById('carousel');
let currdeg = 0;

Object.values(data.partenaires).forEach((partenaire, index) => {
  let item = document.createElement('div');
  item.classList.add('item');
  item.style.backgroundImage = `url(${partenaire.logo})`;
  item.style.transform = `rotateY(${index * 60}deg) translateZ(270px)`;
  carousel.appendChild(item);
});

function rotate() {
  currdeg -= 60; 
  carousel.style.transform = `rotateY(${currdeg}deg)`;
}

setInterval(() => {
  rotate(); 
}, 2000); 




//*séance infos




// let card = document.querySelector(".itemCards")

let cardTitle = Array.from(document.querySelectorAll(".itemCardTitle"))

// let cardDateTitle = document.querySelector(".itemdateTitle")

let cardDate = Array.from(document.querySelectorAll(".itemDate"))

let seances = data.formations.seancesInfos

console.log(seances);


for (let i = 0; i < seances.length; i++) {
  
  cardTitle.forEach((element, i) => {
    cardTitle[i].innerText = seances[i].nom

  })

  cardDate.forEach((element, i) => {
    
    cardDate[i].innerText = seances[i].date

  })

  
}


//*contactInfo

let contactDiv = document.querySelector('.card-body');
let molengeekInfo = data.molengeekInfo;

contactDiv.innerHTML = `
    <p>Name: ${molengeekInfo.name}</p> 
    <p>Address: ${molengeekInfo.address}</p>
    <p>Phone: ${molengeekInfo.phone}</p>
    <p>Email: ${molengeekInfo.email}</p>
    <p>TVA: ${molengeekInfo.tva}</p>
`;




//*logo footer

let logoFooter = document.querySelector(".logoMolengeek")

logoFooter.src = data.molengeekLogo;


// *social media

let socialmedia = Object.values(data.reseauxSociaux)


let socialContainer = Array.from(document.querySelectorAll(".socialContainer"))


for (let i = 0; i < socialContainer.length; i++) {
    socialContainer[i].href = socialmedia[i]  
}
