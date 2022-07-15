// debounce 
let count = 0
const getData = ()=>{

console.log(count++);

}
let id ;
let debounce = (fn,d)=>{
  return function (){
if(id){
    clearTimeout(id)
}
   id =  setTimeout(()=>{
        fn()
    },d)
}
}
let magic = debounce(getData,300)






