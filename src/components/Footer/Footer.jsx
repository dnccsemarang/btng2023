// import React from 'react';
import udinus from '../../assets/FooterAssets/udinus.png';
// import pipeGrass from '../../assets/FooterAssets/grass-pipe-2.png';
// import footerBackground from '../../assets/FooterAssets/footer-bg.png';
import './Footer.css';
import '../../../src/index.css';
const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer-title">
					<div className="footer-title-content">
						<h1 className="title">
							press daftar<br></br>to enter btng 2023
						</h1>
					</div>
				</div>
				<div className="footer-content">
					<div className="register-btn-part">
						<div className="daftar-btn-container">
							<div className="logo-pixel-corners--wrapper daftar-btn">
								<div className="logo-pixel">
									<h1 className="text-button text-daftar">daftar</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-more-info-container">
						<div className="more-info-content">
							<div className="media-partner-part">
								<span className="part-title">media partner</span>
								<div className="media-partner-content">
									<div className="partner-logo-item">
										<div className="logo-pixel-corners--wrapper">
											<div className="logo-pixel-corners">
												<img src={udinus} alt="" className="partner-logo" />
											</div>
										</div>
									</div>
									<div className="partner-logo-item">
										<div className="logo-pixel-corners--wrapper">
											<div className="logo-pixel-corners">
												<img src={udinus} alt="" className="partner-logo" />
											</div>
										</div>
									</div>
									<div className="partner-logo-item">
										<div className="logo-pixel-corners--wrapper">
											<div className="logo-pixel-corners">
												<img src={udinus} alt="" className="partner-logo" />
											</div>
										</div>
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
				</div>
				<div className="footer-background">
					<div className="footer-bg-img"></div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
