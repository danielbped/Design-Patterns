import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind();
  }
  getCargo(): void {
    console.log("Cargo being transported by drone");
  }
  checkWind(): void {
    console.log("Wind at 25km/h, favorable conditions for flight");
  }
} 