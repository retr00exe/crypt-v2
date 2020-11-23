import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hash from './components/Body/Hash/Hash';
import Encoding from './components/Body/Encoding/Encoding';
import Cipher from './components/Body/Cipher/Cipher';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Hash}/>
        <Route path="/encoding" exact component={Encoding}/>
        <Route path="/cipher" exact component={Cipher}/>
      </Switch>
      <Footer />
    </Router>
      
  );
}

export default App;
