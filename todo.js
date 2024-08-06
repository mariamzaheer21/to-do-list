let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");


btn.addEventListener("click", function(){
 let list=document.createElement("li");
 list.innerText=inp.value;

 let delbtn=document.createElement("button");
 delbtn.classList.add("delete")
 delbtn.innerText="delete";
list.appendChild(delbtn);
ul.appendChild(list);
inp.value=" "

});

ul.addEventListener("click", function(event){
let listItem=event.target.parentElement;
listItem.remove();
})


// only works for 1st element.
// let delbtns= document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par= delbtn.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }