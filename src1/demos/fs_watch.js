const fs=require('fs');
fs.watch('./',{
  recursive:true
},(eventType,filename)=>{
  console.log(eventType,filename);
  console.log('f');

})
