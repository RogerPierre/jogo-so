export class Personagem {
  nome: string;
  vida: number;
  ataque: number;
  VelocidadeDeAtq: number;
  selecionado: boolean;

  constructor(
    nome: string,
    vida: number,
    ataque: number,
    VelocidadeDeAtq: number
  ) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.VelocidadeDeAtq = VelocidadeDeAtq;
    this.selecionado = false;
  }
}

export const Professores: Personagem[] = [
  new Personagem("Sekef", 90, 15, 0.2),
  new Personagem("Jivago", 100, 15, 0.2),
  new Personagem("Maikol", 100, 15, 0.2),
  new Personagem("Iallen", 100, 15, 0.2),
  new Personagem("Jeferson", 100, 15, 0.2),
];
