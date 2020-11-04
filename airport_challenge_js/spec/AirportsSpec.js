"use scrict";

describe('Airports', function() {
  var airport;
  var plane;

  beforeEach(function() {
    consoleLog = [];
    spyOn(console, 'log').and.callFake(function(arg) { consoleLog.push(arg) });
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

  describe('#move_plane function', function() {

    it('moves plane from @onGround to @inAir', function() {
      airport.onGround.push('plane1');
      airport.movePlane('air', 'plane1');
      expect(airport.onGround).toEqual([]);
      expect(airport.inAir).toEqual(['plane1']);
    });

    it('moves plane from @inAir to @onGround', function() {
      airport.inAir.push('plane2');
      airport.movePlane('land', 'plane2');
      expect(airport.onGround).toEqual(['plane2']);
      expect(airport.inAir).toEqual([]);
    });
  });


  describe('#status function', function() {

    it('prints where planes are', function() {
      airport.onGround.push(['plane1', 'plane3'])
      airport.inAir.push('plane2')
      airport.status()
      expect(consoleLog).toEqual(['In Air:','plane2','\nOn Ground:',['plane1','plane3']])
    });
  });
});
