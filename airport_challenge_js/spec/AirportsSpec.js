describe('Airports', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airports(20);
  });

  describe('initializes with', function() {

    it('in_air, on_ground and capacity attributes', function() {

      expect(airport.in_air).toEqual([]);
      expect(airport.on_ground).toEqual([]);
      expect(airport.capacity).toBe(20);
    });


  });

  describe('#isFull function', function() {

    it('returns false when not full', function() {
      expect(airport.isFull()).toBe(false);
    });

    it('returns true when full', function() {
      airport = new Airports(0);
      expect(airport.isFull()).toBe(true);
    });
  });

});
