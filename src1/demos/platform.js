const {sep,delimiter,win32,posix}=require('path');
const filePath=process.env.PATH;
console.log('sep:',sep);
console.log('posix sep:',posix.sep);
console.log('env:',filePath);
console.log('delimiter:',delimiter);
console.log('posix delimiter:',posix.delimiter);


