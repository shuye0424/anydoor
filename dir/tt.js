const assert=require('assert');

//assert.deepEqual({a:1},{a:'1'});
//assert.deepStrictEqual({a:1},{a:'1'});
/*const date = new Date();
const object = {};
const fakeDate = {};
Object.setPrototypeOf(fakeDate, Date.prototype);
assert.deepStrictEqual(object, fakeDate);*/

/*const obj2 = {
  a: {
    b: 1
  }
};
const obj3 = {
  a: {
    b: 1
  }
};
assert.deepStrictEqual(obj2, obj3);*/


/*assert.doesNotReject(
  () => {
    return 11;
  },
  SyntaxError
);*/

/*assert.doesNotThrow(
  () => {
    throw new TypeError('错误值');
  },
  SyntaxError
);*/

/*let err;
(function errorFrame() {
  err = new Error('测试错误');
})();

(function ifErrorFrame() {
  assert.ifError(err);
})();*/

assert.ok(1,new Error('出错'));

(async () => {
  await assert.rejects(
    async () => {
      throw new TypeError('错误值');
    },
    {
      name: 'TypeError',
      message: '错误值'
    }
  );
})();

assert.rejects(
  Promise.resolve(new Error('错误值')),
  Error
).then((e) => {
  console.log(e);
},(j)=>{
  console.log(j);
});

/*const a=assert.throws(
  () => {
    return 11;
  },
  SyntaxError
);
console.log(a);*/

