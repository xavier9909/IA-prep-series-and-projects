let count = 0


const inc = ()=>{
    console.log(++count)
}
let id 
let debounce = (fn,time)=>{
    return function(){
       if(id){
           clearInterval(id)
       } 
       id =  setTimeout(()=>{
            fn()
        },time)    }
}



let z = debounce(inc,1000)
