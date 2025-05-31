import Transport from "./transport/Transport";
import TransportCar from "./transport/TransportCar";
import TransportMotorcycle from "./transport/TransportMotorcycle";
import TransportBicycle from "./transport/TransportBicycle";

declare var process;

let transport: Transport | null = null;

if (process.argv.TRANSPORT === '--uber') {
  transport = new TransportCar();
} else if (process.argv.TRANSPORT === '--log') {
  transport = new TransportMotorcycle();
} else if (process.argv.TRANSPORT === '--eats') {
  transport = new TransportBicycle();
} else {
  console.error('Selecione o tipo de transporte');
}

if (transport) {
  transport.startTransport();
}
