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
		<section className="devisi" id="divisi">
			<h1 className="title" data-aos="zoom-in" data-aos-offset="250" data-aos-duration="320">
				CHOOSE YOUR DIVISION
			</h1>
			<div className="atas">
				<div className="segment-devisi devisi-mobile" data-aos="zoom-in-down">
					<img src={mobile} alt="" />
					<div className="content">
						<h3>Divisi Mobile</h3>
						<p>Mempelajari bahasa dart dan framework flutter untuk membuat aplikasi smartphone.</p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://drive.google.com/file/d/18ZLH8ZevOyQ56S1yYUzrH6g_MHCFVhZo/view?usp=sharing"
						>
							Lihat silabus &gt;&gt;&gt;
						</a>
					</div>
					<img className="icon-divisi icon-mobile" src={iconMobile} alt="" />
				</div>
				<div className="segment-devisi devisi-web" data-aos="zoom-in-down">
					<img src={web} alt="" />
					<div className="content">
						<h3>Divisi WEB</h3>
						<p>Mempelajari HTML, CSS, Bootstrap untuk membuat sebuah web.</p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://drive.google.com/file/d/1tnxiEV-EkCYjrTd3MjJjaPlzrGhwtrm-/view?usp=sharing"
						>
							Lihat silabus &gt;&gt;&gt;
						</a>
					</div>
					<img className="icon-divisi icon-web" src={iconWeb} alt="" />
				</div>
				<div className="segment-devisi devisi-jaringan" data-aos="zoom-in-down">
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
				<div className="segment-devisi devisi-dataanalis" data-aos="zoom-in-down">
					<img src={data} alt="" />
					<div className="content">
						<h3>Divisi Data Analist</h3>
						<p>Mempelajari analisis dan riset data dengan menggunakan tools tertentu.</p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://drive.google.com/file/d/1uiDCkLHI2wL9zftfF8viYrlk4n3DXiS8/view?usp=sharing"
						>
							Lihat silabus &gt;&gt;&gt;
						</a>
					</div>
					<img className="icon-divisi icon-data" src={iconData} alt="" />
				</div>
				<div className="segment-devisi devisi-game" data-aos="zoom-in-down">
					<img src={game} alt="" />
					<div className="content">
						<h3>Divisi Game</h3>
						<p>Mempelajari pengembangan dan pengelolaan game.</p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://drive.google.com/file/d/1fuRxzBBfsgUn2JXKNKjgQWyM0ZeEIL6g/view?usp=sharing"
						>
							Lihat silabus &gt;&gt;&gt;
						</a>
					</div>
					<img className="icon-divisi icon-game" src={iconGame} alt="" />
				</div>
				<div className="segment-devisi devisi-multimedia" data-aos="zoom-in-down">
					<img src={multimedia} alt="" />
					<div className="content">
						<h3>Divisi Multimedia</h3>
						<p>Mempelajari software desain seperti Adobe Photoshop, Illustrator, dll.</p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://drive.google.com/file/d/18Uj-vDRJtAdWUTsmRizRUN5BkHe4jliA/view?usp=sharing"
						>
							Lihat silabus &gt;&gt;&gt;
						</a>
					</div>
					<img className="icon-divisi icon-multimedia" src={iconMultimedia} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Divisi;
