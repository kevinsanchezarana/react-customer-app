import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';


const renderHome = () => <h1>Home</h1>;
const renderCustomerContainer = () => <h1>Customers Container</h1>;
const renderCustomerListContainer = () => <h1>Customers List Container</h1>;
const renderCustomerNewContainer = () => <h1>Customers New Container</h1>;

function App() {

  return (
    <Router>
      <div className="App">
        {/* <Link to="customers">Customers</Link> */}
        {/* El componente Route inyecta tres propiedades si el atributo component es un componente pero no si es una funcion. */}
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/customers" component={CustomersContainer}/>
        {/* Todo lo que esta dentro de switch busca si la ruta coincide exactamente y si es asi lanza ese componente y no continua evaluando */}
        <Switch>
          <Route path="/customers/new" component={renderCustomerNewContainer}/>
          <Route path="/customers/:dni" render={ props => <CustomerContainer dni={props.match.params.dni} /> }/>
          {/* Pasar resto de propiedades inyectadas si queremos <Route exact path="/customers/:dni" render={ props => <CustomerContainer {...props} dni={props.match.params.dni}/> }/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
