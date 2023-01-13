import { useEffect, useState } from "react";
import { ItemQuote, QuoteListData } from "../../components/ItemQuote";
import { Quote } from "../../components/Quote";
import { Vote } from "../../components/Vote";
import { Welcome } from "../../components/Welcome";
import { ContainerHome } from "./styles";



export function Home() {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false)
    const [quoteList, setQuoteList] = useState<QuoteListData[]>([])
    const [quoteRate, setQuoteRate] = useState('')

    function handleVoteQuote(){
        const newQuote: QuoteListData = {
            quoteOwner: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi animi minus.",
            quoteRate: quoteRate,
            quoteTextContent: "Lorem, Lorem"
        }

        setQuoteList((state) => [...state, newQuote])
        setQuoteRate('')
    }

    useEffect(() => {
        const orderQuoteList = quoteList.sort(function(a, b): number | boolean{
            if(a.quoteRate > b.quoteRate){
                return -1
            }
            else{
                return true
            }
        })

        setQuoteList(orderQuoteList)
    }, [quoteList])

    return (
        <ContainerHome>
            <Welcome onClick={() => setIsQuoteOpen(!isQuoteOpen)} />

            {isQuoteOpen && (
                <Quote />
            )}

            <Vote 
                onClick={handleVoteQuote} 
                rate={quoteRate}
                callSetRate={setQuoteRate}
            />

            {quoteList.map((item: QuoteListData) => {
                return(
                    <ItemQuote
                        quoteOwner={item.quoteOwner}
                        quoteRate={item.quoteRate}
                        quoteTextContent={item.quoteTextContent}
                        key={item.quoteOwner + item.quoteTextContent}
                    />
                )
            })}
        </ContainerHome>
    )
}