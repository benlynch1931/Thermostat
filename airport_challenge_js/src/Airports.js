class Airports {

  constructor(capacity) {

    this.capacity = capacity;
    this.in_air = [];
    this.on_ground = [];
  }

  isFull() {

    return this.on_ground.length >= this.capacity;
  }
  
}
