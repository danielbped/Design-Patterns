import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {
  getCargo(): void {
    console.log("We've picked up the passengers, we're ready to start the route");
  }
  startRoute(): void {
    this.getCargo();
    console.log("Starting the route");
  }
}