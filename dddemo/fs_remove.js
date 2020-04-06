const fs=require('fs');
fs.unlink('tt_re.js',err=>{
  if(err) throw err;
  console.log('done');
})
