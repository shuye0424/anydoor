const EventEmitter=require('events');
class CustomEvent extends EventEmitter{}
const ce=new CustomEvent();
ce.on('test',(d1,d2)=>{
  console.log(d1);
  console.log(d2);
})
ce.emit('test','this is a test',Date.now());

ce.once('test1',()=>{
  console.log('test1 event');
})
setInterval(()=>{
  ce.emit('test1')
},500)

function fn1(){console.log('fn1');}
function fn2(){console.log('fn2');}
ce.on('test2',fn1);
ce.on('test2',fn1);
ce.on('test2',fn2);
setInterval(()=>{
  ce.emit('test2')
},500)
setTimeout(()=>{
  /*ce.removeListener('test2',fn1);
  ce.removeListener('test2',fn2);*/
  ce.removeAllListeners('test2');
},1500)

console.log(ce.listeners('test2'));
console.log(ce.listenerCount('test2'));
console.log(ce.eventNames());

