const {normalize}=require('path');
const {join}=require('path');
const {resolve}=require('path');
const {basename,extname,dirname}=require('path');
console.log(normalize('/usr/bin/../locale/myOwn.js'));
console.log(join('/usr/bin','/locale/myOwn.js'));
console.log(resolve('./'));
console.log(basename('/usr/bin/../locale/myOwn.js'));
console.log(extname('/usr/bin/../locale/myOwn.js'));
console.log(dirname('/usr/bin/../locale/myOwn.js'));
