setImmediate(()=>{
  console.log('immediate');
})
setTimeout(()=>{
  console.log('setTimeout');
},0)
process.nextTick(()=>{
  console.log('nextTick');
  process.nextTick(()=>{
    console.log('nextTick');
    process.nextTick(()=>{
      console.log('nextTick');
    })
  })
}) //把事件插入当前队列的最后一个
