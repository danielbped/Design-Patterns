import Airplane from "../aerial/Airplane";
import IAircraft from "../aerial/interfaces/IAircraft";
import ITransportFactory from "./interfaces/ITransportFactory";
import Car from "../land/Car";
import ILandVehicle from "../land/interfaces/ILandVehicle";

export default class UberTransport implements ITransportFactory {
  createTransportAircraft(): IAircraft {
    return new Airplane();
  }
  createTransportVehicle(): ILandVehicle {
    return new Car();
  }
}