/* argv
argv0
execArgv
execPath
*/
const {argv,argv0,execArgv,execPath}=process;
argv.forEach((item)=>{
  console.log(item);
}) //argv是路径及参数，可以在启动文件时传入自定义参数，写在文件名之前的参数不记入argv

console.log(argv0); //argv0保存了argv第一个值的引用
console.log(execArgv); //读入调用Node，在前面所传入的一些特殊参数
console.log(execPath); //调用命令的脚本路径

const {env}=process;
console.log(env);
console.log(process.cwd());

