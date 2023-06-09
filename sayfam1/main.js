const navbar = document.querySelector(".nav");
const araba = document.querySelector(".kutular");



const menuBtn = document.querySelector("#menu-btn");
const noktasi = document.querySelector("#araba-noktasi");



noktasi.addEventListener("click", function fonk1())
   

function fonk1(){
    araba.classList.toggle("active");
    document.addEventListener("click", function fonk2 ();
};



function fonk2(e){
    if(
        !e.composedPath().includes(noktasi) &&
        !e.composedPath().includes(araba)
    ){
        araba.classList.remove("active");
    }
};








menuBtn.addEventListener("click", aktif () );


function aktif(){
    navbar.classList.toggle("active");
    document.addEventListener("click", tan(e) );
};




function tan(e){
    if(!e.composedPath.includes(menuBtn) && 
    !e.composedPath.includes(navbar)
    )
    {
        navbar.classList.remove("active");
    }
};