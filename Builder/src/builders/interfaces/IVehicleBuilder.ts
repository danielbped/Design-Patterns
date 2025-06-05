import Engine from "../../components/Engine";
import Transmission from "../../components/Transmission";
import { Vehicle } from "../../components/Vehicle";
import VehicleType from "../../components/VehicleType";
import Wheel from "../../components/Wheel";
import IBuilder from "./IBuilder";

export interface IVehicleBuilder extends IBuilder {
  reset(): void;
  getVehicle(): Vehicle;

  addWheel(wheel: Wheel): void;

  setVehicleType(vehicleType: VehicleType): void;
  setEngine(engine: Engine): void;
  setTransmission(transmission: Transmission): void;
  setSeats(seats: number): void;
}