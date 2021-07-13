import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Nav from './components/Nav'

import Home from './Pages/Home'
import Create from './Pages/Create'
import SinglePost from './Pages/SinglePost'
import Login from './Pages/Login'
 
import './App.css';


function App() {


   return (
     <div className="App">
       <h2>App</h2>
    
       <BrowserRouter>
        <Nav />
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/create" exact component={Create}/>
         <Route path= "/login" exact component={Login} />
         <Route path="/:id" exact component={SinglePost} />
    
       </Switch>
       </BrowserRouter>
     </div>
   )
}

export default App;
