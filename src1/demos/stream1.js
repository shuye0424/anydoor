const fs=require('fs');
const rs=fs.createReadStream('../static/1.jpg');
const ws=fs.createWriteStream('../static/2.jpg');

rs.once('open',()=>{
  console.log('读取流开启了');
})
rs.once('close',()=>{
  console.log('读取流关闭了');
  ws.end();
})
rs.on('data',(data)=>{
  console.log(data.length);
  ws.write(data);
}) //如果要读取一个可读流中的数据，要为可读流绑定一个data事件，data事件绑定完毕后会自动读取数据，读取完会自动关闭。
   //大文件会分多次读取，自动读取

ws.once('open',()=>{
  console.log('可写流开启了');
})
ws.once('close',()=>{
  console.log('可写流关闭了');
})

