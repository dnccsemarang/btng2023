// import { useState } from 'react';
import Navbar from './components/Navbar';
import PixelBtn from './components/PixelBtn';
import Footer from './components/footer';

function App() {
	return (
		<div className="container">
			<Navbar />
			<div className="title">
				<h1>BTNG 2023</h1>
				<h2>time to lavel up !</h2>
				<PixelBtn />
			</div>
			<div className="about">
				<p>
					BTNG (Basic Training Next Generation) adalah acara DNCC sebagai gerbang awal bagi mahasiswa yang ingin menjadi
					anggota di UKM DNCC. Acara ini bertujuan untuk memberikan pelatihan kepada calon anggota baru agar memiliki
					pengetahuan yang unggul dalam divisi yang dipilih.
				</p>
			</div>
			<div className="benefit">
				<h1>BENEFIT</h1>
				<div>
					<h1>SKILS</h1>
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
				<div className="jadwal">
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
				</div>
				<div className="devisi">
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
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
