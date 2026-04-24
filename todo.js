let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");

btn.addEventListener("click", function(){
 let list=document.createElement("li");
 if(inp.value !== ""){
 list.innerText=inp.value;
 } else{
    alert("Please enter a task!");
    return;
 }

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
