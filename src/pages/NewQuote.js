import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
    const quoteHandler = (userData) => {
        console.log(userData);
    };
    return <QuoteForm onAddQuote={quoteHandler} >  </QuoteForm>;

};
export default NewQuote;