// import { useState } from 'react';
import Navbar from './components/Navbar';
import Divisi from './components/Divisi';
import Footer from './components/Footer/Footer';
import { useTypewriter } from 'react-simple-typewriter';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		Aos.init({ duration: 2000, 
					easing: 'ease-in-sine' })
	}, []);
	const [typeEffect] = useTypewriter({
		words: ["BTNG (Basic Training Next Generation) adalah acara DNCC sebagai gerbang awal bagi mahasiswa yang ingin menjadi anggota di UKM DNCC. Acara ini bertujuan untuk memberikan pelatihan kepada calon anggota baru agar memiliki pengetahuan yang unggul dalam divisi yang dipilih."],
		loop: 1,
		typeSpeed: 50,
	})
	return (
		<div className="container">
			<Navbar />
			<section className="hero">
				<div className="hero-content">
					<div className="cloud-wrapper-right">
						<i alt="Cloud & energy" className="cloud-energy-right" data-aos="slide-left"></i>
					</div>
					<h1 className="hero-title" data-aos="zoom-out ease-in-out">BTNG 2023</h1>
					<div className="cloud-wrapper-left">
						<i alt="Cloud & energy" className="cloud-energy-left" data-aos="slide-right"></i>
					</div>
					<h3 className="hero-subtitle" data-aos="zoom-in">Time to level up!</h3>
					<div className="pixel-corners--wrapper" data-aos="zoom-in">
						<div className="pixel-corners">
							<h1 className="text-button">start</h1>
						</div>
					</div>
					<div className="item-hero-bot">
						<i alt="Rumput" className="rumput-left" data-aos="slide-right"></i>
						<i alt="Diamond" className="diamond" data-aos="fade-in"></i>
						<i alt="Rumput" className="rumput-right" data-aos="slide-left"></i>
					</div>
				</div>
			</section>

			<section className="about">
				<h1 className="title with-arrows" data-aos="zoom-in">About BTNG</h1>
				<div className="nes-balloon balloon" data-aos="fade-in">
					<p style={{ textAlign: 'justify' }}>
						{typeEffect}
					</p>
					<div className="bubble-buttom"></div>
				</div>
				<div className="item-about">
					<i alt="Pink Flower" className="flower-left" data-aos="zoom-in"></i>
					<i alt="Character About" className="character-center" data-aos="zoom-in"></i>
					<i alt="Pink Flower" className="flower-right" data-aos="zoom-in"></i>
				</div>
			</section>
			<section className="benefit">
				<div className="title-container">
					<div className="title-item">
						<i className="nes-icon is-medium star"></i>
						<i className="nes-icon is-medium star"></i>
					</div>
					<h1 className="title">benefit</h1>
					<div className="title-item">
						<i className="nes-icon is-medium star"></i>
						<i className="nes-icon is-medium star"></i>
					</div>
				</div>
				<div className="benefit-content">
					<div className="benefit-item">
						<h1 className="benefit-title">
							<i className="nes-icon is-medium like"></i>
							<span>skill</span>
						</h1>
						<h2>Mendapatkan softskill dan hardskill</h2>
					</div>
					<div className="benefit-item">
						<h1 className="benefit-title">
							<i className="nes-icon is-medium like"></i>
							<span>pengalaman</span>
						</h1>
						<h2>Mendapatkan pengalaman belajar bersama</h2>
					</div>
					<div className="benefit-item">
						<h1 className="benefit-title">
							<i className="nes-icon is-medium like"></i>
							<span>relasi</span>
						</h1>
						<h2>Menambah relasi antar peserta dan mentor</h2>
					</div>
					<div className="benefit-item">
						<h1 className="benefit-title">
							<i className="nes-icon is-medium like"></i>
							<span>sertifikat</span>
						</h1>
						<h2>Mendapatkan sertifikat hasil pelatihan</h2>
					</div>
				</div>
			</section>

			<section className="jadwal">
				<h1 className="title">jadwal</h1>

				<ul>
					<li>
						<p>Pendaftaran : Jumat, 8 September - Jumat, 22 September</p>
					</li>
					<li>
						<p>Opening : Sabtu, 23 September 2023</p>
					</li>
					<li>
						<p>Pelatihan : Senin, 25 September - Jumat, 27 Oktober 2023 (4 Pertemuan)</p>
					</li>
					<li>
						<p>Penutupan : Sabtu, 28 Oktober 2023</p>
					</li>
				</ul>
			</section>
			<Divisi />
			<Footer />
		</div>
	);
}

export default App;
