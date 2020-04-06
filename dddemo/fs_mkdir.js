const fs=require('fs');
fs.mkdir('mk/b/a',{recursive:true},(err)=>{
  if(err) throw err;
});
