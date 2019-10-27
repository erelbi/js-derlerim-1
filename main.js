var div = document.getElementsByClassName("xc")[0];
var buton = document.getElementById("btn");
var adim = 0;
document.addEventListener("DOMContentLoaded",function(){
    adim++;
    switch(adim){
        default:
            div.style.backgroundColor ="blue";
            div.innerText = "1.adim";
            break;
        case 2:
            div.style.backgroundColor ="yellow";
            div.innerText = "2.adim";
            break;
        case 3:
            div.style.backgroundColor ="gray";
            div.innerText = "3.adim"
            break;
    }
    adim = adim%3;
})
buton.addEventListener("click", function(){
    adim++;
    switch(adim){
        default:
            div.style.backgroundColor ="blue";
            div.innerText = "1.adim";
            break;
        case 2:
            div.style.backgroundColor ="yellow";
            div.innerText = "2.adim";
            break;
        case 3:
            div.style.backgroundColor ="gray";
            div.innerText = "3.adim"
            break;
    }
    adim = adim%3;
}

)