import IVechicle from "./interfaces/IVechicle";

export default class Bicycle implements IVechicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto");
  }

  getCargo(): void {
    console.log("Pegamos a refeição, estamos prontos para iniciar o trajeto");
  }
}