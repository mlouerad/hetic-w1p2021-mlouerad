document.querySelector('.overlay__h1').addEventListener('click',function(){
  TweenMax.to('.overlay__h1',0.5,{opacity:0,y:'-60',ease:Power1.easeOut});
  TweenMax.to('.overlay',2,{delay:1.5,y:'-100%',ease:Power1.easeOut});
})


document.querySelector(".header__container").addEventListener('click',function(){
  TweenMax.to('.header__menuOpen',0.5,{scaleX:1,ease: Power1.easeOut});
  TweenMax.to('.header__menuOpen__ul__li',1.2,{delay:0.5,opacity:1,ease: Power1.easeOut});
  TweenMax.to(".header__menuOpen__cross",1.2,{delay:0.5,x:'-10px',ease: Power1.easeOut});

})

document.querySelector(".header__menuOpen__cross").addEventListener('click',function(){
  TweenMax.to('.header__menuOpen__ul__li',0.1,{opacity:0,ease: Power1.easeOut});
  TweenMax.to(".header__menuOpen__cross",0.1,{delay:0.1,x:'100px',ease: Power1.easeOut});
  TweenMax.to('.header__menuOpen',0.5,{delay:0.1,scaleX:0,ease: Power1.easeOut});
  
  

})

 


