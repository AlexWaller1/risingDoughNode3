class Clone {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  greetingClone() {
    console.log(`Welcome to the world, ${this.name}!
      you are a ${this.species} clone`);
  }
}

module.exports = Clone;
