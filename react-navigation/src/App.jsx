import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import NavBar from './components/NavBar';
// import Error from './components/Error';

function App() {
	return (
    <>
			<NavBar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/about" element={<About />} />
					{/* <Route path="*" element={<Error />} /> */}
				</Routes>
			</BrowserRouter>
    </>

	);
}

export default App;
