import IAircraft from "../aerial/interfaces/IAircraft";
import ITransportFactory from "../factories/interfaces/ITransportFactory";
import ILandVehicle from "../land/interfaces/ILandVehicle";

export default class Client {
  private landVehicle: ILandVehicle;
  private aircraft: IAircraft;

  constructor(transportFactory: ITransportFactory) {
    this.landVehicle = transportFactory.createTransportVehicle();
    this.aircraft = transportFactory.createTransportAircraft();
  }

  startRoute(): void {
    this.landVehicle.startRoute();
    this.aircraft.startRoute();
  }
}
