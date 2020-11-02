describe ('Fizzbuzz', function() {
  var fizzbuzz;

  describe('knows if a number is', function() {
    it('divisible by three', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

});