import './App.css'
import { ListaDeBotoes } from './componentes/botao'
import {  useState } from 'react'
import { EscolhaSeuPersonagem } from './componentes/SelecionarPersonagem'
import { Personagem, Professores } from './Personagem'
import { Batalha } from './componentes/batalha'


const BotoesSTR : Array<string>= ["personagem","batalha"]
export const App=()=>{


  const[hideOnInicio,setHideOnInicio]=useState(true);
  const[hideOnPersonagens,setHideOnPersonagens]=useState(false);
  const[hideOnBatalha,setHideOnBatalha]=useState(false);

  
  const[Personagens,setPersonagens]=useState(Professores);


  const handleAtualizarProfessores=(professorSelecionado:Personagem)=>{
    const professorEncontrado : Personagem []=Personagens.filter(professor=>professor==professorSelecionado);
    if(professorEncontrado[0]){
      professorEncontrado[0];
      const professor=professorEncontrado[0];
      const professoresAtualizados=Personagens.map((p)=>{
      if(p==professor){
        return professor
      }
      return p
    })
      if(!professoresAtualizados){
        console.log('professor nao encontrado.')
        return Professores
      }
     setPersonagens(professoresAtualizados)
     return professoresAtualizados;

  }
}
  
  return (
    <>
    <h1>
      Batalha No ifpi
    </h1>
    {hideOnInicio?
    <ListaDeBotoes
    Labels={BotoesSTR}
    events={[()=>{setHideOnPersonagens(true),setHideOnInicio(false)},()=>{setHideOnBatalha(true),setHideOnInicio(false)}]}
    />
    :
    <></>
    }
    {hideOnPersonagens?
    <EscolhaSeuPersonagem
    onVoltar={()=>{setHideOnInicio(true),setHideOnPersonagens(false)}}
    personagens={Professores}
    onSelecionar={(professor:Personagem)=>{handleAtualizarProfessores(professor)}}
    />
    :
    <></>
    }
    {hideOnBatalha?
    <Batalha
    Onvoltar={()=>{setHideOnInicio(true),setHideOnBatalha(false)}}
    />
    :
    <></>
    }
    </>
  )
}
