import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES =[
    {id:'d1', author:'D1', text:'learning React is Fun'},
    {id:'d2', author:'David', text:'Making money is vital'}

    ];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}> All Quotes Page </QuoteList>;


};
export default AllQuotes;