{
    // banner栏的动态效果
    let imgs=document.querySelectorAll(".img_box li");
    let pagers=document.querySelectorAll(".btn_box li");
    let banners=document.querySelector(".banner");
    let prebtn=document.querySelector(".banner-left");
    let nextbtn=document.querySelector(".banner-right");
    console.log(imgs);
    console.log(pagers);
    console.log(nextbtn);
    console.log(prebtn);
    pagers.forEach(function(ele,index){
        ele.onclick=function(){
            for(var i=0;i<pagers.length;i++){
                pagers[i].classList.remove("active");
                imgs[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    var n=0;
    function Myfunction(dir="R"){
        if(dir === "R"){
            n++;
            if(n === imgs.length){
                n=0;
            }
        }else if(dir === "L"){
            n--;
            if(n === -1){
                n=imgs.length-1;
            }
        }
        for(var i=0;i<imgs.length;i++){
            pagers[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        pagers[n].classList.add("active");
        imgs[n].classList.add("active");
    }
    var st=setInterval(Myfunction,2000);
    banners.onmouseover=function(){
        clearInterval(st);
    };
    banners.onmouseout=function(){
        st=setInterval(Myfunction,2000);
    };
    let flag=true;
    prebtn.onclick=function(){
        if(flag){
            flag=false;
            Myfunction("L");
        }
    };
   nextbtn.onclick=function(){
        if(flag){
            flag=false;
            Myfunction();
        }
   };
    imgs.forEach(function(ele,index){
        ele.addEventListener("transitionend",function(){
            flag=true;
        })
    })
}
{
    //明星单品效果
    var left=document.querySelector(".danping-top-right-zuo");
    var right=document.querySelector(".danping-top-right-you");
    var inner=document.querySelector(".danping-box");
    var starContainer=document.querySelector(".danping-bottom");
    console.log(left);
    console.log(right);
    console.log(inner);
    console.log(starContainer);
    right.onclick=function(){
        right.classList.remove("active");
        left.classList.add("active");
        inner.style.transform="translateX(-1226px)";
    }
    left.onclick=function(){
        left.classList.remove("active");
        right.classList.add("active");
        inner.style.transform="translateX(0)";
    }
    let n=1;
    function starfn(){
        n++;
        if(n%2===0){
            right.onclick();
        }else{
            left.onclick();
        }
    }
    var t=setInterval(starfn,3000);
    starContainer.onmouseover=function(){
        clearInterval(t);
    }
    starContainer.onmouseout=function(){
        t=setInterval(starfn,3000);
    }
}