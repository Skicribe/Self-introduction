function change(){
    var sp=document.getElementById("sp");
    sp.style.color='#fff';
    sp.style.backgroundColor='rgb(116, 226, 26)';
}
function shy(){
    var selfie=document.getElementById("selfie");
    selfie.style.transform='rotate(15deg)';
    setTimeout(function(){
        selfie.style.transform='rotate(0deg)';
    },100);
    setTimeout(function(){
        alert("DO NOT TOUCH ME!!!\rYOU LITTLE HORNY");
    },150);
}
function getScrollTop(){
    var bodyTop = 0;
    var ma=document.getElementById("ma");
    var mb=document.getElementById("mb");
    var mc=document.getElementById("mc");
    if (typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
    }
    if(bodyTop>543&&bodyTop<1397.59){
        ma.style.backgroundColor="#afeeee";
    }
    else{ma.style.backgroundColor="#F5F5DC";}
    if(bodyTop>1397.59&&bodyTop<1734.4){
        mb.style.backgroundColor="#afeeee";
    }
    else{mb.style.backgroundColor="#F5F5DC";}
    if(bodyTop>1734.4&&bodyTop<2212){
        mc.style.backgroundColor="#afeeee";
    }
    else{mc.style.backgroundColor="#F5F5DC";}
    if(bodyTop>=2212){
        md.style.backgroundColor="#afeeee";
    }
    else{md.style.backgroundColor="#F5F5DC";}
    return bodyTop;
}
setInterval("getScrollTop()","100");