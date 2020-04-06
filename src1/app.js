const http=require('http');
const chalk=require('chalk');
const path=require('path');
const fs=require('fs');
const promisify=require('util').promisify;
const stat=promisify(fs.stat);
const readdir=promisify(fs.readdir);
const conf=require('./config/defaultConfig.js');
const server=http.createServer(async(req,res)=>{
  const filePath=path.join(conf.root, req.url);
  try{
    const stats=await stat(filePath);
    if(stats.isFile()){
      res.statusCode=200;
      res.setHeader('Content-Type','text/plain');
      fs.createReadStream(filePath).pipe(res);
    }else if(stats.isDirectory()){
      fs.readdir(filePath,(err,dir)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end(dir.join(','));
      });
    }
  }catch(e){
    res.statusCode=404;
    res.setHeader('Content-Type','text/plain');
    res.end(`${filePath} is not a directory or file`);
  }
  fs.stat(filePath,(err,stats)=>{
    if(err){
      res.statusCode=404;
      res.setHeader('Content-Type','text/plain');
      res.end(`${filePath} is not a directory or file`);
      return;
    }
    if(stats.isFile()){
      res.statusCode=200;
      res.setHeader('Content-Type','text/plain');
      fs.createReadStream(filePath).pipe(res);
    }else if(stats.isDirectory()){
      fs.readdir(filePath,(err,dir)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end(dir.join(','));
      })
    }

  })
});
server.listen(conf.port,conf.hostname,()=>{
  const addr=`http://${conf.hostname}:${conf.port}`;
  console.info(`Server started at ${chalk.green(addr)}`);
});
