const fs=require('fs');
fs.readFile('./event.js','utf8',(err,data)=>{
  if(err) throw err;
  console.log(data);
})
const data=fs.readFileSync('./parse.js','utf8');
console.log(data);

fs.writeFile('./text.txt','this is a string',{
  encoding:'utf8'  //如果data是一个Buffer对象，则忽略编码
},(err)=>{
  if(err) throw err;
  console.log('success');
})
