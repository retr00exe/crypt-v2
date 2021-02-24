import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NavbarWrapper as Navbar } from './components/Navbar/Navbar';
import { FooterWrapper as Footer } from './components/Footer/Footer';
import Hash from './components/Body/Hash/Hash';
import Cipher from './components/Body/Cipher/Cipher';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Hash} />
				{/* <Route path="/encoding" exact component={Encoding} /> */}
				<Route path="/cipher" exact component={Cipher} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
