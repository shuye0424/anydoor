const eventEmitter=require('events');
class emit extends eventEmitter{

}
const ce=new emit();
ce.on('test',function(){
  console.log('just a test!');
});
setTimeout(()=>{
  ce.emit('test');
},3000);

/*const ce1=new emit();
ce1.on('error',(err,arg)=>{
  console.log(err);
  console.log(arg);
})
ce1.emit('error',new Error('this is an error!'),'ok?')*/
const ce3=new emit();
function fn1(){
  console.log('fn1');
}
function fn2(){
  console.log('fn2');
}
ce3.on('test3',fn1);
ce3.on('test3',fn2);
setInterval(()=>{
  ce3.emit('test3');
},500);
setTimeout(()=>{
  //ce3.removeListener('test3',fn1);
  ce3.removeAllListeners('test3');
},500);
