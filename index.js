var MenuItem01 = document.querySelector(".navbar-left .gt");
var MenuItem02 = document.querySelector(".navbar-left .lh");
var MenuItem03 = document.querySelector(".navbar-left .mt");
var MenuItem04 = document.querySelector(".navbar-left .hd");
var turn = false;
console.log(listMenuHeader)
function turnOnOff(){
    if(!turn){
        MenuItem01.style.display = 'block'; 
        MenuItem02.style.display = 'block'; 
        MenuItem03.style.display = 'block'; 
        MenuItem04.style.display = 'block'; 
        turn = true;
    }else {
        MenuItem01.style.display = 'none'; 
        MenuItem02.style.display = 'none'; 
        MenuItem03.style.display = 'none'; 
        MenuItem04.style.display = 'none'; 
        turn = false;
    }
}
