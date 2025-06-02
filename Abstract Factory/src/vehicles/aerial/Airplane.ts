import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
  getCargo(): void {
    console.log("Cargo being transported by airplane");
  }
  checkWind(): void {
    console.log("Wind at 25km/h, favorable conditions for flight");
  }
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Starting the route");
  }
}
