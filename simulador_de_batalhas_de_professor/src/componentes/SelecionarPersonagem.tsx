import { Personagem } from "../Personagem";
import { Botao } from "./botao";



interface IInputEscolhaSeuPersonagemProps  {
  personagens: Personagem[];
  onSelecionar: (personagem:Personagem) => void;
  onVoltar:()=>void
}

export const EscolhaSeuPersonagem = ({
  personagens,
  onSelecionar,
  onVoltar
}: IInputEscolhaSeuPersonagemProps) => {
  return (
    <div className="escolha-personagem">
     

      <div className="lista-personagens">
        {personagens.map((p, index) => (
          <div
            key={index}
            className="card-personagem"
            onClick={() => onSelecionar(p)}
          >
            <h3>{p.nome}</h3>

            <p>❤️ Vida: {p.vida}</p>
            <p>⚔️ Ataque: {p.ataque}</p>
            <p>⚡ Velocidade: {p.VelocidadeDeAtq}</p>
          </div>
        ))}
        
      </div>
      <Botao
        index={1}
        label="voltar"
        onclick={onVoltar}
      />
    </div>
  );
};
