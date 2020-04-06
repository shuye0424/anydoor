const fs=require('fs');
const rs=fs.createReadStream('../static/1.jpg');
const ws=fs.createWriteStream('../static/3.jpg');
rs.once('open',()=>{
  console.log('读取流开启了');
})
rs.once('close',()=>{
  console.log('读取流关闭了');
})
ws.once('open',()=>{
  console.log('可写流开启了');
})
ws.once('close',()=>{
  console.log('可写流关闭了');
})
rs.pipe(ws);//可将可读流中的数据直接写入可写流中。自动关闭可读流和可写流。

