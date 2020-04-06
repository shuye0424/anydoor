const {normalize}=require('path');
console.log(normalize('/usr//local///bin'));
console.log(normalize('/usr//local//../bin'));

const {join}=require('path');
console.log(join('/usr','local','/bin/'));
console.log(join('/usr','../','local','/bin/'));

const {resolve}=require('path');
console.log(resolve());
console.log(resolve('/foo', '/bar', 'baz'));
console.log(resolve('foo', 'bar', 'baz'));

const {dirname,extname,basename}=require('path');
const filePath='/usr/local/bin/no.txt';
console.log(dirname(filePath));
console.log(basename(filePath));
console.log(extname(filePath));

const {parse,format}=require('path');
const filePath1='/usr/local/bin/no.txt';
const ret=parse(filePath1);
console.log(ret);
console.log(format(ret));

const {sep,delimiter,win32,posix}=require('path');
console.log('sep',sep);
console.log('PATH',process.env.PATH);
console.log('delimiter',delimiter);
console.log('posix delimiter',posix.delimiter);

console.log('__dirname',__dirname);
console.log('process.cwd()',process.cwd());
console.log('./',resolve('./'));
