const {should,expect,assert}=require('chai');
const {add,mul,cover}=require('../dir/math');

describe('math',()=>{
  describe('add',()=>{
    it('should return 5 when 2+3',()=>{
      expect(add(2,3)).to.be.equal(5);
    })
    it('should return 5 when 2+3',()=>{
      expect(add(2,-3)).to.be.equal(-1);
    })
  })
  describe('mul',()=>{
    it('should return 6 when 2*3',()=>{
      expect(mul(2,3)).to.be.equal(6)
    })
  })
  describe('cover',()=>{
    it('should return a>b when cover(2,1)',()=>{
      expect(cover(4,3)).to.be.equal('a>b')
    })
    it('should return a<b when cover(1,2)',()=>{
      expect(cover(1,2)).to.be.equal(-1)
    })
    it('should return === when cover(1,1)',()=>{
      expect(cover(1,1)).to.be.equal('===')
    })
  })
})
