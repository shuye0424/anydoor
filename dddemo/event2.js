const EventEmitter=require('events');
class CustomEvent extends EventEmitter{}
const ce=new CustomEvent();
ce.on('newListener', () => {
  console.log('我被触发了');
});
ce.on('test',(d1)=>{
  console.log(d1);
  console.log(this);
})
ce.emit('test','this is a test');
ce.on('test2',function(d1){
  console.log(d1);
  console.log(this);
})
ce.emit('test2','test2');


