import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting the route");
  }
  getCargo(): void {
    console.log("We've picked up the cargo, we're ready to start the route");
  }
}