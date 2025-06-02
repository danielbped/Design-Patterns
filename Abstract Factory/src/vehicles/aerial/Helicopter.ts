import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Starting the route");
  }
  checkWind(): void {
    console.log("Wind at 25km/h, favorable conditions for flight");
  }
  getCargo(): void {
    console.log("Cargo being transported by helicopter");
  }
}