



interface IInputBotao{
    label:string
    onclick:()=>void
}
export const Botao=({label , onclick}:IInputBotao)=>{
    return(
        <>
            <button
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
                label={label}
                onclick={event}
                />
            
        )
    }
    function handleRETListaDeBotoes(){
        return(
            <>
            {Labels.map(label=>{
                handleRETBotao(label,events[Labels.indexOf(label)])
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