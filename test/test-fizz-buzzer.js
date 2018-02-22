//import chai and declare expect variable
const expect = require('chai').expect;

//import fizz-buzzer
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for fizzBuzzer function
describe('fizzBuzzer', function(){
  it('Should replace number 3 with fizz, 5 with buzz and 15 with fizz-buzz', function(){

     const valInputs=[
        {num:3,expected:'fizz'},
        {num:9,expected:'fizz'},
        {num:5,expected:'buzz'},
        {num:10,expected:'buzz'},
        {num:15,expected:'fizz-buzz'},
        {num:45,expected:'fizz-buzz'}
        ];

        //for each valInputs fizzBuzzer should be equal to expected value
        valInputs.forEach(function(input){
          const result=fizzBuzzer(input.num);
          expect(result).to.equal(input.expected);
        });
    });

 it('Should see if not 3,5 or 15 the result is a number or string', function(){
   const valInputs = [2,14,11];
      valInputs.forEach(function(input) {
      const result=fizzBuzzer(input);
      expect(result).to.equal(input);
     });
 });

  it('Should check for invalid entries--non numeric', function(){
    const badInputs = [true,'', function(tests) {}, [1, 2, 3],'1'];
    badInputs.forEach(function(input) {
     expect(function() {
         fizzBuzzer(input);
     }).to.throw(Error);
      });
  });

});
