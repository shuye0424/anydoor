const eventEmit=require('events');
class Emmitter extends eventEmit{}
const ev=new Emmitter();
ev.once('newListener',(event,listener)=>{
  console.log(listener.toString());
})
ev.on('w',()=>{
  console.log('111');
})
ev.emit('w');
