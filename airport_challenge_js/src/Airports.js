"use strict";

class Airports {

  constructor(capacity) {

    this.capacity = capacity;
    this.inAir = [];
    this.onGround = [];
  }

  weather() {
    return true
  }

  isFull() {

    return this.onGround.length >= this.capacity;
  }

  movePlane(move, plane) {
    if(move === 'air') {
      for( var i = 0; i < this.onGround.length; i++) {
        if ( this.onGround[i] === plane) {
          this.onGround.splice(i, 1); i--; }}
      this.inAir.push(plane)
    } else {
      for( var i = 0; i < this.inAir.length; i++) {
        if ( this.inAir[i] === plane) {
          this.inAir.splice(i, 1); i--; }}
      this.onGround.push(plane)
    }
  }

  status() {
    console.log('In Air:');
    for( var i = 0; i < this.inAir.length; i++) {
      console.log(this.inAir[i]);
    };
    console.log('\nOn Ground:');
    for( var i = 0; i < this.onGround.length; i++) {
      console.log(this.onGround[i]);
    };
  }


}
