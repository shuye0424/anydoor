//const assert=require('assert');

const {add,mul}=require('../math.js');
const {should,expect,assert}=require('chai');
/*if(add(2,3)===5){
  console.log('add(2,3)===5,OK');
}else{
  console.log('add(2,3)!===5,error');
}*/


//assert.strictEqual(add(2,3),6);

should();
add(2,3).should.equal(5);
expect(add(2,3)).to.be.equal(5);
/*expect({a:1}).to.be.equal({a:1}); //error
expect({a:1}).to.be.deep.equal({a:1});//ok */
assert.equal(add(2,3),5);

//assert.fail(1, 2, "custom error message", "<");

