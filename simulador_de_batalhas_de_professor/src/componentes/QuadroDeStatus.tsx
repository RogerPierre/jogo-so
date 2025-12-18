



interface IInputQuadroDeVitoria{
    onclick:()=>void
}
export const QuadroDeVitoria = ({onclick}:IInputQuadroDeVitoria) => {
  return (
    <div className="quadro-vitoria">
      <div className="linha">
        <p>Venceu?</p>
      </div>

      <div className="linha">
        <p>Vida Perdida</p>
      </div>

      <div className="linha">
        <p>Dano Causado</p>
      </div>
      <button onClick={onclick}>voltar</button>
    </div>
  )
}
