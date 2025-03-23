import './landing.css';
import myPicture from './../assets/burger_icon.png';

function LandingSection() {
	return (
		<header className="landing">
			<nav className="landing-nav">
				<div className="logo">
					<span>JaanRestaurant</span>
					<img src={myPicture} alt="" />
				</div>
				<span className="nav-item" id="home">
					Home
				</span>
				<span className="nav-item">About</span>
				<span className="nav-item">Menu</span>
				<span className="nav-item">Contact</span>
				<span className="nav-item">Testimonies</span>
				<span className="nav-item">Blogs</span>
				<input type="text" />
			</nav>
			<div className="main">
				<h1>For the Love of delicious food</h1>
				<h3>Up to 15% discount</h3>
				<p>
					Don't miss out on this mouthwatering deal! Indulge in your favorite
					dishes with a sizzling 15% discount. From Pizzas to burger, with
					pasta, your satisfaction is our priority
				</p>
        <div className="buttons">
          <button className="primary">Learn More</button>
          <button className="secondary">Order Now</button>
        </div>
			</div>
		</header>
	);
}

export default LandingSection;
