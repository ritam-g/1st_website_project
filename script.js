const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  // EL MEANS WHICH WILL GIVE THE SCROLLING
  smooth: true,
});
function first_page_anime()
{
  var tl=gsap.timeline();
  tl.from("#nav",{
    y:-30,
    opacity:0,
    duration:1,
    color:"gray",
    
    stagger:1

  })
  gsap.from(".under_ele",{
    y:30,
    opacity:0,
    duration:1,
    borderRadius:"50%",
    stagger:.3

  })
  gsap.from("#herofoot",{
    opacity:0,
    duration:2,
    y:-10
  })
}

function circule_value_chaging() 
{
  // this is the default funcation x client and y client 
  // by default dat 1 & 1
  var xscale=1;
  var yscale=1;
  var xprev=0;
  var yprev=0;
  window.addEventListener("mousemove",function(dets){
    // mouse move data will come in the dets
    

    //HERE WE ARE DOING THE DEFFEREN PREV AND NEW DATA
    var xdiff=dets.clientX-xprev;
    var ydiff=dets.clientY-yprev;
    // here whene the mouse is going to move taht data is is storing scale 
    xscale=gsap.utils.clamp(.8,1.2,xdiff);
     yscale=gsap.utils.clamp(.8,1.2,ydiff);



    xprev=dets.clientX;
    // WHENE THE Y IS GOINF TO MOVE THE DTA IS STORING IN YSCALE
    yprev=dets.clientY;
    // console.log(xdiff,ydiff);
    // we have the gsap funcation whcich is able to do fix size of the circule
    cir_move(xscale,yscale);
    


  });
  
}
function cir_move(xscale,yscale) {
  // HERE DETS IS TAKING ALL DATA MEANS MOUSE MOVEMENT OF IN MOUSE MOVE
  window.addEventListener("mousemove", function (dets) {
    // JUST SELECING THE ID

    // CHECK IN PROPER LY THAT I AM NOT USING COTAING ('',"") I AM USING (``)
    document.querySelector("#mcir").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale}, ${yscale})`;

    
    // .style.transform = 'translate(${dets.clientX}px,${dets.clientY}px)'

    // STYLE TRANSFORM IS THE CSS CONSEPT TRANSLATE WILL TAKE (FIRST X,Y)
  });
}

circule_value_chaging();
cir_move();
first_page_anime();

document.querySelectorAll(".ele")
.forEach(function (ele) {
  ele.addEventListener("mousemove", function (dets) {
    gsap.to(ele.querySelector("img"),{
      opacity:1,
      
    })
  })
});
document.querySelectorAll(".ele")
.forEach(function (ele) {
  ele.addEventListener("mousemove", function (dets) {
    gsap.to(ele.querySelector("img"),{
      x:600,
      rotate:360,
      
      repeat:-1,
      duration:2,
      borderRadius:"50%",
      yoyo:true,
    });
  });
});


