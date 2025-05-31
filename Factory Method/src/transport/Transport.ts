import IVechicle from "./vehicles/interfaces/IVechicle";

export default abstract class Transport {
  startTransport(): void {
    const vehicle = this.createTransport();
    vehicle.startRoute();
  }

  protected abstract createTransport(): IVechicle;
}