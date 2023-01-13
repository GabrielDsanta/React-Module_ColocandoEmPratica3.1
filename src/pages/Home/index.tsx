import { StartVoting } from "../../components/StartVoting";
import { Welcome } from "../../components/Welcome";
import { ContainerHome } from "./styles";


export function Home() {
    return (
        <ContainerHome>
            <Welcome />
            <StartVoting />
        </ContainerHome>
    )
}