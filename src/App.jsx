import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Divisi from './components/Body/Devisi/Divisi';
import Hero from './components/Body/Hero/Hero';
import About from './components/Body/About/About';
import Benefit from './components/Body/Benefit/Benefit';
import Footer from './components/Footer/Footer';
import Jadwal from './components/Body/Jadwal/Jadwal';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);

	return (
		<div className="container">
			<Navbar />
			<Hero />
			<About />
			<Benefit />
			<Jadwal />
			<Divisi />
			<Footer />
		</div>
	);
}

export default App;
