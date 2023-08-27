import React from "react";
import udinus from "../../assets/FooterAssets/udinus.png";
import leftArrow from "../../assets/FooterAssets/left-arrow.svg";
import rightArrow from "../../assets/FooterAssets/right-arrow.svg";
import pipeGrass from "../../assets/FooterAssets/grass-pipe.png";
import footerBackground from "../../assets/FooterAssets/footer-bg.png"
import './Footer.css'
const Footer = () => {
	return (
		<footer>
			<div className="footer-title">
				<div className="footer-title-content">
					<span>press daftar to enter btng 2023</span>
				</div>
			</div>
			<div className="footer-content">
				<div className="register-btn-part">
					<div className="pipe-grass">
						<img src={pipeGrass} alt="" className="pipe-grass-img pipe-grass-left" />
					</div>
					<img src={rightArrow} className="arrow arrow-left" alt="" />
					<div className="daftar-btn-container">
						<a href="" className="daftar-btn-item">
							<div className="pixel-corners--wrapper">
								<div className="pixel-corners">
									<h1 className="daftar-button">DAFTAR</h1>
								</div>
							</div>
						</a>
					</div>
					<img src={leftArrow} className="arrow arrow-right" alt="" />
					<div className="pipe-grass">
						<img src={pipeGrass} alt="" className="pipe-grass-img pipe-grass-right" />
					</div>
				</div>
				<div className="footer-more-info-container">
					<div className="media-partner-part">
						<span className="part-title">media partner</span>
						<div className="media-partner-content">
							<div className="pixel-corners partner-logo-item">
								<img src={udinus} alt="" className="partner-logo" />
							</div>
							<div className="pixel-corners partner-logo-item">
								<img src={udinus} alt="" className="partner-logo" />
							</div>
							<div className="pixel-corners partner-logo-item">
								<img src={udinus} alt="" className="partner-logo" />
							</div>
						</div>
					</div>
					<div className="social-media-part">
						<span className="part-title">social media</span>
						<div className="social-media-content">
							<div className="social-media-container">
								<table>
									<tr>
										<td>Web</td>
										<td>dnccudinus.org</td>
									</tr>
									<tr>
										<td>Instagram</td>
										<td>dnccsemarang</td>
									</tr>
									<tr>
										<td>Tiktok</td>
										<td>dnccsemarang</td>
									</tr>
									<tr>
										<td>Youtube</td>
										<td>DNCC</td>
									</tr>
									<tr>
										<td>Discord</td>
										<td>discorddncc</td>
									</tr>
									<tr>
										<td>Telegram</td>
										<td>dncc_official</td>
									</tr>
								</table>
							</div>

						</div>
					</div>
					<div className="contact-person-part">
						<span className="part-title">contact person</span>
						<div className="contact-person-content">
							<ul>
								<li>085156190936 (Darnell)</li>
								<li>089669914450 (Mita)</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-background">
				<img src={footerBackground} alt="" className="footer-bg-img" />
			</div>
		</footer>
	);
};

export default Footer;
