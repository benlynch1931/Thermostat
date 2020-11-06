

class Thermostat {



  constructor() {
    this.minimumTemp = 10;
    this.currentTemp = 20;
    this.isSavingMode = true;
    this.maximumTemp = 25;
  }

  isPowerSavingMode() {
      return this.isSavingMode;
  }

  temperature() {
      return this.currentTemp;
  }

  minTemperature() {
      return this.minimumTemp;
  }

  maxTemperature() {
      return this.maximumTemp;
  }

  up() {
    if(this.currentTemp >= this.maximumTemp) {
      throw new Error("Maximum temperature reached!");
    }
    return this.currentTemp += 1;
  }

  down() {
    if(this.currentTemp <= this.minimumTemp) {
      throw new Error('Minimum temperature reached!');
    }
    return this.currentTemp -= 1;
  }

  powerSavingModeOn() {
    this.isSavingMode = true;
    this.maximumTemp = 25;
  }

  powerSavingModeOff() {
    this.isSavingMode = false;
    this.maximumTemp = 32;
  }

  resetTemp() {
      this.currentTemp = 20;
  }

  energyUsage() {
      if(this.currentTemp < 18) {
        return 'Low Usage';
      } else if(this.currentTemp <= 25) {
        return 'Medium Usage';
      } else {
        return 'High Usage';
      }
  }
}
