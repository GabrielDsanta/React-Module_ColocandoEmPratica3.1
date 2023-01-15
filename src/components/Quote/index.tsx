import { ContainerQuote } from "./styles";

export interface QuoteProps {
    anime?: string
    character?: string
    quote?: string
}


export function Quote({ anime, character, quote }: QuoteProps){
    return(
        <ContainerQuote>
            <h3>{quote}</h3>

            <h4>{character}, {anime}</h4>
        </ContainerQuote>
    )
}