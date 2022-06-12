let count = 0
function expensive () {
    console.log("expensvie" + " "+count++);
}
let throttle = (func,limit)=>{
    let flag  = true
    
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



