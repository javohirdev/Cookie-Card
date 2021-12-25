const cookieCard = document.querySelector(".cookieCard");
addCookie = cookieCard.querySelector("button");
addCookie.onclick = () => {
    //1 min=60s, 1soat=60min, 24soat=1kun, 30ta 1kun 1 oyga teng
    document.cookie = "Javohir Group=TEST; max-age="+60*60*24*30;
    if(document.cookie) { //agarda cookie saqlansa
        cookieCard.classList.add("hide"); //cardimizni yashirib qo'yadi
    } else { //aks holda alertda xabar chiaradi xatolik haqida
        alert("Cookie saqlanmadi!")
    }
}

const checking = document.cookie.indexOf("Javohir Group=TEST");
checking != -1 ? cookieCard.classList.add("hide") : cookieCard.classList.remove("hide");

//GSAP anim

gsap.fromTo(".cookieImage", 2.7, { rotation: -50, x: -200}, { rotation: 60, x: 0});
gsap.fromTo(".texts", 1.3, { y: 200 }, { y: 0 });
TweenMax.fromTo("#main", 1, { scale: 0, ease:Quad.easeOut }, { scale: 1 } );