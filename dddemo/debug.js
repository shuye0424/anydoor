function test1(){
  const a=parseInt(Math.random()*10);
  const b=parseInt(Math.random()*10);
  const c=test2(a,b)
}
function test2(a,b){
  if(a>b){
    a+=1;
  }else{
    b-=1;
  }
  return a+b;
}
test1();
