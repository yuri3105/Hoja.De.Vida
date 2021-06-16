// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Princi from './Pages/Princi/Princi.jsx';
import Info from './Pages/Info/Info.jsx';
import Estu from './Pages/Estu/Estu.jsx';
import Expe from './Pages/Expe/Expe.jsx';
import Habi from './Pages/Habi/Habi.jsx';

function App() {
	return(
	 <Router> 
	   <Switch>
	    <Route path="/" exact component={Princi} />
	    <Route path="/Info" exact component={Info} />
	    <Route path="/Estu" exact component={Estu} />
	    <Route path="/Expe" exact component={Expe} />
	    <Route path="/Habi" exact component={Habi} />
	   </Switch>
	  </Router>   
    );
}
 
export default App;
