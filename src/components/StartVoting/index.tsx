import { ContainerStartVoting } from "./styles";


export function StartVoting(){
    return(
        <ContainerStartVoting>
            <h1>Dados</h1>
            <input placeholder="Nome Da Serie" type="text" />
            <input placeholder="Nome Do Personagem" type="text" />
            <input placeholder="Uma Citação" type="text" />
            <button>Enviar</button>
        </ContainerStartVoting>
    )
}