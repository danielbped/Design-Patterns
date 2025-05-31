import IVechicle from "./interfaces/IVechicle";

export default class Motorcycle implements IVechicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto");
  }

  getCargo(): void {
    console.log("Pegamos a encomenda, estamos prontos para iniciar o trajeto");
  }
}