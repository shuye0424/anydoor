const {resolve}=require('path');
console.log('resolve',resolve());     //执行node脚本的路径
console.log('dirname',__dirname);     //文件所在的路径，__dirname和__filename总是返回文件的绝对路径
console.log('process',process.cwd()); //执行node脚本的路径
