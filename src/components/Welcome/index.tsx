import { ContainerMessage } from "./styles";


export function Welcome(){
    return(
        <ContainerMessage>
            <h1>Boas vindas usuário</h1>
            <button>Iniciar Votação</button>
        </ContainerMessage>
    )
}