const axios = require('axios');

function sleep(ms){
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}
let lightBlaster = (bright=254, hue=10000, board=0, on=true) => axios.put(`http://192.168.1.214/apiL8Fhgu5UgVcNrS40QLzD7L3AmD7B2sLlpyuQ0CSA/lights/${board}/state`, {"on":true, "sat":254, "bri":bright,"transitiontime":20, "hue":hue,"on":on}).catch(err=>console.log(err))

async function turnDownForWhat(board) {
  for(let i = 0; i<10; i++) {
    lightBlaster(i%2?0:254,Math.round(Math.random()*65535),board)
    await sleep(2000);
  }
  lightBlaster(128,1000,board,false)
}
//lightOneReq(1,10000)
turnDownForWhat(1)
turnDownForWhat(2)
