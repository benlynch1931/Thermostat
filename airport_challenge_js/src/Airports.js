class Airports {

  constructor(capacity) {

    this.capacity = capacity;
    this.inAir = [];
    this.onGround = [];
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
        }
      }
    }
