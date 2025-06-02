import Client from "./vehicles/client/Client";
import UberTransport from "./vehicles/factories/UberTransport";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import Company from "./vehicles/consts/Company";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";
import LimeTransport from "./vehicles/factories/LimeTransport";

const currentCompany = Company.LIME;

let transportFactory: ITransportFactory;

switch (currentCompany) {
  case Company.NINE_NINE:
    transportFactory = new NineNineTransport();
    break;
  case Company.UBER:
    transportFactory = new UberTransport();
    break;
  case Company.LIME:
    transportFactory = new LimeTransport();
    break;
  default:
    throw new Error('Company not supported');
}

const client = new Client(transportFactory);
client.startRoute();