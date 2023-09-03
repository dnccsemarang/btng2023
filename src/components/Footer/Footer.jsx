import React, { useEffect, useState } from 'react';
import udinus from '../../assets/FooterAssets/udinus.png';
import doscomLogo from '../../assets/FooterAssets/media partner/doscom.png'
import gdscLogo from '../../assets/FooterAssets/media partner/gdsc.png'
import ilkomLogo from '../../assets/FooterAssets/media partner/ilkom.png'
import drcLogo from '../../assets/FooterAssets/media partner/drc.png'
import './Footer.css';
import '../../../src/index.css';
const Footer = () => {
	const [scrollY, setScrollY] = useState(0);
	const scrollThreshold = 1000;

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<footer id="daftar">
				<div className="footer-title">
					<div className="footer-title-content">
						<h1 className="title" data-aos="zoom-in">
							press register<br></br>to enter btng 2023
						</h1>
					</div>
				</div>
				<div className="footer-content">
					<div className="register-btn-part">
						<div className="daftar-btn-container">
							<div className="pipe-grass-left" data-aos="fade-right"></div>
							<div className="logo-pixel-corners--wrapper daftar-btn" data-aos="zoom-in">
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSe-WnWM4TDdTih_H7ff3ZK7udJKuKv_7QJp6GXjhB9PR02P6A/viewform"
									target="_blank"
									rel="noopener noreferrer"
								>
									<div className="logo-pixel">
										<h1 className="text-button text-daftar">register</h1>
									</div>
								</a>
							</div>
							<div className="pipe-grass-right" data-aos="fade-left"></div>
						</div>
					</div>
					<div className="footer-more-info-container">
						<div className="more-info-content">
							<div className="media-partner-part" data-aos="fade-down">
								<span className="part-title">media partner</span>
								<div className="media-partner-content">
									<div className="partner-logo-item">
										<div className="logo-pixel-corners--wrapper">
											<div className="logo-pixel-corners">
												<img src={gdscLogo} alt="" className="partner-logo" />
											</div>
										</div>
									</div>
									<div className="partner-logo-item">
										<div className="logo-pixel-corners--wrapper">
											<div className="logo-pixel-corners">
												<img src={doscomLogo} alt="" className="partner-logo" />
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
												<img src={ilkomLogo} alt="" className="partner-logo" />
											</div>
										</div>
									</div>
									<div className="partner-logo-item">
										<div className="logo-pixel-corners--wrapper">
											<div className="logo-pixel-corners">
												<img src={drcLogo} alt="" className="partner-logo" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="social-media-part" data-aos="fade-down">
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
							<div className="contact-person-part" data-aos="fade-down">
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
				<div className={`back-to-top-container ${scrollY > scrollThreshold ? 'visible' : ''} logo-pixel-corners--wrapper`}>
					<div className="back-to-top" onClick={handleScrollToTop}>
						<span>&uarr;</span>
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
