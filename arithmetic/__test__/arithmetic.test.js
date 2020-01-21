'use strict ';
const arithmetic=require('../src/arithmetic.js');
describe('Arithmetic Module',()=>{
    describe('param validation',()=>{
        it(`add() disallows string`,()=>{
            //i was forget the ) of the expect  
            expect(arithmetic.add('foo',4)).toBeNull()
            // expect(arithmetic.add('foo', 4)).toBeNull();
        })
        it(`add() disallows array`,()=>{

            expect(arithmetic.add([], 4)).toBeNull();
        })
        let methods=['add','subtract']
        methods.forEach(method=>{
            it(`${methods} disallows string`,()=>{
                expect(arithmetic[method]('foo', 4)).toBeNull();
            })
        })
    })
})
// describe('Arithmetic Module', () => {

//     describe('parameter validation ... ', () => {
  
//       // Do all of the add() checks ...
//       it(`add() disallows strings`, () => {
//         expect(arithmetic.add('foo', 4)).toBeNull();
//       });
  
//       it(`add() disallows arrays`, () => {
//         expect(arithmetic.add([], 4)).toBeNull();
//       });
  
//       it(`add() disallows objects`, () => {
//         expect(arithmetic.add({}, 4)).toBeNull();
//       });
  
//       it(`add() disallows booleans`, () => {
//         expect(arithmetic.add(true, 4)).toBeNull();
//       });
  
//       it(`add() requires at least 2 args`, () => {
//         expect(arithmetic.add(4)).toBeNull();
//       });
//     });

// });
