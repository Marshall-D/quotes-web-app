import {useParams, Route, Link, useRouteMatch} from 'react-router-dom';
import {Fragment} from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES =[
    {id:'d1', author:'D1', text:'learning React is Fun'},
    {id:'d2', author:'David', text:'Making money is vital'}

];


const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    console.log(match);

    const quote = DUMMY_QUOTES.find((quote) => { return quote.id === params.quotesId});
    if (!quote){
        return <p>No quotes found bitch</p>
    };

    return <Fragment>
        <HighlightedQuote author={quote.author} text={quote.text}></HighlightedQuote>
        <Route path={`/quotes/${params.quotesId}`} exact>
            <div className={'centered'}>
                <Link
                    className={'btn--flat'}
                    to={`/quotes/${params.quotesId}/comments`}>
                    Load Comments
                </Link>
            </div>
        </Route>
        <Route path={`/quotes/${params.quotesId}/comments`}>
            <Comments/>

        </Route>


    </Fragment>
};
export default QuoteDetail;