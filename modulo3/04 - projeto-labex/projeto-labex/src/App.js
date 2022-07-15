import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TripDetailPage from "./pages/TripDetailsPage";


const App = () => {
  return (
    <Router>
      <div>     
        <Switch>
          <Route path="/criar/viagem">
            <CreateTripPage/>
          </Route>
          <Route path="/viagens/detalhe/">
            <TripDetailPage/>
          </Route>
          <Route path="/viagens/criar/">
            <CreateTripPage/>
          </Route>
          <Route path="/inscricao">
            <ApplicationFormPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/admin">
            <AdminHomePage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
