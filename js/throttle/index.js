let count = 0
function expensive () {
    console.log("expensvie" + " "+count++);
}
let flag  = true
    
let throttle = (func,limit)=>{
    
        return function () {
            if(flag){
                func()
                flag = false
                setTimeout(()=>{
                    flag  = true
                    },limit)
            }
           
        }
    }
    
let bettterExpensive  = throttle(expensive,2000)



