let x :string = document.getElementById("heading");
setTimeout(function () {
    x.style.color ="red";
    x.style.fontWeight="30px"
},4000);
let y  = document.getElementById("heading2");
setTimeout(function () {
    y.style.color ="red";
    y.innerHTML="muneeb"
},4000)

let div = document.getElementById("ele1");
div?.addEventListener ("click", function(){
    div.style.backgroundColor="green";

})

;