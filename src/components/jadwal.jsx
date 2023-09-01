import { styled } from 'styled-components';
import gambar from '../assets/image25.png';
import jamur from '../assets/jamur.png';
import ufo from '../assets/ufo.png';
import charJadwal from '../assets/char-jadwal.png';

const Jadwal = () => {
	return (
		<>
			<Gambar1>
				<JadwalGambar>
					<JamurIMG src={jamur} alt="" />
					<Title>JADWAL</Title>
				</JadwalGambar>
				<TanahImg src={gambar} alt="" />
			</Gambar1>
			<Jadwalwrap>
				<img className="img-ufo" src={ufo} alt="" />
				<img className="img-char-jadwal" src={charJadwal} alt="" />
				<div className="pixel-corners--wrapperr">
					<div className="pixel-cornerss">
						<Pixel>
							<li className="pixelcorner">
								<Text>Pendaftaran : Jumat, 8 September - Jumat, 22 September</Text>
							</li>
							<li className="pixelcorner">
								<Text>Opening : Sabtu, 23 September 2023</Text>
							</li>
							<li className="pixelcorner">
								<Text>Pelatihan : Senin, 25 September - Jumat, 27 Oktober 2023 (4 Pertemuan)</Text>
							</li>
							<li className="pixelcorner">
								<Text>Penutupan : Sabtu, 28 Oktober 2023</Text>
							</li>
						</Pixel>
					</div>
				</div>
			</Jadwalwrap>
			<Gambar2>
				<div>
					<Title>BTNG 2023</Title>
					<JamurImg src={jamur} alt="" />
				</div>
				<TanahIMG src={gambar} alt="" />
			</Gambar2>
		</>
	);
};

const JadwalGambar = styled.div`
	/* float: left; */
`;

const Gambar1 = styled.div`
	/* margin-left: 0 !important;
	margin-right: 0 !important; */
`;

const JamurIMG = styled.img`
	@media screen and (min-width: 320px) {
		width: 49px;
		height: 37px;
	}
	@media screen and (min-width: 600px) {
		width: 144px;
		height: 110px;
	}
`;

const TanahImg = styled.img`
	@media screen and (min-width: 320px) {
		width: 203px;
		height: 29px;
	}
	@media screen and (min-width: 600px) {
		width: 591px;
		height: 93px;
	}
`;

const Title = styled.span`
	/* background-color: red; */
	color: #fff;
	text-align: center;
	text-shadow: 0px 4px 0px #000;
	filter: drop-shadow(2px 2px #000);
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: black;
	font-family: ArcadeClassic;
	font-size: 6vw;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	@media screen and (max-width: 320px) {
		font-size: 20vw;
		text-shadow: 0px 1px 0px #000;
		filter: drop-shadow(1px 1px #000);
	}
	@media screen and (max-width: 600px) {
		font-size: 8vw;
		text-shadow: 0px 2px 0px #000;
		filter: drop-shadow(2px 2px #000);
	}
	/* @media screen and (min-width: 320px) { */
	/* color: #fff;
		text-align: center;
		text-shadow: 0px 4px 0px #000;
		filter: drop-shadow(2px 2px #000);
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
		font-family: ArcadeClassic;
		font-size: 40px;
		font-style: normal;
		font-weight: 400;
		line-height: normal; */
	/* margin-bottom: 40px; */
	/* } */
	/* @media screen and (min-width: 600px) {
		color: #fff;
		text-align: center;
		text-shadow: 0px 4px 0px #000;
		filter: drop-shadow(2px 2px #000);
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
		font-family: ArcadeClassic;
		font-size: 88px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		/* margin-bottom: 40px; */
	/* } */
`;

const Pixel = styled.ul`
	/* flex-direction: row; */
	/* align-items: center; */
	/* padding: 30px; */
	/* background-color: red; */
	padding: 1vw;
	padding-inline: 2vw;
`;

const JamurImg = styled.img`
	transform: scaleX(-1);
	@media screen and (min-width: 320px) {
		width: 49px;
		height: 37px;
	}
	@media screen and (min-width: 600px) {
		width: 144px;
		height: 110px;
	}
`;

const TanahIMG = styled.img`
	transform: scaleX(-1);
	@media screen and (min-width: 320px) {
		width: 203px;
		height: 29px;
	}
	@media screen and (min-width: 600px) {
		width: 591px;
		height: 93px;
	}
`;

const Gambar2 = styled.div`
	display: grid;
	justify-items: end; /* Atau 'right' */
`;

const Text = styled.div`
	padding: 10px;
	font-size: 4vw;
	font-family: VT323;
	/* margin: 20px; */
	/* background-color: #0074da; */
	@media screen and (min-width: 320px) {
		/* font-size: 14px; */
		margin: 10px;
	}
	@media screen and (min-width: 600px) {
		/* font-size: 32px; */
		font-size: 3vw;
		margin: 20px;
	}
`;

const Jadwalwrap = styled.div`
	position: relative;
	/* margin: auto; */
	/* max-width: 1200px; */
	/* margin-inline: 10vw; */
	margin-inline: 6vw;

	/* @media screen and (max-width: 600px) {
		margin-inline: 6vw;
	} */
`;
export default Jadwal;
