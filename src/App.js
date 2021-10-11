import { Box } from '@material-ui/core';
import Home from './site/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './site/Login';
import Register from './site/Register';
import Reset from './site/Reset';
import Verify from './site/Verify'

const App = (props) => {
  return (
    <Box component='div'>
      <Router history={props.history}>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/login'><Login/></Route>
          <Route path='/register'><Register/></Route>
          <Route path='/reset'><Reset/></Route>
          <Route path='/verify'><Verify/></Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;