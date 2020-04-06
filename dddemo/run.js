console.log('nodejs');
const testVar=100;
function test(){
  console.log(testVar);
}
const fs=require('fs');
const re=fs.readFile('./run.js',(err,data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data.toString());
  }
})
console.log(re);
require('./chalk.js');
console.log(cc);

