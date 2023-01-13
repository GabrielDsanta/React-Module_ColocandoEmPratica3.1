import { ContainerQuote } from "../Quote/styles"


export interface QuoteListData {
    quoteTextContent: string
    quoteOwner: string
    quoteRate: string
}

export function ItemQuote({ quoteTextContent, quoteOwner, quoteRate }: QuoteListData){
    return(
        <ContainerQuote>
            <h3>{quoteTextContent}</h3>

            <h4>{quoteOwner}</h4>

            <h1>Nota {quoteRate}</h1>
        </ContainerQuote>
    )
}