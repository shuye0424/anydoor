const fs=require('fs');
const rs=fs.createReadStream('./fs_readstream.js');
rs.pipe(process.stdout);

