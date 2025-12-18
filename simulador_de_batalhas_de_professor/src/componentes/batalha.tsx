import { useEffect, useState } from "react";
import { Botao } from "./botao";
import { Professores } from "..//Personagem";

type ResultadoTorneio = {
  campeao: string;
  historico: string[];
};
interface IInputBatalha{
    Onvoltar:()=>void
}

export const Batalha = ({Onvoltar}:IInputBatalha) => {
  const [resultado, setResultado] = useState<ResultadoTorneio | null>(null);

  useEffect(() => {
    const worker = new Worker(
      new URL("../batalha.worker.ts", import.meta.url),
      { type: "module" }
    );

    worker.postMessage(Professores);

    worker.onmessage = (e) => {
      setResultado(e.data);
      worker.terminate();
    };

    return () => worker.terminate();
  }, []);

  return (
    <>
      {resultado && (
        <div className="quadro-vitoria">
          <p>🏆 Campeão do Torneio</p>
          <p>
            <strong>{resultado.campeao}</strong>
          </p>
        
          <hr />

          {resultado.historico.map((luta, index) => (
            <p key={index}>{luta}</p>
          ))}
          <Botao
          index={2}
          label="voltar"
          onclick={Onvoltar}
          />

        </div>
      )}
    </>
  );
};
