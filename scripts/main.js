AOS.init({
    duration : 1000,
  })


  let main_sac= document.querySelector('.main_bag')
  let sac5 = document.querySelector('.sac5')
  let sac6 = document.querySelector('.sac6')
  let sac7 = document.querySelector('.sac7')
  let sac8 = document.querySelector('.sac8')

  var x = document.querySelector(".sac9");

  sac5.addEventListener('mouseover',()=>{
      changeImage_1()
  })
  sac5.addEventListener('mouseleave',()=>{
    changeImage_1()
})

sac6.addEventListener('mouseover',()=>{
 
    changeImage_2()

})

sac6.addEventListener('mouseleave',()=>{
  main_sac.style.opacity = "1";
  changeImage_2()

})

sac7.addEventListener('mouseover',()=>{
 
    changeImage_3()
    main_sac.style.transitionDuration = "0.2s";
    main_sac.style.opacity = "1";
})

sac7.addEventListener('mouseleave',()=>{
  main_sac.style.opacity = "1";
  changeImage_3()

})

sac8.addEventListener('mouseover',()=>{
 
    changeImage_4()
    main_sac.style.transitionDuration = "0.2s";
    main_sac.style.opacity = "1";
})

sac8.addEventListener('mouseleave',()=>{
  main_sac.style.opacity = "1";
  changeImage_4()

})







function changeImage_1()
{
  var v = x.getAttribute("src");
  if(v == "images/sac9.png"){
     v = "images/sac5_main.png";
  }
  
  else{
    v = "images/sac9.png";

  }
  x.setAttribute("src", v);	
}


function changeImage_2()
{
  var v = x.getAttribute("src");
  if(v == "images/sac9.png"){
     v = "images/sac6_main.png";
  }
  
  else{
    v = "images/sac9.png";

  }
  x.setAttribute("src", v);	
}

function changeImage_3()
{
  var v = x.getAttribute("src");
  if(v == "images/sac9.png"){
     v = "images/sac7_main.png";
  }
  
  else{
    v = "images/sac9.png";

  }
  x.setAttribute("src", v);	
}

function changeImage_4()
{
  var v = x.getAttribute("src");
  if(v == "images/sac9.png"){
     v = "images/sac8_main.png";
  }
  
  else{
    v = "images/sac9.png";

  }
  x.setAttribute("src", v);	
}