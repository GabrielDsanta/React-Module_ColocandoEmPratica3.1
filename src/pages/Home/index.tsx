import axios from "axios";
import { useEffect, useState } from "react";
import { ItemQuote, QuoteListData } from "../../components/ItemQuote";
import { LoginExample } from "../../components/LoginExample";
import { Quote, QuoteProps } from "../../components/Quote";
import { Vote } from "../../components/Vote";
import { Welcome } from "../../components/Welcome";
import { ContainerHome } from "./styles";



export function Home() {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false)
    const [quoteList, setQuoteList] = useState<QuoteListData[]>([])
    const [quoteRate, setQuoteRate] = useState('')
    const [newQuote, setNewQuote] = useState<QuoteProps>({})

    function handleVoteQuote(){
        const newItemQuotList: QuoteListData = {
            quoteOwner: newQuote.character!,
            quoteTextContent: newQuote.quote!,
            rate: quoteRate
        }

        setQuoteList((state) => [...state, newItemQuotList])
        setQuoteRate('')
    }

    async function getApi(){
        const res = await axios.get('https://animechan.vercel.app/api/random')

        const newQuote: QuoteProps = {
            anime: res.data.anime,
            character: res.data.character,            
            quote: res.data.quote
        }

        setNewQuote(newQuote)
    }

    useEffect(() => {
        getApi()
        const orderQuoteList = quoteList.sort(function(a, b): any{
            if(a.rate < b.rate){
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
            <LoginExample />
            <Welcome onClick={() => setIsQuoteOpen(!isQuoteOpen)} />

            {isQuoteOpen && (
                <Quote 
                    anime={newQuote.anime}
                    character={newQuote.character}
                    key={newQuote.anime + newQuote.character! + newQuote.quote}
                    quote={newQuote.quote}
                />
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
                        rate={item.rate}
                        quoteTextContent={item.quoteTextContent}
                        key={item.quoteOwner + item.quoteTextContent}
                    />
                )
            })}
        </ContainerHome>
    )
}