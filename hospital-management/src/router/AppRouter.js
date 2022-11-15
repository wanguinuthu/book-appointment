import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import CreateUser from "../components/createusers";
import Appointment from "../components/js files/appointment";
import Header from "../components/js files/header";
import BookAppointments from "../components/js files/bookappointment";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component ={Appointment}/>
          <Route path = "/bookappointment" component={BookAppointments}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
