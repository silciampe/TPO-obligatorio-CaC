//FIERRO
    //BOTON

document.getElementById ("buttom-up").addEventListener("click", scrollUp);

function scrollUp (){
   
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        
    if (currentScroll > 0 ) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0 , currentScroll - (currentScroll/10) )
        }
}

buttomUp = document.getElementById("buttom-up");
    window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
        if (scroll > 500) {
            buttomUp.style.transform = "scale(1)"
        } else if (scroll<500){
            buttomUp.style.transform = "scale(0)"
        }
}

