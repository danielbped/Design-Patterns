import Transport from "./Transport";
import Car from "./vehicles/Car";
import IVechicle from "./vehicles/interfaces/IVechicle";

export default class TransportCar extends Transport {
  protected createTransport(): IVechicle {
    return new Car();
  }
}