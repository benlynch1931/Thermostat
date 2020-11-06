describe('Thermostat',function () {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('starts with 20 degrees', function () {

    expect(thermostat.temperature()).toEqual(20)
  });

  it('starts with minimum temperature of 10 degrees', function() {

    expect(thermostat.minimumTemp).toEqual(10)
  });

  it('starts with power saving mode on', function() {
    expect(thermostat.maximumTemp).toEqual(25);
    expect(thermostat.isSavingMode).toEqual(true);
  });

  it('has a reset function which turns the tempt to 20', function() {
      thermostat.resetTemp();

      expect(thermostat.temperature()).toBe(20);
  });

  describe('#up',function () {

    it('increases the temperature by one each time', function () {
      // thermostat.up();

      expect(thermostat.up()).toEqual(21)
    });

    it('cannot go above maximum (25 or 32)',function () {

      thermostat.currentTemp = thermostat.maximumTemp;

      expect(function() { thermostat.up() }).toThrowError("Maximum temperature reached!")
    });
  });

  describe('#down',function () {

    it('decreases the temperature by one each time', function () {
      // thermostat.up();

      expect(thermostat.down()).toEqual(19)
    });

    it('cannot decrease below 10 degrees', function() {
      thermostat.currentTemp = 10;
      expect(function() { thermostat.down() }).toThrowError("Minimum temperature reached!")
    });
  });

  describe('#powerSavingModeOn', function() {

    it('sets savingMode to true and max temp to 25', function() {
      thermostat.powerSavingModeOn();
      expect(thermostat.isPowerSavingMode()).toEqual(true);
      expect(thermostat.maximumTemp).toEqual(25);
    });

  });

  describe('#powerSavingModeOff', function() {

    it('sets savingMode to false and max temp to 32', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.isPowerSavingMode()).toEqual(false);
      expect(thermostat.maximumTemp).toEqual(32);
    });

  });

  describe('Current Energy Usage', function() {
    it('`low-usage`when temp < 18', function() {

        for(i = 0; i < 4; i++) { thermostat.down() }
        expect(thermostat.energyUsage()).toEqual('Low Usage');
    });

    it('`medium-usage` when temp <=25', function() {

        expect(thermostat.energyUsage()).toEqual('Medium Usage');
    });

    it('`high-usage` when temp >25', function() {

        thermostat.powerSavingModeOff();
        for(i = 0; i < 7; i++) { thermostat.up(); }

        expect(thermostat.energyUsage()).toEqual('High Usage');
    });
  });

});
