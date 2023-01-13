import { ContainerMessage } from "./styles";

interface WelcomeProps {
    onClick: ()=> void
}

export function Welcome({ onClick }: WelcomeProps){
    return(
        <ContainerMessage>
            <h1>Boas vindas usuário</h1>
            <button onClick={onClick}>Iniciar Votação</button>
        </ContainerMessage>
    )
}