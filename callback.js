function tencall(callback){
    console.log(10)
    callback();
}
function ninecall(callback){
    console.log(9)
    callback();
}
function eightcall(callback){
    console.log(8)
    callback();
}
function sevencall(callback){
    console.log(7)
    callback();
}
function sixcall(callback){
    console.log(6)
    callback();
}
function fivecall(callback){
    console.log(5)
    callback();
}
function fourcall(callback){
    console.log(4)
    callback();
}
function threecall(callback){
    console.log(3)
    callback();
}
function secoundcall(callback){
    console.log(2)
    callback();
}
function firstcall(callback){
    console.log(1)
}
console.log("HappyIndependenceDay");

tencall(()=>{
    ninecall(()=>{
        eightcall(()=>{
            sevencall(()=>{
                sixcall(()=>{
                    fivecall(()=>{
                        fourcall(()=>{
                            threecall(()=>{
                                secoundcall(()=>{
                                    firstcall(()=>{

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

//Result callbackhell
HappyIndependenceDay
10
9
8
7
6
5
4
3
2
1