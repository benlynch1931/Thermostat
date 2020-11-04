"use strict";

class Plane {
  constructor(id, airport) {
    this.id = id;
    this.airport = airport;
  }

  takeOff() {
    if(this.airport.weather() === 'stormy') { throw new Error("Warning: Stormy weather. Cannot take off..."); }
    if(this.airport.inAir.includes(`Plane ${this.id}`)) {
      console.log(`Error: Plane ${this.id} is already in the air...`);
    } else {
      this.airport.movePlane('air', `Plane ${this.id}`);
      console.log(`Plane ${this.id} has taken off`);
    }
  }

}
