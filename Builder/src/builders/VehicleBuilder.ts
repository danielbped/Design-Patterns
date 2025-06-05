import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import { Vehicle } from "../components/Vehicle";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import { IVehicleBuilder } from "./interfaces/IVehicleBuilder";

export default class VehicleBuilder implements IVehicleBuilder {

  private vehicle: Vehicle = new Vehicle();

  addWheel(wheel: Wheel): void {
    this.vehicle.addWheel(wheel);
  }

  setVehicleType(vehicleType: VehicleType): void {
    this.vehicle.vehicleType = vehicleType;
  }

  setEngine(engine: Engine): void {
    this.vehicle.engine = engine;
  }

  setTransmission(transmission: Transmission): void {
    this.vehicle.transmission = transmission;
  }

  setSeats(seats: number): void {
    this.vehicle.seats = seats;
  }

  reset(): void {
    this.vehicle = new Vehicle();
  }

  getVehicle(): Vehicle {
    const result = this.vehicle;
    this.reset();
    return result;
  }
}