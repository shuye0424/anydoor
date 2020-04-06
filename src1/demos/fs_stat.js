const fs=require('fs'); //看文件存在与否用stat
fs.stat('fs.js',(err,stats)=>{
  if(err){
    console.log('文件不存在');
    return;
  }
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats);
})

fs.readdir('../demos',(err,data)=>{
  if(err) throw err;
  console.log(data);
})
