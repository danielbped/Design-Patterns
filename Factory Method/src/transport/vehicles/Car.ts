import IVechicle from "./interfaces/IVechicle";

export default class Car implements IVechicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto");
  }

  getCargo(): void {
    console.log("Pegamos os passageiros, estamos prontos para iniciar o trajeto");
  }
}
