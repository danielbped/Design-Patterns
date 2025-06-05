import VehicleBuilder from "./builders/VehicleBuilder";
import VehicleDirector from "./director/VehicleDirector";

const vehicleBuilder = new VehicleBuilder();
const vehicleDirector = new VehicleDirector(vehicleBuilder);

vehicleDirector.constructSportsCar();

const vehicle = vehicleBuilder.getVehicle();

console.log(`Vehicle Type: ${vehicle.vehicleType}, Engine: ${vehicle.engine.power}, Seats: ${vehicle.seats}, Transmission: ${vehicle.transmission}`);

vehicleDirector.constructTruck();

const truck = vehicleBuilder.getVehicle();

console.log(`Vehicle Type: ${truck.vehicleType}, Engine: ${truck.engine.power}, Seats: ${truck.seats}, Transmission: ${truck.transmission}`);

vehicleDirector.constructMotorcycle();

const motorcycle = vehicleBuilder.getVehicle();

console.log(`Vehicle Type: ${motorcycle.vehicleType}, Engine: ${motorcycle.engine.power}, Seats: ${motorcycle.seats}, Transmission: ${motorcycle.transmission}`);