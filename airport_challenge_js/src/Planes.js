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

  land() {
    if(this.airport.weather() === 'stormy') { throw new Error("Warning: Stormy weather. Cannot land..."); }
    if(this.airport.onGround.includes(`Plane ${this.id}`)) {
      console.log(`Error: Plane ${this.id} has already landed...`);
    } else {
      this.airport.movePlane('land', `Plane ${this.id}`);
      console.log(`Plane ${this.id} has landed`)
    }
  }

}
