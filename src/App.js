import React from 'react';
import { Button } from 'antd'
import 'antd/dist/antd.css';

import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'

import { BrowserRouter,Route,Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/admin" component={Admin} />
            </Switch> 
        </BrowserRouter> 
    </div>
  );
}

export default App;
