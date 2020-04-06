console.log(Buffer.alloc(10));
console.log(Buffer.alloc(5,2));
console.log(Buffer.allocUnsafe(10));
console.log(Buffer.from([1,2,3]));
console.log(Buffer.from('text')); //默认编码utf-8
console.log(Buffer.from('text','base64')); //默认编码utf-8

/*Buffer类方法
Buffer.byteLength
Buffer.isBuffer
Buffer.concat()
*/

const bf1=Buffer.from('This ');
const bf2=Buffer.from('is ');
const bf3=Buffer.from('a ');
const bf4=Buffer.from('test');
const re=Buffer.concat([bf1,bf2,bf3,bf4]);
console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试')); //说明一个中文字符用3个字节表示
console.log(re.toString()); //说明一个中文字符用3个字节表示

/*Buffer实例常用的属性和方法
buf.length  长度是申请的空间大小
buf.fill()
buf.equals()
buf.indexOf()
buf.copy()
*/
const buf1=Buffer.from('This is a test!');
console.log(buf1.length);
const buf2=Buffer.alloc(8);
buf2[0]=21;
console.log(buf2.length);
console.log(buf1.toString('base64'));

const buf3=Buffer.allocUnsafe(10);
console.log(buf3.fill(10,2,6));

const buf4=Buffer.from('tttesfgb');
const buf5=Buffer.from('ttt');
console.log(buf4.equals(buf5));

console.log(buf4.indexOf('es'));


const StringDecoder=require('string_decoder').StringDecoder;
const decoder=new StringDecoder('utf8');
const buf8=Buffer.from('中文字符串！');
for(let i=0;i<buf8.length;i+=5){
  const b=Buffer.alloc(5);
  buf8.copy(b,0,i);
  console.log(b.toString());
}
for(let i=0;i<buf8.length;i+=5){
  const b=Buffer.alloc(5);
  buf8.copy(b,0,i);
  console.log(decoder.write(b));
}

