const fs=require('fs');
fs.rename('./tt','tt_re.js',err=>{
  if(err) throw err;
  console.log('done');
})
