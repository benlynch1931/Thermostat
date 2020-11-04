describe('Thermostat',function () {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('starts with 20 degrees', function () {

    expect(thermostat.temperature).toEqual(20)
  });

  describe('#up',function () {

    it('increases the temperature by one each time',function () {
      // thermostat.up();

      expect(thermostat.up()).toEqual(21)
    });
  });

});
