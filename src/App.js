
import routes from './Routes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from 'react-router-dom';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<div>Loading ....</div>}>
      <Router basename={process.env.PUBLIC_URL}> 
        <Switch>
          {routes.map((route,index)=>(
            <Route key={index} exact path={route.path} component={route.component} />
          ))}
        </Switch>
      </Router>
    </Suspense>
    
  );
}

export default App;
