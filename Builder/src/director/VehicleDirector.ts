import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import { IVehicleBuilder } from "../builders/interfaces/IVehicleBuilder";
import Wheel from "../components/Wheel";

export default class VehicleDirector {
  constructor (private builder: IVehicleBuilder) {
    
  }

  constructSportsCar(): void {
    this.builder.reset();
    this.builder.setVehicleType(VehicleType.SPORT_CAR);
    this.builder.setEngine(new Engine(2.0));
    this.builder.setSeats(4);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.addWheel(new Wheel(16));
    this.builder.addWheel(new Wheel(16));
    this.builder.addWheel(new Wheel(16));
    this.builder.addWheel(new Wheel(16));
  }

  constructTruck(): void {
    this.builder.reset();
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setEngine(new Engine(6.0));
    this.builder.setSeats(2);
    this.builder.setTransmission(Transmission.MANUAL);
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }

  constructMotorcycle(): void {
    this.builder.reset();
    this.builder.setVehicleType(VehicleType.MOTORCYCLE);
    this.builder.setEngine(new Engine(1.0));
    this.builder.setSeats(1);
    this.builder.setTransmission(Transmission.MANUAL);
    this.builder.addWheel(new Wheel(16));
    this.builder.addWheel(new Wheel(16));
  }
}