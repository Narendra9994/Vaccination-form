import { Fragment } from "react";
import Header from "./Components/Header/Header";
import { Redirect, Switch , Route } from 'react-router-dom'
import AddPatient from './Components/AddPatient/AddPatient'
import Administrator from "./Components/Adminstartor/Adminstartor";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';


const client = new ApolloClient({
  uri: "http://localhost:9090/gq",
  cache: new InMemoryCache()
})

function App() {
  return(
    <Fragment>
      <div className="container">
        <Header />
      </div>

      <div className="container">
        <Switch>
            <Route path='/' exact>
              <Redirect to='addpatient'/>
            </Route>
            <Route path='/addpatient'>
            <ApolloProvider client={client}>
              <AddPatient />
            </ApolloProvider>
            </Route>
            <Route path='/administrator'>
              <Administrator />
            </Route>
        </Switch>
      </div>
    </Fragment>
  )
}

export default App;