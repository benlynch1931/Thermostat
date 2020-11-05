
"use strict";

describe('Planes', function() {
  var consoleLog;
  var plane;
  var airport;

  beforeEach(function() {
    consoleLog = [];
    spyOn(console, 'log').and.callFake(function(arg) { consoleLog.push(arg) });
    airport = new Airports(20);
    plane = new Plane('001', airport);
  });

  describe('#takeOff function', function() {

    it('prints <plane> has taken off', function() {
      plane.takeOff();
      expect(consoleLog).toEqual([`Plane ${plane.id} has taken off`]);
    });

    it('prints Error: <plane> already in air...', function() {
      airport.inAir.push('Plane 001');
      plane.takeOff();
      expect(consoleLog).toEqual([`Error: Plane ${plane.id} is already in the air...`]);
    });

    it('raises error: stormy', function() {
      spyOn(airport, 'weather').and.callFake(function() { return 'stormy';});
      expect(function() { plane.takeOff() }).toThrowError("Warning: Stormy weather. Cannot take off...");

    });

    it('transfers plane to correct array in Airports', function() {
      spyOn(airport, 'weather').and.callFake(function() { return 'clear';});
      plane.takeOff()
      expect(airport.inAir).toEqual(['Plane 001'])
    });

  });

  describe('#land function', function() {

    it('prints <plane> has landed', function() {
      plane.land();
      expect(consoleLog).toEqual([`Plane ${plane.id} has landed`]);
    });

    it('prints Error: <plane> already landed...', function() {
      airport.onGround.push('Plane 001');
      plane.land();
      expect(consoleLog).toEqual([`Error: Plane ${plane.id} has already landed...`]);
    });

    it('raises error: stormy', function() {
      spyOn(airport, 'weather').and.callFake(function() { return 'stormy';});
      expect(function() { plane.land() }).toThrowError("Warning: Stormy weather. Cannot land...");

    });

    it('transfers plane to correct array in Airports', function() {
      spyOn(airport, 'weather').and.callFake(function() { return 'clear';});
      plane.land()
      expect(airport.onGround).toEqual(['Plane 001'])
    });
  });
});
