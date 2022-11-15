import React from "react";
 import { BrowserRouter, Switch, Route } from "react-router-dom";
 import Home from '../components/js files/home';
 import Header from '../components/js files/header';

 const AppRouter = () => {
   return (
     <BrowserRouter>
       <div>
        <Header/>
         <Switch>
           <Route exact path="/" component={Home}/>

         </Switch>
       </div>
     </BrowserRouter>
   );
 };

 export default AppRouter;


