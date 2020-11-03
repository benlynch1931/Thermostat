describe('Airports', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airports(20);
  });

  describe('initializes with', function() {

    it('in_air, on_ground and capacity attributes', function() {

      expect(airport.inAir).toEqual([]);
      expect(airport.onGround).toEqual([]);
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

  describe('#move_plane', function() {
    it('moves plane from @on_ground to @in_air', function() {
      airport.onGround.push('plane1')
      airport.movePlane('air', 'plane1')
      expect(airport.onGround).toEqual([]);
      expect(airport.inAir).toEqual(['plane1']);
    });
  });

});
