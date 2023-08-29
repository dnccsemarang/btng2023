// import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Divisi from './components/Divisi';



function App() {
	return (
		<div className="container">
			<Navbar />
			<section className="hero">
				<div className="hero-content">
					<h1 className="hero-title">BTNG 2023</h1>
					<h3 className="hero-subtitle">Time to level up!</h3>
					<div className="pixel-corners--wrapper">
						<div className="pixel-corners">
							<h1 className="text-button">start</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="about">
				<h1 className="title">About BTNG</h1>
				<div className="nes-balloon from-right balloon">
					<p>
						BTNG (Basic Training Next Generation) adalah acara DNCC sebagai gerbang awal bagi mahasiswa yang ingin
						menjadi anggota di UKM DNCC. Acara ini bertujuan untuk memberikan pelatihan kepada calon anggota baru agar
						memiliki pengetahuan yang unggul dalam divisi yang dipilih.
					</p>
				</div>
				<div className="item">
					<i className="nes-kirby"></i>
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
				<h1 className="title">CHOOSE YOUR DIVISION</h1>
			</section>
			<Divisi />
			<Footer />
		</div>
	);
}

export default App;
