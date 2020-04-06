const fs=require('fs');
fs.rmdir('./mk/b/a',function(err){
  if(err) throw err;
});
