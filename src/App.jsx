import { useState } from 'react';
import Navbar from './components/Navbar';
import Divisi from './components/Divisi';
import Hero from './components/Body/Hero/Hero';
import About from './components/Body/About/About';
import Benefit from './components/Body/Benefit/Benefit';
import Footer from './components/Footer/Footer';
import Jadwal from './components/jadwal';

import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		Aos.init({ duration: 2000 })
	}, []);

	return (
		<div className="container">
			<Navbar />
			<Hero/>
			<About/>
			<Benefit/>
			<Jadwal/>
			<Divisi />
			<Footer />
		</div>
	);
}

export default App;
