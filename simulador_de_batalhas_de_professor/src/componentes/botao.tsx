



interface IInputBotao{
    label:string
    onclick:()=>void
    index:number
}
export const Botao=({label , onclick, index}:IInputBotao)=>{
    return(
        <>
            <button
            key={label+index}
            onClick={onclick}
            >
            {label}
            </button>
        </>
    )
}
//contagem ate 4 no amximo
interface IInputListaDeBotoes{
    Labels:string[]
    events:Array<()=>void>
}
export const ListaDeBotoes = ({Labels, events}:IInputListaDeBotoes)=>{
    function handleRETBotao(label:string,event:()=>void){
        return (
            
                <Botao
                index={Labels.indexOf(label)}
                label={label}
                onclick={event}
                />
            
        )
    }
    function handleRETListaDeBotoes(){
        return(
            <>
            {Labels.map(label=>{
              return (  handleRETBotao(label,events[Labels.indexOf(label)]))
            })}
            </>
        )
        
    }
    
    return (
        <>
            {handleRETListaDeBotoes()}
        </>
    )
}