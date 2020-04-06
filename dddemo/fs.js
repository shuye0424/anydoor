const fs=require('fs');
fs.readFile('./fs.js','utf8',(err,data)=>{
  if(err){
    throw err;
  }
  console.log(data);
});


const da=fs.readFileSync('./env.js','utf8');
console.log(da);
