console.log(Buffer.alloc(10));
console.log(Buffer.alloc(5,1));
console.log(Buffer.allocUnsafe(5));
console.log(Buffer.from([1,2,3,7]));
console.log(Buffer.from('test'));
console.log(Buffer.from('test').toString());
console.log(Buffer.from('test','base64'));

console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试'));

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1,2])));

//接受一个对象，里面是Buffer的数组
const b1=Buffer.from('This');
const b2=Buffer.from('is');
const b3=Buffer.from('test');
const b4=Buffer.from('!!');
const buf=Buffer.concat([b1,b2,b3,b4]);
console.log(buf.toString());


/*const arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 4000;
const buf1 = Buffer.from(arr);
const buf2 = Buffer.from(arr.buffer);
console.log(buf1);
console.log(buf2);*/

const bu=Buffer.alloc(10);
console.log(bu.fill(10,2,6));

const bu1=Buffer.from('This is a test!');
console.log(bu1);
console.log(bu1.toString());
console.log(bu1.toString('base64'));

const bu2=Buffer.from('ttt');
const bu3=Buffer.from('ttt');
console.log(bu2.equals(bu3));
console.log(bu2.indexOf('is'));


const StringDecoder=require('string_decoder').StringDecoder;
const decoder=new StringDecoder('utf8');
const buf4=Buffer.from('中文字符串！');
for(let i=0;i<buf4.length;i+=5){
  const b=Buffer.allocUnsafe(5);
  buf4.copy(b,0,i);
  //console.log(b.toString());
  console.log(decoder.write(b));
}

