import { ContainerQuote } from "../Quote/styles"


export interface QuoteListData {
    quoteTextContent: string
    quoteOwner: string
    rate: string
}

export function ItemQuote({ quoteTextContent, quoteOwner, rate }: QuoteListData){
    return(
        <ContainerQuote>
            <h3>{quoteTextContent}</h3>

            <h4>{quoteOwner}</h4>

            <h1>Nota {rate}</h1>
        </ContainerQuote>
    )
}