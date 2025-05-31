import Transport from "./Transport";
import Bicycle from "./vehicles/Bicycle";
import IVechicle from "./vehicles/interfaces/IVechicle";

export default class TransportBicycle extends Transport {
  protected createTransport(): IVechicle {
    return new Bicycle();
  }
}