const {num1,num2}=require('../src/fn');

/*const s1=Date.now();
for(let i=0;i<10000;i++){
  num1(11);
}
const e1=Date.now();
console.log(e1-s1);

const s2=Date.now();
for(let i=0;i<10000;i++){
  num2(22);
}
const e2=Date.now();
console.log(e2-s2);*/

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite.add('parseInt',()=>{
  num1('12345');
}).add('Number',()=>{
  num2('12345');
}).on('cycle',e=>{
  console.log(String(e.target));
}).on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
}).run({ 'async': true });

/*// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
.add('String#match', function() {
  !!'Hello World!'.match(/o/);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });*/
