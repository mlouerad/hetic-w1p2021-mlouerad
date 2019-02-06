

TweenMax.to('.main-home__container__picture',0.0001,{opacity:1,ease: Power4.easeOut,delay:1});
TweenMax.to('.main-home__name',1.5,{opacity:1,y:"20",ease: Power4.easeOut,delay:1.2});
TweenMax.to('.main-home__job',1,{opacity:1,y:"20",ease: Power4.easeOut,delay:1.5});
TweenMax.to('.header-home',1,{opacity:1,ease: Power4.easeOut,delay:1.7});

document.querySelector('.header-home__projects').addEventListener('click',function(){
  TweenMax.to('.menu',1,{scaleX:1,ease: Power4.easeOut})
  TweenMax.to('.menu__project1',1,{opacity:1,ease: Power4.easeOut,delay:1})
  TweenMax.to('.menu__project2',1,{opacity:1,ease: Power4.easeOut,delay:1.2})
  TweenMax.to('.menu__header__logo',1,{opacity:1,ease: Power4.easeOut,delay:1.3})
  TweenMax.to('.menu__header__about',1,{opacity:1,y:"40",ease: Power4.easeOut,delay:1.4})
  TweenMax.to('.menu__header__projects',1,{opacity:1,y:"40",ease: Power4.easeOut,delay:1.5})
  
});

document.querySelector('.menu__header__projects').addEventListener('click',function(){
 
  TweenMax.to('.menu__project1',0.1,{opacity:0,ease: Power4.easeOut})
  TweenMax.to('.menu__project2',0.1,{opacity:0,ease: Power4.easeOut})
  TweenMax.to('.menu__header__logo',0.1,{opacity:0,ease: Power4.easeOut})
  TweenMax.to('.menu__header__about',0.1,{y:"-40px",opacity:0,ease: Power4.easeOut})
  TweenMax.to('.menu__header__projects',0.1,{y:"-40px",opacity:0,ease: Power4.easeOut})
  TweenMax.to('.menu',0.5,{scaleX:0,ease: Power4.easeOut})
});


 



