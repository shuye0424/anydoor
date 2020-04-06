const fs=require('fs');
const data = new Uint8Array(Buffer.from('Node.js中文网'));
fs.writeFile('./tt', data, (err) => {
  if (err) throw err;
  console.log('文件已被保存');
});
