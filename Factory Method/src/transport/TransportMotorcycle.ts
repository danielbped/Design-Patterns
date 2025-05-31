import Transport from "./Transport";
import IVechicle from "./vehicles/interfaces/IVechicle";
import Motorcycle from "./vehicles/Motorcycle";

export default class TransportMotorcycle extends Transport {
  protected createTransport(): IVechicle {
    return new Motorcycle();
  }
}