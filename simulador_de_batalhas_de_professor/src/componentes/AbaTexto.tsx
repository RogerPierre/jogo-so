




interface IInputAbaTexto{
    label:string
    EventoDeSaida:()=>void
}

export const AbaTexto = ({label ,EventoDeSaida}:IInputAbaTexto) => {
    return (
        <>
        <p id={"Aba-Texto-"+Array(label)[0]}>{label}</p>
        <button onClick={EventoDeSaida}>voltar</button>
        </>
    )
}