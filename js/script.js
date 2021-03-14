const next =document.querySelector('.next');
const stars=document.querySelectorAll('.star');
const output=document.querySelector('.output');

next.addEventListener('click',function(){
    window.location.reload();
})
for(x=0;stars.length;x++){
    stars[x].starValue=(x+1);
    // stars[x].addEventListener('click',function(){
    //     console.log("clicked")
    // })

    ["click","mouseover","mouseout"].forEach(function(e){
        stars[x].addEventListener(e,showRating);
    })
}
function showRating(e){
    let type=e.type;
    let starValue=this.starValue;
    stars.forEach(function(elem,ind){
        if(type==='click'){
            if(ind<starValue){
                elem.classList.add("orange")
            }
            else{
                elem.classList.remove("orange")
            }
        }
        if(type==='mouseover'){
            if(ind<starValue){
                elem.classList.add("yellow")
            }
            else{
                elem.classList.remove("yellow")
            }
        }
        if(type==='mouseout'){
            
                elem.classList.remove("yellow")
           
        }
    })


    if(e.type=="click"){
        srating(this.starValue);
    }
    
}
function srating(e){
    if(e==1){
        output.innerHTML=`you have rated ${e} star`
    }
    else{

        output.innerHTML=`you have rated ${e} stars`
    }
}