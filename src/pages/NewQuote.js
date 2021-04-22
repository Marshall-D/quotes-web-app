import QuoteForm from "../components/quotes/QuoteForm";
import {useHistory} from 'react-router-dom';

const NewQuote = () => {
    const history = useHistory();
    const quoteHandler = (userData) => {
        console.log(userData);

        history.push('/quotes');

    };
    return <QuoteForm onAddQuote={quoteHandler} >  </QuoteForm>;

};
export default NewQuote;