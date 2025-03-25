import './App.css';
import { array1, array2 } from './assets';
import FoodProcess from './components/FoodProcess';
import LandingSection from './components/LandingSection';
import PictureLine from './components/PictureLine';

function App() {
	return (
		<>
			<LandingSection />
			<FoodProcess />
			<PictureLine pictures={array1} />
			<PictureLine pictures={array2} />
		</>
	);
}

export default App;
