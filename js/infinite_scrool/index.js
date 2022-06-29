let container=document.getElementById("container");
let val=1;
container.addEventListener("scroll",infiniteScroll);

function infiniteScroll(){

   if(container.scrollTop+container.clientHeight+5>=container.scrollHeight ){
        append();
   }
}

function append(){
    let i=0;
    while(i<25){
        let h4=document.createElement('h4');
        h4.innerText="infiniteScroll";
        container.append(h4);
        i++;
    }
}

append();
