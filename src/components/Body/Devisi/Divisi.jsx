import mobile from '../../../assets/mobile.svg';
import web from '../../../assets/web.svg';
import jaringan from '../../../assets/jaringan.svg';
import data from '../../../assets/data.svg';
import game from '../../../assets/game.svg';
import multimedia from '../../../assets/multimedia.svg';

import iconMobile from '../../../assets/icon-divisi/icon-mobile.svg';
import iconWeb from '../../../assets/icon-divisi/icon-web.svg';
import iconJaringan from '../../../assets/icon-divisi/icon-jaringan.svg';
import iconData from '../../../assets/icon-divisi/icon-data.svg';
import iconGame from '../../../assets/icon-divisi/icon-game.svg';
import iconMultimedia from '../../../assets/icon-divisi/icon-multimedia.svg';

const Divisi = () => {
	return (
		<section className="devisi">
			<h1 className="title">CHOOSE YOUR DIVISION</h1>
			<div className="atas">
				<div className="segment-devisi devisi-mobile">
					<img src={mobile} alt="" />
					<div className="content">
						<h3>Divisi Mobile</h3>
						<p>Mempelajari bahasa dart dan framework flutter untuk membuat aplikasi smartphone.</p>
						<a href="">Lihat silabus &gt;&gt;&gt;</a>
					</div>
					<img className="icon-divisi icon-mobile" src={iconMobile} alt="" />
				</div>
				<div className="segment-devisi devisi-web">
					<img src={web} alt="" />
					<div className="content">
						<h3>Divisi WEB</h3>
						<p>Mempelajari HTML, CSS, Bootstrap untuk membuat sebuah web.</p>
						<a href="">Lihat silabus &gt;&gt;&gt;</a>
					</div>
					<img className="icon-divisi icon-web" src={iconWeb} alt="" />
				</div>
				<div className="segment-devisi devisi-jaringan">
					<img src={jaringan} alt="" />
					<div className="content">
						<h3>Divisi Jaringan</h3>
						<p>Mempelajari Cisco, Paket Tracer, dll. untuk menghubungkan beberapa komputer.</p>
						<a href="">Lihat silabus &gt;&gt;&gt;</a>
					</div>
					<img className="icon-divisi icon-jaringan" src={iconJaringan} alt="" />
				</div>
			</div>
			<div className="bawah">
				<div className="segment-devisi devisi-dataanalis">
					<img src={data} alt="" />
					<div className="content">
						<h3>Divisi Data Analist</h3>
						<p>Mempelajari analisis dan riset data dengan menggunakan tools tertentu.</p>
						<a href="">Lihat silabus &gt;&gt;&gt;</a>
					</div>
					<img className="icon-divisi icon-data" src={iconData} alt="" />
				</div>
				<div className="segment-devisi devisi-game">
					<img src={game} alt="" />
					<div className="content">
						<h3>Divisi Game</h3>
						<p>Mempelajari pengembangan dan pengelolaan game.</p>
						<a href="">Lihat silabus &gt;&gt;&gt;</a>
					</div>
					<img className="icon-divisi icon-game" src={iconGame} alt="" />
				</div>
				<div className="segment-devisi devisi-multimedia">
					<img src={multimedia} alt="" />
					<div className="content">
						<h3>Divisi Multimedia</h3>
						<p>Mempelajari software desain seperti Adobe Photoshop, Illustrator, dll.</p>
						<a href="">Lihat silabus &gt;&gt;&gt;</a>
					</div>
					<img className="icon-divisi icon-multimedia" src={iconMultimedia} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Divisi;
