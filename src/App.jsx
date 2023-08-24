// import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';

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
				<div>
					<h1>SKILLS</h1>
					<h2>mendapatkan soft skill dan hard skil</h2>
				</div>
				<div>
					<h1>PENGALAMAN</h1>
					<h2>mendapatkan soft skill dan hard skil</h2>
				</div>
				<div>
					<h1>RELASI</h1>
					<h2>mendapatkan soft skill dan hard skil</h2>
				</div>
				<div>
					<h1>SERTIFIKAT</h1>
					<h2>mendapatkan soft skill dan hard skil</h2>
				</div>
			</section>

			<section className="jadwal">
				<h1>JADWAL</h1>
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
				<h1>BTNG 2023</h1>
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
			<Footer />
		</div>
	);
}

export default App;
