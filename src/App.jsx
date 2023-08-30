// import { useState } from 'react';
import Navbar from './components/Navbar';
import Divisi from './components/Divisi';
import Footer from './components/Footer/Footer';
import Jadwal from './components/Jadwal';

function App() {
	return (
		<div className="container">
			<Navbar />
			<section className="hero">
				<div className="hero-content">
					<div className="cloud-wrapper-right">
						<i alt="Cloud & energy" className="cloud-energy-right"></i>
					</div>
					<h1 className="hero-title">BTNG 2023</h1>
					<div className="cloud-wrapper-left">
						<i alt="Cloud & energy" className="cloud-energy-left"></i>
					</div>
					<h3 className="hero-subtitle">Time to level up!</h3>
					<div className="pixel-corners--wrapper">
						<div className="pixel-corners">
							<h1 className="text-button">start</h1>
						</div>
					</div>
					<div className="item-hero-bot">
						<i alt="Rumput" className="rumput-left"></i>
						<i alt="Diamond" className="diamond"></i>
						<i alt="Rumput" className="rumput-right"></i>
					</div>
				</div>
			</section>

			<section className="about">
				<h1 className="title with-arrows">About BTNG</h1>
				<div className="nes-balloon balloon">
					<p>
						BTNG (Basic Training Next Generation) adalah acara DNCC sebagai gerbang awal bagi mahasiswa yang ingin
						menjadi anggota di UKM DNCC. Acara ini bertujuan untuk memberikan pelatihan kepada calon anggota baru agar
						memiliki pengetahuan yang unggul dalam divisi yang dipilih.
					</p>
					<div className="bubble-buttom"></div>
				</div>
				<div className="item-about">
					<i alt="Pink Flower" className="flower-left"></i>
					<i alt="Character About" className="character-center"></i>
					<i alt="Pink Flower" className="flower-right"></i>
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
				<Jadwal />
			</section>
			<section className="devisi">
				<div className="devisi-mobil">
					<h3>Devisi Mobile</h3>
					<p>Mempelajari bahasa dart dan framework flutter untuk membuat aplikasi smartphone.</p>
					<a href="">lihat silabus</a>
				</div>
				<div className="devisi-web">
					<h3>Devisi WEB</h3>
					<p>Mempelajari HTML, CSS, Bootstrap untuk membuat sebuah web.</p>
					<a href="">lihat silabus</a>
				</div>
				<div className="devisi-jaringan">
					<h3>Devisi Jarinagan</h3>
					<p>Mempelajari Cisco, Paket Tracer, dll. untuk menghubungkan beberapa komputer.</p>
					<a href="">lihat silabus</a>
				</div>
				<div className="devisi-dataanalis">
					<h3>Devisi Data Analist</h3>
					<p>Mempelajari analisis dan riset data dengan menggunakan tools tertentu.</p>
					<a href="">lihat silabus</a>
				</div>
				<div className="devisi-game">
					<h3>Devisi Game</h3>
					<p>Mempelajari pengembangan dan pengelolaan game.</p>
					<a href="">lihat silabus</a>
				</div>
				<div className="devisi-multimedia">
					<h3>Devisi Multimedia</h3>
					<p>Mempelajari software desain seperti Adobe Photoshop, Illustrator, dll.</p>
					<a href="">lihat silabus</a>
				</div>
			</section>
			<Divisi />
			<Footer />
		</div>
	);
}

export default App;
