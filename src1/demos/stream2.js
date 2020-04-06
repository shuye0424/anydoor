const fs=require('fs');
const ws=fs.createWriteStream('hh1.txt');
ws.once('open',()=>{
  console.log('流打开了');
})  //open事件只会触发一次
ws.once('close',()=>{
  console.log('流关闭了');
}) //流会自动打开，但要手动写ws.close()或ws.end()才会关闭。ws.close()在接收方关闭，ws.end()发送完关闭。

ws.write('啊啊啊啊加油');
ws.write('啊啊啊啊加油1');
ws.write('啊啊啊啊加油2');
ws.write('啊啊啊啊加油3');
ws.write('明天会天晴吗');

//ws.close();
ws.end();
