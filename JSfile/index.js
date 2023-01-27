var MenuItem01 = document.querySelector(".navbar-left .gt");
var MenuItem02 = document.querySelector(".navbar-left .lh");
var MenuItem03 = document.querySelector(".navbar-left .mt");
var MenuItem04 = document.querySelector(".navbar-left .hd");
var MenuItem05 = document.querySelector(".navbar-left .dn");
var MenuItem06 = document.querySelector(".navbar-left .dn");
var turn = false;
function turnOnOff(){
    if(!turn){
        MenuItem01.style.display = 'block'; 
        MenuItem02.style.display = 'block'; 
        MenuItem03.style.display = 'block'; 
        MenuItem04.style.display = 'block'; 
        MenuItem05.style.display = 'block'; 
        MenuItem06.style.display = 'block'; 
        turn = true;
    }else {
        MenuItem01.style.display = 'none'; 
        MenuItem02.style.display = 'none'; 
        MenuItem03.style.display = 'none'; 
        MenuItem04.style.display = 'none'; 
        MenuItem05.style.display = 'none'; 
        MenuItem06.style.display = 'none'; 
        turn = false;
    }
}

window.addEventListener("resize", function(event){
    var screenWidth =screen.width;
    if( screenWidth>= 985) {
        MenuItem01.style.display = 'block'; 
        MenuItem02.style.display = 'block'; 
        MenuItem03.style.display = 'block'; 
        MenuItem04.style.display = 'block'; 
        turn = true;
    }else if(screenWidth < 985) {
        MenuItem01.style.display = 'none'; 
        MenuItem02.style.display = 'none'; 
        MenuItem03.style.display = 'none'; 
        MenuItem04.style.display = 'none'; 
        MenuItem05.style.display = 'none'; 
        MenuItem06.style.display = 'none'; 
        turn = false;
    }
},600)










