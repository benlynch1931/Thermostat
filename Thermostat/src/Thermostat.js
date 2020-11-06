

class Thermostat {
  #currentTemp;
  #minimumTemp;
  #isPowerSavingMode;
  #maximumTemp;

  constructor() {
    this.#minimumTemp = 10;
    this.#currentTemp = 20;
    this.#isPowerSavingMode = true;
    this.#maximumTemp = 25;
  }

  isPowerSavingMode() {
      return this.#isPowerSavingMode;
  }

  temperature() {
      return this.#currentTemp;
  }

  minimumTemp() {
      return this.#minimumTemp;
  }

  maximumTemp() {
      return this.#maximumTemp;
  }

  up() {
    if(this.#currentTemp >= this.#maximumTemp) {
      throw new Error("Maximum temperature reached!");
    }
    return this.#currentTemp += 1;
  }

  down() {
    if(this.#currentTemp <= this.#minimumTemp) {
      throw new Error('Minimum temperature reached!');
    }
    return this.#currentTemp -= 1;
  }

  powerSavingModeOn() {
    this.#isPowerSavingMode = true;
    this.#maximumTemp = 25;
  }

  powerSavingModeOff() {
    this.#isPowerSavingMode = false;
    this.#maximumTemp = 32;
  }

  resetTemp() {
      this.#currentTemp = 20;
  }

  energyUsage() {
      if(this.#currentTemp < 18) {
        return 'Low Usage';
      } else if(this.#currentTemp <= 25) {
        return 'Medium Usage';
      } else {
        return 'High Usage';
      }
  }
}
