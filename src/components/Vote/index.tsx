import { ChangeEvent } from "react";
import { ContainerVote } from "./styles";

interface VoteProps {
    onClick: ()=> void
    callSetRate: (e: string)=> void
    rate: string
}

export function Vote({ onClick, rate, callSetRate }: VoteProps){

    return(
        <ContainerVote>
            <input 
                placeholder="Digite Sua Nota" 
                type="text" 
                onChange={(e: ChangeEvent<HTMLInputElement>) => callSetRate(e.target.value)}
                value={rate}
            />
            <button onClick={onClick}>Enviar</button>
        </ContainerVote>
    )
}