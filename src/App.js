import {Switch,Route,Redirect} from 'react-router-dom';
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Layout>
          <Switch>
              <Route path={'/'} exact>
                  <Redirect to={'/quotes'}/>
              </Route>

              <Route path={'/quotes'} exact>

                  <AllQuotes/>
              </Route>

              <Route path={'/quotes/:quotesId'}>

                  <QuoteDetail/>
              </Route>

              <Route path={'/new-quote'}>
                  <NewQuote/>

              </Route>
              <Route path={'*'}>
                  <NotFound></NotFound>

              </Route>

          </Switch>

      </Layout>

  );
}

export default App;
