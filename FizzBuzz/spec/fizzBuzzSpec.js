describe ('Fizzbuzz', function() {
  var fizzbuzz;

  describe('knows if a number is', function() {
    it('divisible by three', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('not divisible by three', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by five', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });

    it('divisible by three and five', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
      expect(fizzbuzz.isDivisibleByThreeAndFive(4)).toBe(false);
    });

  });

  describe('when playing says', function() {
    it('Fizz when divisible by three and not five', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.say(3)).toBe('Fizz');
    });

    it('Buzz when divisible by five and not three', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.say(5)).toBe('Buzz');
    });

    it('FizzBuzz when divisible by both three and five', function() {
      fizzbuzz = new Fizzbuzz(); 
      expect(fizzbuzz.say(15)).toBe("FizzBuzz");
    });

    it('the number when not divisible by three or 5', function() {  
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.say(4)).toBe(4)

    });

  });

});